let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let selectBody = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "#333";
        logo.src = "images/byui-logo-white.png";
        selectBody.style.color = "white";
        document.getElementById("content").style.border = "1px solid white";

    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "white";
        logo.src = "images/byui-logo-blue.webp";
        selectBody.style.color = "black";
        document.getElementById("content").style.border = "1px solid black";
    }
}                      