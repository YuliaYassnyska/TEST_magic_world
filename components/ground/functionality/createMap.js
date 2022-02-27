let map = [
    [0, 0, 45],
    [0, 600, 45],
    [600, 0, 45],
    [600, 600, 45],
];

export const createMap = (container) => {
    for (let i = 0; i < map.length; i++) {
        let ground = document.createElement('div');
        ground.id = 'ground';
        ground.className = ground.id + i;
        ground.style.position = 'absolute';
        //ground.style.transform = 'translate3d(' + map[i][0] + ',' + map[i][1] + ', -1000px) rotateX(' + map[i][2] + 'deg)';
        container.append(ground);
    }
    
}

export const moveMap = (posX, posY) => {
    for (let i = 0; i < map.length; ++i)
    {
        let ground = document.querySelector('.ground' + i);
        let x = (-posX) + map[i][0];
        let y = (-posY) + map[i][1];
        
        ground.style.transform =
        "rotateX(45deg) " + 
        "translate3d(" + x + "px," + y + "px, -1000px) "
    }
}