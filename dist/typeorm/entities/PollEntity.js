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
exports.Poll = void 0;
const typeorm_1 = require("typeorm");
const PollInterfaces_1 = require("../../interfaces/PollInterfaces");
const _1 = require(".");
let Poll = class Poll extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Poll.prototype, "poll_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.created_polls, { cascade: true }),
    __metadata("design:type", _1.User)
], Poll.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20, unique: true }),
    __metadata("design:type", String)
], Poll.prototype, "poll_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20 }),
    __metadata("design:type", String)
], Poll.prototype, "prompt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Poll.prototype, "vote_system", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: PollInterfaces_1.PollType }),
    __metadata("design:type", String)
], Poll.prototype, "poll_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-array" }),
    __metadata("design:type", Array)
], Poll.prototype, "candidates", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: PollInterfaces_1.PollStatus,
        default: PollInterfaces_1.PollStatus.JUST_CREATED,
    }),
    __metadata("design:type", String)
], Poll.prototype, "poll_status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Ballot, (ballot) => ballot.poll, { cascade: true }),
    __metadata("design:type", Array)
], Poll.prototype, "poll_ballots", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.User, (user) => user.registered_polls),
    __metadata("design:type", Array)
], Poll.prototype, "registered_users", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamptz", default: () => "NOW()" }),
    __metadata("design:type", Date)
], Poll.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz" }),
    __metadata("design:type", Date)
], Poll.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz" }),
    __metadata("design:type", Date)
], Poll.prototype, "end_time", void 0);
Poll = __decorate([
    (0, typeorm_1.Entity)({ name: "polls" })
], Poll);
exports.Poll = Poll;
//# sourceMappingURL=PollEntity.js.map