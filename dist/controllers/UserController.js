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
exports.UserController = void 0;
const express_1 = require("@decorators/express");
const entities_1 = require("../typeorm/entities/");
const typeorm_1 = require("typeorm");
const Express = __importStar(require("express"));
let UserController = class UserController {
    constructor() {
    }
    async getOneUser(res, user_id) {
        try {
            res.json(await (0, typeorm_1.getRepository)(entities_1.User).findOne(user_id));
        }
        catch (error) {
            res.json(error);
        }
    }
    async getCreatedPolls(res, user_id) {
        try {
            const userRepository = await (0, typeorm_1.getRepository)(entities_1.User).findOne({
                where: { user_id },
                relations: ["created_polls"],
            });
            res.json(userRepository);
        }
        catch (error) {
            res.json(error);
        }
    }
    async addUser(res, req, body) {
        try {
            const userRepository = (0, typeorm_1.getRepository)(entities_1.User);
            await userRepository.save(body);
            res.json({
                status: 200,
            });
        }
        catch (error) {
            res.json(error);
        }
    }
    async addPoll(res, req, user_id, body) {
        try {
            const pollRepository = (0, typeorm_1.getRepository)(entities_1.Poll);
            const created_poll = await pollRepository.save(body);
            res.json({
                status: 200,
                created_poll,
            });
        }
        catch (error) {
            res.json(error);
        }
    }
};
__decorate([
    (0, express_1.Get)("/:id"),
    __param(0, (0, express_1.Response)()),
    __param(1, (0, express_1.Params)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOneUser", null);
__decorate([
    (0, express_1.Get)("/:id/created-polls"),
    __param(0, (0, express_1.Response)()),
    __param(1, (0, express_1.Params)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getCreatedPolls", null);
__decorate([
    (0, express_1.Post)("/new-user"),
    __param(0, (0, express_1.Response)()),
    __param(1, (0, express_1.Request)()),
    __param(2, (0, express_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addUser", null);
__decorate([
    (0, express_1.Post)("/:id/add-poll"),
    __param(0, (0, express_1.Response)()),
    __param(1, (0, express_1.Request)()),
    __param(2, (0, express_1.Params)("id")),
    __param(3, (0, express_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addPoll", null);
UserController = __decorate([
    (0, express_1.Controller)("/users"),
    __metadata("design:paramtypes", [])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map