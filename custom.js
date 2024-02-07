

let inputVal = document.getElementById('inpt')
let submit = document.getElementById('subt')
let PreGuess = document.getElementById('preguess')
let remainGuess = document.getElementById('remainguess')
let title = document.getElementById('heading')
let startGame = document.getElementById('start')
let status1 = document.getElementById('status')
startGame.style.display = "none";
remainGuess.innerText = 1;
let preGuess = []



let randomNumber = ()=>{
   return Math.floor(Math.random()*100);
}


submit.addEventListener("click",()=>{

    if(isNaN(inputVal.value)){
        alert("Please Enter a Valid Number")
    }
    else if(inputVal.value < 1)
    {
        alert("Please Enter a number greater then 1")
    }
    else if(inputVal.value > 100)
    {
        alert("Please Enter a Number under 100")
    }   
    else{
    if(remainGuess.innerText > 0)
    {
        
    if(randomNumber() == parseInt(inputVal.value)){

            // title.innerText = `You wont, Random number was ${randomNumber()}`;
            preGuess.push(inputVal.value)
            PreGuess.innerText = `${preGuess}`;
            
            if(inputVal.value > randomNumber())
            inputVal.value = ""
            remainGuess.innerText--;
    }
    else if(randomNumber() > parseInt(inputVal.value))
    {
        // status1.innerText =  `Number is low ${randomNumber()}`;
        preGuess.push(inputVal.value)
        PreGuess.innerText = `${preGuess}`;
        inputVal.value = "" 
        remainGuess.innerText--;
    }
    else if(randomNumber() < parseInt(inputVal.value))
    {
        // status1.innerText =  `Number is high ${randomNumber()}`;
        preGuess.push(inputVal.value)
        PreGuess.innerText = `${preGuess}`;
        inputVal.value = "" 
        remainGuess.innerText--;
    }
    else{
        preGuess.push(inputVal.value)
        PreGuess.innerText = `${preGuess}`;
        inputVal.value = "" 
        remainGuess.innerText--;
    }
    }
    else{

        title.innerText =  `Game Over, Random Number was ${randomNumber()}`;
        inputVal.value = "" 
        inputVal.disabled = true;
        submit.style.display = "none";
        startGame.style.display = "block";
        startGame.style.backgroundColor = "green";

    }
}
})


const startNewGame = ()=>{
    startGame.addEventListener("click",()=>{
        inputVal.value = "" 
        inputVal.disabled = false;
            title.innerText = "Guess a number";
            submit.style.display = "block";
            startGame.style.display = "none";
            remainGuess.innerText = 10;
            let preGuess = []
            PreGuess.innerText = ``;
            status1.innerText =  `status`;
    })
}




// This is basic way to writing code , I will use function for the better management of the code