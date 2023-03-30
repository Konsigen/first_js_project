const numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?","");
const personalMovieDB = {
    count: numberOfFilms,
    movies:{

    },
    actors:{
        
    },
    genres:[

    ],
    privat:false,
};
const a = prompt("Один з фільмів,які ви недавно подивилися?",""),
      b = prompt("На скільки ви його оціните?",""),
      c = prompt("Один з фільмів,які ви недавно подивилися?",""),
      d = prompt("На скільки ви його оціните?","");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

