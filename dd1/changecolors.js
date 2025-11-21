function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function changeTextColor() {
    var randomColor = getRandomColor();
    document.body.style.color = randomColor;
    document.querySelectorAll("h1, h2, h3, p, div, button").forEach(function(element) {
        element.style.color = randomColor;
    });
}
