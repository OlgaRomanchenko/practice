" use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {count:numberOfFilms,
     movies:{}, 
     actors:{}, 
     genres:[], 
     privat:false};

let a = prompt("Один из последних просмотреных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотреных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");


for(let i=0; i<2; i++){
     const a = prompt("Один из последних просмотреных фильмов?", ""),
           b = prompt("На сколько оцените его?", "");
     if (a != null && b != null && a!='' && b !='' && a.length<50){
          personalMovieDB.movies[a]=b;
     }else {
          i--;
     }
}

     

personalMovieDB.movies[a]=b;   
personalMovieDB.movies[c]=d;

console.log(numberOfFilms);