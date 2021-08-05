"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Movie_1 = require("./Movie");
var movie1 = new Movie_1.Movie(1, "Inception", 2010, "PG-13", "Christopher Nolan");
var movie2 = new Movie_1.Movie(2, "Shutter Island", 2016, "R", "Christopher Nolan");
var movie3 = new Movie_1.Movie(3, "Interstellar", 2018, "PG-13", "Christopher Nolan");
var movies = [movie1, movie2, movie3];
movies.forEach(function (m) {
    console.log(m.id, m.title, m.year, m.rating, m.director);
});
