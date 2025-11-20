var shape = prompt("Choose a shape: square, rectangle, triangle, circle");

shape = shape.toLowerCase();

var perimeter;

if (shape === "square") {
    var side = Number(prompt("Enter the side length:"));
    perimeter = 4 * side;
}

if (shape === "rectangle") {
    var length = Number(prompt("Enter the length:"));
    var width = Number(prompt("Enter the width:"));
    perimeter = 2 * (length + width);
}

if (shape === "triangle") {
    var a = Number(prompt("Enter side A:"));
    var b = Number(prompt("Enter side B:"));
    var c = Number(prompt("Enter side C:"));
    perimeter = a + b + c;
}

if (shape === "circle") {
    var r = Number(prompt("Enter the radius:"));
    perimeter = 2 * Math.PI * r;
}

