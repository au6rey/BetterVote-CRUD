"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollType = exports.PollStatus = void 0;
// export type PollStatus = "JUST_CREATED" | "ACTIVE" | "ENDED";
var PollStatus;
(function (PollStatus) {
    PollStatus["JUST_CREATED"] = "JUST_CREATED";
    PollStatus["ACTIVE"] = "ACTIVE";
    PollStatus["ENDED"] = "ENDED";
})(PollStatus = exports.PollStatus || (exports.PollStatus = {}));
var PollType;
(function (PollType) {
    PollType["PRIVATE"] = "PRIVATE";
    PollType["PUBLIC"] = "PUBLIC";
})(PollType = exports.PollType || (exports.PollType = {}));
//# sourceMappingURL=PollInterfaces.js.map