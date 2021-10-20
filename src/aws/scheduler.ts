import AWS from "aws-sdk";
const eventBridge = new AWS.EventBridge();
const lambda = new AWS.Lambda();

module.exports.lambdaA = async (event: AWS.EventBridge) => {
  const ruleName = "MyProgramaticRuleName";
  const ruleParams = {
    Name: ruleName,
    ScheduleExpression: "cron(0/15 * * * ? *)",
  };

  const rule = await eventBridge.putRule(ruleParams).promise();

  const permissionParams = {
    Action: "lambda:InvokeFunction",
    FunctionName: "LambdaB",
    Principal: "events.amazonaws.com",
    StatementId: ruleName,
    SourceArn: rule.RuleArn,
  };

  await lambda.addPermission(permissionParams).promise();

  const targetParams = {
    Rule: ruleName,
    Targets: [
      {
        Id: `${ruleName}-target`,
        Arn: `arn:aws:lambda:${process.env.AWS_REGION}:${
          Number(process.env.AWS_ACCOUNT_ID)
        }:function:LambdaB`,
        Input: '{ "data": "data for Lambda B" }',
      },
    ],
  };

  const result = await eventBridge.putTargets(targetParams).promise();

  return result;
};
