"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend_1 = require("./Friend");
var friend1 = new Friend_1.Friend("Dave Grohl", 52, "dave@ff.com", true);
var friend2 = new Friend_1.Friend("Sean Blessing", 50, "sean@ff.com", false);
var friend3 = new Friend_1.Friend("Linda Crook", 35, "linda@ff.com", true);
var friend4 = new Friend_1.Friend("Michelle Jowers", 53, "michelle@ff.com", false);
var friend5 = new Friend_1.Friend("Matt Childers", 24, "matt@ff.com", true);
var friends = [friend1, friend2, friend3, friend4, friend5];
console.log("List of friends...");
console.log("Nmae", "Age", "Email", "BFF");
friends.forEach(function (f) {
    console.log(f.name, f.age, f.email, f.bff);
});
