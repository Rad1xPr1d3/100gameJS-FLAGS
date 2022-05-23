// connect JSON
(async () => {
    let DB = await(await fetch('flags.json')).json(); //? разобраться как это работает
    let flag = document.getElementById('flag');
    let buttons = document.getElementsByClassName("button");
    let randomNumber = randIntExcep(1, 17);
    let newFlag = DB[randomNumber].Flag;
    flag.setAttribute('src', newFlag);

    let randomButtons = randIntExcep(0, 2);
    buttons[randomButtons] = "123";

    for (let item of buttons) {
        item.innerHTML = DB[randomNumber].Country;
        randomNumber = randIntExcep(1, 17);
    }



    console.log(randomButtons);
    console.log(randomNumber);

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
})();