var shape = prompt("Choose a shape: square, rectangle, triangle, circle");

shape = shape.toLowerCase();

var perimeter;

if (shape === "square") {
    var side = Number(prompt("Enter the side length:"));
    var h = 4 * side;
    alert("The perimeter of the square is: " + h);

}

if (shape === "rectangle") {
    var length = Number(prompt("Enter the length:"));
    var width = Number(prompt("Enter the width:"));
    var f = 2 * (length + width);
    alert("The perimeter of the rectangle is: " + f);
}

if (shape === "triangle") {
    var a = Number(prompt("Enter side A:"));
    var b = Number(prompt("Enter side B:"));
    var c = Number(prompt("Enter side C:"));
    var e = a + b + c;
    alert("The perimeter of the triangle is: " + e);
}

if (shape === "circle") {
    var r = Number(prompt("Enter the radius:"));
   var v = 2 * Math.PI * r
   alert("The perimeter (circumference) of the circle is: " + v);
}

