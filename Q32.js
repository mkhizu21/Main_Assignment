"use strict";
// Q32
let current_users = ["admin", "jaden", "james", "john", "jacob"];
let new_users = ["ahmad", "jaden", "ali", "khizar", "jacob"];
for (let i = 0; i < new_users.length; i++) {
    let is_taken = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i] == current_users[j]) {
            is_taken = true;
            break;
        }
    }
    if (is_taken) {
        console.log("Username " + new_users[i] + " is taken");
    }
    else {
        console.log("Username " + new_users[i] + " is available");
    }
}
