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
exports.Ballot = void 0;
const typeorm_1 = require("typeorm");
const _1 = require(".");
let Ballot = class Ballot extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Poll, (poll) => poll.poll_id, { primary: true }),
    (0, typeorm_1.JoinColumn)({ name: "poll_id" }),
    __metadata("design:type", _1.Poll)
], Ballot.prototype, "poll", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.user_id, { primary: true }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", _1.User)
], Ballot.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], Ballot.prototype, "selections", void 0);
Ballot = __decorate([
    (0, typeorm_1.Entity)("ballots")
], Ballot);
exports.Ballot = Ballot;
//# sourceMappingURL=BallotEntity.js.map