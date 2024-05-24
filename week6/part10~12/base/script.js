const startButton = document.querySelector('button');
const puzzleContainer = document.querySelector('.container')
const changeImageButton = document.querySelector('#changeImage')
let imageIndexesArray = []
let imageSet = 1
let previouslySelectedElement = null




startButton.addEventListener('click',function() {
    imageSet = Math.floor(Math.random() * 3) + 1

    // 1. 안보이던 화면을 보이게 한다 (게임 페이지)
    const gameScreen = document.querySelector('.game-screen');
    gameScreen.classList.remove('hide')

    // 2. 보이던 화면을 보이지 않게 하자! (메인 페이지)
    const startScreen = document.querySelector('.start-screen')
    startScreen.classList.add('hide')

    // 3. 이미지를 로드하여 보여준다.
    const originalImage = document.getElementById('originalImage')
    originalImage.setAttribute('src',`./data/image${imageSet}/originalImage.png`)


    const uniqueNumbers = new Set();

    while (uniqueNumbers.size < 9) {
        uniqueNumbers.add(Math.ceil(Math.random() * 9));
    }

    imageIndexesArray = [...uniqueNumbers]

    for (let i = 0; i <9; i++) {
        const div = document.createElement('div')
        div.classList.add('image-container')

        const img = document.createElement('img')
        img.setAttribute('src',`./data/image${imageSet}/image${imageIndexesArray[i]}.jpg`)
        div.appendChild(img)

        div.addEventListener('click', (event) => {
            const currentElement = event.target

            if(!previouslySelectedElement) {
                previouslySelectedElement = currentElement
                previouslySelectedElement.style.opacity = 0.3

            } else{
                
                if (previouslySelectedElement === currentElement) {
                    previouslySelectedElement.style.opacity = 1
                    previouslySelectedElement = null
                } else{

                    const parent1 = previouslySelectedElement.parentNode
                    const parent2 = currentElement.parentNode

                    parent1.removeChild(previouslySelectedElement)    
                    parent2.removeChild(currentElement)    

                    parent1.appendChild(currentElement)    
                    parent2.appendChild(previouslySelectedElement)  

                    previouslySelectedElement.style.opacity = 1
                    previouslySelectedElement = null
                    // previouslySelectedElement = currentElement
                    // previouslySelectedElement.style.opacity = 0.3

                }

            }

        })


        puzzleContainer.appendChild(div)



    }


})


changeImageButton.addEventListener('click', () => {
    imageSet = Math.floor(Math.random() * 3) + 1
    const originalImage = document.getElementById('originalImage')
    originalImage.setAttribute('src',`./data/image${imageSet}/originalImage.png`)


    const puzzleImages = document.querySelectorAll('.container img')
    puzzleImages.forEach((img,index) => {
        img.setAttribute('src',`./data/image${imageSet}/image${imageIndexesArray[index]}.jpg`)
    })


    
})