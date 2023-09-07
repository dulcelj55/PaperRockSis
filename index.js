let comPaper = document.getElementById("comPaper")
let comRock = document.getElementById("comRock")
let comScissor = document.getElementById("comScissor")
let playPaper = document.getElementById("playPaper")
let playRock = document.getElementById("playRock")
let playScissor = document.getElementById("playScissor")
let winComp = document.getElementById("compWin")
let game = ["paper", "rock", "scissor"]



    let randomIndex= Math.floor(Math.random()*game.length);
    randomObject= game[randomIndex]
    console.log (randomObject)


playPaper.addEventListener('click', function (e) {
    e.preventDefault();
    
        if (randomObject === "paper"){
            winComp.hidden= false
            winComp.innerHTML= "IT'S A TIE!"
            comPaper.style.backgroundColor=  "#ffb6d7"
            playPaper.style.backgroundColor= "#ffddf0"
            
        }else if (randomObject === "rock" ){
            winComp.hidden= false
            winComp.innerHTML= "YOU WIN!"
            comRock.style.backgroundColor=  "#ffb6d7"
            playPaper.style.backgroundColor= "#ffddf0"

        }else if (randomObject === "scissor" ){
            winComp.hidden= false
            winComp.innerHTML= "COMPUTER WINS!"
            comScissor.style.backgroundColor=  "#ffb6d7"
            playPaper.style.backgroundColor= "#ffddf0"
        }
    


    
    console.log (randomObject)
});


playRock.addEventListener('click', function(e) {
    e.preventDefault()
    

        if (randomObject=== "rock"){
            winComp.hidden= false
            winComp.innerHTML= "IT'S A TIE!"
            comRock.style.backgroundColor= "#ffb6d7"
            playRock.style.backgroundColor= "#ffddf0"

        } if (randomObject === "scissor" ){
            winComp.hidden= false
            winComp.innerHTML= "YOU WIN!"
            comScissor.style.backgroundColor= "#ffb6d7"
            playRock.style.backgroundColor= "#ffddf0"
        }else if (randomObject === "paper" ){
            winComp.hidden= false
            winComp.innerHTML= "COMPUTER WINS!"
            playRock.style.backgroundColor= "#ffddf0"
            comPaper.style.backgroundColor= "#ffb6d7"
   
        }


   
        
            console.log (randomObject)
})
playScissor.addEventListener('click', function(e) {
    e.preventDefault()
   

        if (randomObject=== "scissor"){
            winComp.hidden= false
            winComp.innerHTML= "IT'S A TIE!"
            playScissor.style.backgroundColor= "#ffddf0"
            comScissor.style.backgroundColor= "#ffb6d7"
        }else if (randomObject === "paper" ){
            winComp.hidden= false
            winComp.innerHTML= "YOU WIN!"
            playScissor.style.backgroundColor= "#ffddf0"
            comPaper.style.backgroundColor= "#ffb6d7"
        }else if (randomObject === "rock" ){
            winComp.hidden= false
            winComp.innerHTML= "COMPUTER WINS!"
            playScissor.style.backgroundColor= "#ffddf0"
            comRock.style.backgroundColor= "#ffb6d7"
   
        }


   
        
            console.log (randomObject)
    
})