"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const express_1 = require("@decorators/express");
const entities_1 = require("../typeorm/entities");
const Express = __importStar(require("express"));
let TestController = class TestController {
    constructor() {
    }
    //Ensure authenticated
    async addPoll(res, req, poll_id) {
        // res.json(await Poll.findOne(poll_id));
    }
    async getPoll(res, poll_id) {
        res.json(await entities_1.Poll.findOne(poll_id));
    }
    //Private route
    //   @Get("/:id/registered-voters")
    //   async getRegisteredUsers(
    //     @Response() res: Express.Response,
    //     @Params("id") poll_id: string,
    //   ) {
    //     // res.json(await Poll.findOne(poll_id));
    //   }
    async getBallots(res, poll_id) {
        // res.json(await Poll.findOne(poll_id));
    }
    //Ensure authenticated
    async editPoll(res, poll_id) {
        // res.json(await Poll.findOne(poll_id));
    }
    //Ensure authenticated
    async deletePoll(res, poll_id) {
        // res.json(await Poll.findOne(poll_id));
    }
};
__decorate([
    (0, express_1.Post)("/new-poll"),
    __param(0, (0, express_1.Response)()),
    __param(1, (0, express_1.Request)()),
    __param(2, (0, express_1.Params)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "addPoll", null);
__decorate([
    (0, express_1.Get)("/:id"),
    __param(0, (0, express_1.Response)()),
    __param(1, (0, express_1.Params)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "getPoll", null);
__decorate([
    (0, express_1.Get)("/:id/ballots"),
    __param(0, (0, express_1.Response)()),
    __param(1, (0, express_1.Params)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "getBallots", null);
__decorate([
    (0, express_1.Patch)("/:id/edit"),
    __param(0, (0, express_1.Response)()),
    __param(1, (0, express_1.Params)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "editPoll", null);
__decorate([
    (0, express_1.Delete)("/delete/:id"),
    __param(0, (0, express_1.Response)()),
    __param(1, (0, express_1.Params)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "deletePoll", null);
TestController = __decorate([
    (0, express_1.Controller)("/polls"),
    __metadata("design:paramtypes", [])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=PollController.js.map