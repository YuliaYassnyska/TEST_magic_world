import { keydown, keyup} from "./functionality/keyboard.js"
import {update} from "./functionality/update.js"
import {addTree} from "../tree/functionality/addTree.js"

// Обработчик нажатия клавиш
document.addEventListener("keydown", keydown);

// Обработчик отжатия клавиш
document.addEventListener("keyup", keyup);

let container = document.getElementById('container');
let player = document.createElement('div');
player.id = 'player';
container.appendChild(player);


let ground = document.querySelector("#ground");

///////////////////////////////////////////
addTree(ground);



setInterval(update,10);