import {guests} from "./Q14";

 console.log(guests[2] + " won't be able to make it to the dinner");
    console.log();
    guests[2] = "Ex's friend";

for (const i of guests) {
    console.log("Hey " + i + "! I am writing this to invite you for dinner at my place.");    
    console.log();
}

export var guestss: string[] = ["Ex", "wife", "Aunt"];