'use strict';

let flag = document.getElementById('flag');
let buttons = document.getElementsByClassName("button");  
let max = 29,
    min = 1;

fetch('./flags.json')                   //import JSON 
  .then(res=> res.json())               // convers JSON 
  .then(data => {let DB = data;
                return DB;})  
  .then (DB => console.log(DB))
  .tnen (DB => startPartGame(DB))
  .catch(error => {
    alert(error);                     // Error: Not Found
  })
 
// PART GAME
function startPartGame(DB){
 let exception = [];
 let random = randIntExcep(min, max, exception);
  exception.push(random);
  flag.setAttribute('src', DB[random].Flag);
}
// END PART GAME

// RANDOM!
    function randIntExcep(min, max, exp) {
        var n,
            exp = Array.isArray(exp) ? exp : [(isNaN(exp) ? min-1 : exp)];
        while(true){
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            if(exp.indexOf(n) < 0) return n;
        }
    }
// END RANDOM!