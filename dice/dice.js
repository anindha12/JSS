let dice;

const dices = {
    1: "dice1.png",
    2: "dice2.png",
    3: "dice3.png",
    4: "dice4.png",
    5: "dice5.png",
    6: "dice6.png"
};

let stopped = true;
let t;

function change() {
    const random = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = "<img src='images/" + dices[random] + "' alt='Dice showing " + random + "'>";
}

function stopstart() {
    if (stopped) {
        stopped = false;
        t = setInterval(change, 100);
    } else {
        clearInterval(t);
        stopped = true;
    }
}

window.onload = function () {
    dice = document.getElementById("dice");
    dice.innerHTML = "<img src='images/" + dices[1] + "' alt='Dice showing 1'>";
    
    document.getElementById("start").addEventListener("click", stopstart);
};

