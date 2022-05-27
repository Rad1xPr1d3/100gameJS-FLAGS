console.log(DB);

const min = 1, max = 26, exp = [];

const flag = document.getElementById('flag');
const buttons = document.querySelectorAll("button");

startGame();
console.log(exp); 

// START GAME
    function startGame() {
        let randomNumber = randIntExcep(min, max, exp);
        let newFlag = DB[randomNumber].Flag;
        flag.setAttribute('src', newFlag);
        exp.push(randomNumber);
        
    let expButton =[];
        buttons.forEach(item => {
        randomButtonsCountry = randIntExcep(min, max, expButton);
        item.innerHTML = DB[randomButtonsCountry].Country;
        expButton.push(randomButtonsCountry);
    })
    console.log("Исключения для кнопок " + expButton);
    buttons[randIntExcep(0, 2)].innerHTML = DB[randomNumber].Country;
    }
// END START GAME

console.log(buttons);

 buttons.forEach(function(entry){
    entry.addEventListener('click', responseAnswer);	
 });

// RESPONSE ANSWER
    function responseAnswer() {
    console.log("Нажали кнопку " );
    startGame();
    }
// END RESPONSE ANSWER!



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



