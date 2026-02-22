const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "images/snortleblat.webp",
    alt: "A humanoid reptile with tattered clothing and a weapon stands in a misty swamp surrounded by bare trees."

}

// Declare Variables
const nameDisplay = document.querySelector(".name");
const classnameDisplay = document.querySelector(".className");
const healthDisplay = document.querySelector(".health");
const levelDisplay = document.querySelector(".level");
const attackedBtn = document.getElementById("attacked");
const levelupBtn = document.getElementById("levelup");
const messageDisplay = document.querySelector(".message");

// Insert Image with Alt Text and Image Width
document.querySelector('img').setAttribute('src',character.image);
document.querySelector('img').setAttribute('alt',character.alt);
document.querySelector('img').style.width='400px';

// Insert Character Name
nameDisplay.textContent = character.name;

// Insert Character Stats
classnameDisplay.textContent = character.class;
levelDisplay.textContent = character.level;
healthDisplay.textContent = character.health;

// Function for Attack Button
attackedBtn.addEventListener("click", function() {
    if (character.health > 0) {
        character.health -= 20;
        if (character.health < 0) {
            character.health = 0;
        }
        healthDisplay.textContent = character.health;

        if (character.health === 0) {
            alert("Character Died");
            messageDisplay.textContent = "Character Died"
            attackedBtn.disabled = true;
            levelupBtn.disabled = true;
        }
    }
});

// Function for Level Up Button
levelupBtn.addEventListener("click", function() {
    character.level +=1;

    levelDisplay.textContent = character.level
})
