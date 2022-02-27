import { keydown, keyup} from "./functionality/keyboard.js"
import {update} from "./functionality/update.js"
import {addTree} from "../tree/functionality/addTree.js"
import {createMap} from "./functionality/createMap.js"

/////////////////////////////////////////////////////////////////////////////

// Обработчик нажатия клавиш
document.addEventListener("keydown", keydown);

// Обработчик отжатия клавиш
document.addEventListener("keyup", keyup);

/////////////////////////////////////////////////////////////////////////////

let container = document.getElementById('container');

createMap(container);




/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////

setInterval(update,10);

let player = document.createElement('div');
player.id = 'player';
container.appendChild(player);