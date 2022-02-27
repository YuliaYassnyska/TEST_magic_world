export const Tree = (ground, randomX, randomY) => {
    let tree = document.createElement('div');
    tree.id = 'tree';
    tree.style.position = 'absolute'
    tree.style.transform = `translate3D(${randomX}px, ${randomY}px, 0px) rotateX(-45deg) translateZ(35px)`;
    tree.style.backgroundColor = 'green';

    ground.appendChild(tree);
}