"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestss = void 0;
const Q14_1 = require("./Q14");
console.log(Q14_1.guests[2] + " won't be able to make it to the dinner");
console.log();
Q14_1.guests[2] = "Ex's friend";
for (const i of Q14_1.guests) {
    console.log("Hey " + i + "! I am writing this to invite you for dinner at my place.");
    console.log();
}
exports.guestss = ["Ex", "wife", "Aunt"];
