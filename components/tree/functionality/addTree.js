let tree = document.createElement('div');

export const addTree = (ground) => {
    tree.id = 'tree';
    console.log(ground.style.transform);
    tree.style.transform = 'translate3D(200px, 200px, 0px) rotateX(-45deg) translateZ(35px)';
    tree.style.backgroundColor = 'green';
    ground.appendChild(tree);
}