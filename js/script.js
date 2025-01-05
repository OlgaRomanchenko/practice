" use strict";

let numberOfFilms;

function start(){
     const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

     while(numberOfFilms == ''|| numberOfFilms == null ||  isNaN(numberOfFilms)){
          const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

     }

}

start();


const personalMovieDB = {count:numberOfFilms,
     movies:{}, 
     actors:{}, 
     genres:[], 
     privat:false};



function rememberMyFilms() {

     for(let i=0; i<2; i++) {
          const a = prompt("Один из последних просмотреных фильмов?", ""),
                b = prompt("На сколько оцените его?", "");

          if (a != null && b != null && a != '' && b != '' && a.length<50){
                    personalMovieDB.movies[a]=b;
                    console.log( 'done');
          }else{
               console.log('error');
               i--;
          }
     }
}

rememberMyFilms();

function detecPersonalLevel() {
     if(personalMovieDB.count<10){
          console.log('Просмотрено мало фильмов');

     }else if(personalMovieDB.count >=10 && personalMovieDB < 30){
          console.log('Вы классический зритель');
     }else if(personalMovieDB >=30){
          console.log('Вы киноман');
     }else{
          console.log('Произошла ошибка');
     }
}

detecPersonalLevel();

function showMyDB (hidden) {
     if (!hidden){
          console.log(numberOfFilms);
     }
}

showMyDB(personalMovieDB.privat);


function writeYouGenres(){
     for (let i=1; i<=3; i++){
          const genre = promt(`Ваш любимый жанр под номером ${i}`);
          personalMovieDB.genres[i - 1]=genre;
     }
}

writeYouGenres();