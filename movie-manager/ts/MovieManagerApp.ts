import { Movie } from './Movie';

let movie1: Movie = new Movie (1, "Inception", 2010, "PG-13", "Christopher Nolan");
let movie2: Movie = new Movie (2, "Shutter Island", 2016, "R", "Christopher Nolan");
let movie3: Movie = new Movie (3, "Interstellar", 2018, "PG-13", "Christopher Nolan");

let movies: Movie[] = [movie1, movie2, movie3];
let movie4: Movie = new Movie (4, "The Dark Knight Rises", 2012, "PG-13", "Christopher Nolan");
movies.push(movie4);

movies.forEach(m => {
    console.log(m.id, m.title, m.year, m.rating, m.director);
});

// Other Loop
for(let m of movies) {
    console.log(m.id, m.title, m.year, m.rating, m.director);
}