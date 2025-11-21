function palindrome(mystring) {

    var input = prompt("Enter a word that you want to check for palindrome: ");
    
    var reversedInput = input.split('').reverse().join('');

    if (input === reversedInput) {
        document.write("<div>"+ mystring + ": " + input + " is a palindrome.</div>");
    }
    else {
        document.write("<div>"+ mystring + ": " + input + " is not a palindrome.</div>");
    }
}

palindrome("Result");