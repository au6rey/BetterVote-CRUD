"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const PollEntity_1 = require("./PollEntity");
const BallotEntity_1 = require("./BallotEntity");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20, unique: true }),
    __metadata("design:type", String)
], User.prototype, "user_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PollEntity_1.Poll, (poll) => poll.created_by, { cascade: true }),
    __metadata("design:type", Array)
], User.prototype, "created_polls", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PollEntity_1.Poll, (poll) => poll.created_by, { cascade: true }),
    __metadata("design:type", Array)
], User.prototype, "registered_polls", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => BallotEntity_1.Ballot, (ballot) => ballot.user, { cascade: true }),
    __metadata("design:type", Array)
], User.prototype, "submitted_ballots", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "time with time zone", default: () => "NOW()" }),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
User = __decorate([
    (0, typeorm_1.Entity)("users")
], User);
exports.User = User;
//# sourceMappingURL=UserEntity.js.map