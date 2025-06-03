function rollDice(){
let dice = Math.floor(Math.random()*6+1)
// console.log(dice);
let diceDiv = document.getElementById("dice")
diceDiv.innerHTML = ""
let p = document.createElement("p")
p.innerText = dice
diceDiv.append(p)
}
