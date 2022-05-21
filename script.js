// connect JSON
let DB;
(async () => {
    DB = await(await fetch('flags.json')).json(); //? разобраться как это работает
     console.log(DB.Aruba.Flag);
     console.log(DB.Aruba.Flag);
    let flag = document.getElementById('flag');
    let newFlag = DB.Aruba.Flag;
    flag.setAttribute('src', newFlag);
})();


