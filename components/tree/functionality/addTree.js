import { Tree } from "../index.js";

export const addTree = (ground) => {
    let treeHeightDistance = ground.offsetHeight 
    let treeWidthDistance = ground.offsetWidth

    for (let element = 0; element < 10; element++) {
        let randomX = getRandomNumber(0, treeHeightDistance-15)
        let randomY = getRandomNumber(0, treeWidthDistance-100)
        Tree(ground, randomX, randomY)
    }
}

const getRandomNumber = (min, max) => {
    
    return Math.random() * (max - min) + min;
}