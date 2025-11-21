var choice  = prompt("Welcome to Area Calculator. /nChoose the shape to calculate area for: \n1. Rectangle \n2. Triangle \n3. Circle  \n4. Parellelogram" );

if (choice == 1) {
    var l = prompt("Enter the length:")
    var b = prompt("Enter the breadth:")
    var result = Number(l) * Number(b)
    alert("The area of the rectangle is: " + result);
}
if (choice == 2) {
    var h = prompt("Enter the height:")
    var b = prompt("Enter the base:")
    var result = Number(b) * Number(h) /2
    alert("The area of the triangle is: " + result);
}
if (choice == 3) {
    var r = prompt("Enter the radius:")
    var result = 3.14 * Number(r) * Number(r)
    alert("The area of the circle is: " + result);
}
if (choice == 4) {
    var b = prompt("Enter the base:")
    var h = prompt("Enter the height:")
    var result = Number(b) * Number(h)
    alert("The area of the parellelogram is: " + result);
}

