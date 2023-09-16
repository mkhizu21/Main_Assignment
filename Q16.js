"use strict";
//You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.Add one new guest to the beginning of your array.Add one new guest to the middle of your array Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestsss = void 0;
const Q15_1 = require("./Q15");
// console.log(guests[2] + " won't be able to make it to the dinner");
//     console.log();
//     guests[2] = "Ex's friend";
// for (const i of guests) {
//     console.log("Hey " + i + "! I am writing this to invite you for dinner at my place.");    
//     console.log();
// }
console.log("I found a bigger dinner table, so now more space is available");
console.log();
Q15_1.guestss.unshift("Ex's friend's friend");
Q15_1.guestss.splice(2, 0, "Aunt");
Q15_1.guestss.push("Uncle");
for (const i of Q15_1.guestss) {
    console.log("Hey " + i + "! I am writing this to invite you for dinner at my place.");
    console.log();
}
exports.guestsss = Q15_1.guestss;
