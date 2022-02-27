function groundPosition(x,y,rx) {
	this.x = x;
	this.y = y;
	this.rx = rx;
}

var PressBack = 0;
var PressForward = 0;
var PressLeft = 0;
var PressRight = 0;
var PressUp = 0;

// Обработчик нажатия клавиш

document.addEventListener("keydown", (event) =>{
	if (event.key == "a"){
		PressLeft = 1;
	}
	if (event.key == "w"){
		PressForward = 1;
	}
	if (event.key == "d"){
		PressRight = 1;
	}
	if (event.key == "s"){
		PressBack = 1;
	}
	if (event.keyCode == 32 && onGround){
		PressUp = 1;
	}
});

// Обработчик отжатия клавиш

document.addEventListener("keyup", (event) =>{
	if (event.key == "a"){
		PressLeft = 0;
	}
	if (event.key == "w"){
		PressForward = 0;
	}
	if (event.key == "d"){
		PressRight = 0;
	}
	if (event.key == "s"){
		PressBack = 0;
	}
	if (event.keyCode == 32){
		PressUp = 0;
	}
});

let container = document.getElementById('container');
let player = document.createElement('div');
player.id = 'player';
container.appendChild(player);

let pawn = new groundPosition(0,0,45);
let ground = document.getElementById("ground");

let tree = document.createElement('div');
tree.id = 'tree';
tree.style.transform = 'translate3D(200px, 200px, 0px) rotateX(-45deg) translateZ(35px)';
tree.style.backgroundColor = 'green';
ground.appendChild(tree);

function update(){
	
	// Высчитываем смещения
	
	let dx = (PressRight - PressLeft);
	let dy = - (PressForward - PressBack);
	
	// Прибавляем смещения к координатам
	
	pawn.x = pawn.x + dx;
	pawn.y = pawn.y + dy;
	
	// Изменяем координаты мира (для отображения)
	
	ground.style.transform = 
	"rotateX(" + (pawn.rx) + "deg)" +
	"translate3d(" + (-pawn.x) + "px," + (-pawn.y) + "px," + 0 + "px)";
	
};

TimerGame = setInterval(update,10);