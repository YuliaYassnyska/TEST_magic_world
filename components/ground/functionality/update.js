import {PressRight, PressLeft, PressForward, PressBack} from "./keyboard.js"

function groundPosition(x,y,rx) {
	this.x = x;
	this.y = y;
	this.rx = rx;
}

let position = new groundPosition(0,0,45);
let ground = document.getElementById("ground");

export const update = () => {
	
	// Высчитываем смещения
	
	let dx = (PressRight - PressLeft);
	let dy = - (PressForward - PressBack);
	
	// Прибавляем смещения к координатам
	
	position.x += dx;
	position.y += dy;
	
	// Изменяем координаты мира (для отображения)
	
	ground.style.transform = 
	"rotateX(" + (position.rx) + "deg)" +
	"translate3d(" + (-position.x) + "px," + (-position.y) + "px," + 0 + "px)";
	
};