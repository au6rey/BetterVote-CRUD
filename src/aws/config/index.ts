import AWS from "aws-sdk";
export default async () => {
  AWS.config.region = process.env.AWS_REGION;
};
