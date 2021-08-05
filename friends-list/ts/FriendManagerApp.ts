import { Friend } from './Friend';

let friend1: Friend = new Friend ("Dave Grohl", 52, "dave@ff.com", true);
let friend2: Friend = new Friend ("Sean Blessing", 50, "sean@ff.com", false);
let friend3: Friend = new Friend ("Linda Crook", 35, "linda@ff.com", true);
let friend4: Friend = new Friend ("Michelle Jowers", 53, "michelle@ff.com", false);
let friend5: Friend = new Friend ("Matt Childers", 24, "matt@ff.com", true);

let friends: Friend[] = [friend1, friend2, friend3, friend4, friend5];

console.log("List of friends...");
console.log("Nmae", "Age", "Email", "BFF");
friends.forEach(f => {
    console.log(f.name, f.age, f.email, f.bff);
});