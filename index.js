let comPaper = document.getElementById("comPaper")
let comRock = document.getElementById("comRock")
let comScissor = document.getElementById("comScissor")
let playPaper = document.getElementById("playPaper")
let playRock = document.getElementById("playRock")
let playScissor = document.getElementById("playScissor")
let winComp = document.getElementById("compWin")
let game = ["paper", "rock", "scissor"]

playPaper.addEventListener('click', function () {
    for (let i=0; i<  game.length; i++){
        let randomIndex= Math.floor(Math.random()*game.length);
        randomObject= game[randomIndex]

        if (randomObject== "paper"){
            winComp.hidden= false
            winComp.innerHTML= "IT'S A TIE!"
            comPaper.style.backgroundColor= "blue"
            playPaper.style.backgroundColor= "red"
            
        }else if (randomObject == "rock" ){
            winComp.hidden= false
            winComp.innerHTML= "YOU WIN!"
            comRock.style.backgroundColor= "blue"
            playPaper.style.backgroundColor= "red"

        }else if (randomObject == "scissor" ){
            winComp.hidden= false
            winComp.innerHTML= "COMPUTER WINS!"
            comScissor.style.backgroundColor= "blue"
            playPaper.style.backgroundColor= "red"
        }
    }


    
    console.log (randomObject)
});


playRock.addEventListener('click', function() {
    for (let i=0; i<  game.length; i++){
        let randomIndex= Math.floor(Math.random()*game.length);
        randomObject= game[randomIndex]

        if (randomObject== "rock"){
            winComp.hidden= false
            winComp.innerHTML= "IT'S A TIE!"
            comRock.style.backgroundColor= "blue"
            playRock.style.backgroundColor= "red"

        }else if (randomObject == "scissor" ){
            winComp.hidden= false
            winComp.innerHTML= "YOU WIN!"
            comScissor.style.backgroundColor= "blue"
            playRock.style.backgroundColor= "red"
        }else if (randomObject == "paper" ){
            winComp.hidden= false
            winComp.innerHTML= "COMPUTER WINS!"
            playRock.style.backgroundColor= "red"
            comPaper.style.backgroundColor= "blue"
   
        }


   
        }
            console.log (randomObject)
})
playScissor.addEventListener('click', function() {
    for (let i=0; i<  game.length; i++){
        let randomIndex= Math.floor(Math.random()*game.length);
        randomObject= game[randomIndex]

        if (randomObject== "scissor"){
            winComp.hidden= false
            winComp.innerHTML= "IT'S A TIE!"
            playScissor.style.backgroundColor= "red"
            comScissor.style.backgroundColor= "blue"
        }else if (randomObject == "paper" ){
            winComp.hidden= false
            winComp.innerHTML= "COMPUTER LOSES!"
            playScissor.style.backgroundColor= "red"
            comPaper.style.backgroundColor= "blue"
        }else if (randomObject == "rock" ){
            winComp.hidden= false
            winComp.innerHTML= "COMPUTER WINS!"
            playScissor.style.backgroundColor= "red"
            comRock.style.backgroundColor= "blue"
   
        }


   
        }
            console.log (randomObject)
    
})