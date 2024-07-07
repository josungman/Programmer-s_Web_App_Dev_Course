// 조성만
import gameData from './src/gameData.js'
import {loadPuzzleImages, createImageContainer}  from './src/utils.js'
import {handleClick}  from './src/eventHandlers.js'


const startButton = document.querySelector('button');
const puzzleContainer = document.querySelector('.container')
const changeImageButton = document.querySelector('#changeImage')

startButton.addEventListener('click',function() {
    
    // 1. 안보이던 화면을 보이게 한다 (게임 페이지)
    const gameScreen = document.querySelector('.game-screen');
    gameScreen.classList.remove('hide')

    // 2. 보이던 화면을 보이지 않게 하자! (메인 페이지)
    const startScreen = document.querySelector('.start-screen')
    startScreen.classList.add('hide')

    
    gameData.changeOriginalImageset()
    gameData.generateImageIndexes()
    

    for (let i = 0; i <9; i++) {
       
        const div = createImageContainer(gameData.imageSet,gameData.imageIndexesArray[i])

        div.addEventListener('click', handleClick)

        puzzleContainer.appendChild(div)

    }

})


changeImageButton.addEventListener('click', () => {

    gameData.changeOriginalImageset()
    loadPuzzleImages(gameData.imageSet,gameData.imageIndexesArray)

})