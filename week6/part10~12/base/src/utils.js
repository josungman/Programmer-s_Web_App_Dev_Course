function loadPuzzleImages(imageSet,imageIndexesArray) {
    const puzzleImages = document.querySelectorAll('.container img')
    puzzleImages.forEach((img,index) => {
        img.setAttribute('src',`./data/image${imageSet}/image${imageIndexesArray[index]}.jpg`)
    })
}

function createImageContainer(imageSet,imageIndex){

    const div = document.createElement('div')
    div.classList.add('image-container')

    const img = document.createElement('img')
    img.setAttribute('src',`./data/image${imageSet}/image${imageIndex}.jpg`)
    div.appendChild(img)

    return div
}

function swapElements(element1,element2) {
    const parent1 = element1.parentNode
    const parent2 = element2.parentNode

    parent1.removeChild(element1)    
    parent2.removeChild(element2)    

    parent1.appendChild(element2)    
    parent2.appendChild(element1)  
}

export {loadPuzzleImages,createImageContainer,swapElements}