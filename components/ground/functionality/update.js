import {PressRight, PressLeft, PressForward, PressBack} from "./keyboard.js"
import {moveMap} from "./createMap.js"

function groundPosition(x,y) {
	this.x = x;
	this.y = y;
}

let position = new groundPosition(0,0);

export const update = () => {
	
	// Высчитываем смещения
	
	let dx = (PressRight - PressLeft);
	let dy = - (PressForward - PressBack);
	
	// Прибавляем смещения к координатам
	
	position.x += dx;
	position.y += dy;
	
	// Изменяем координаты мира (для отображения)
	
	moveMap(position.x, position.y);
	
};