var myForm = document.getElementById('myform');
var myInput = document.getElementById('myinput');
var myItem = document.getElementById('myitem');

myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createItem(myInput.value);
});

function createItem(inputItem) {
    var items = `
        <li>${inputItem}
            <button onclick="deleteElement(this)">Delete</button>
        </li>
    `;
    myItem.insertAdjacentHTML('beforeend', items);
    myInput.value = "";
    myInput.focus();
}

function deleteElement(elementToDelete) {
    if (elementToDelete && elementToDelete.parentElement) {
        elementToDelete.parentElement.remove();
    }
}
