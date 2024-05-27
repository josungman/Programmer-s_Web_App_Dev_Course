// 조성만
import gameData from './gameData.js'
import { swapElements } from './utils.js'

export function handleClick(event) {
	const currentElement = event.target
	if(!gameData.previouslySelectedElement) {
			gameData.updatePreviouslySelectedEmement(currentElement)
			gameData.previouslySelectedElement.style.opacity = 0.3
	} else if(gameData.previouslySelectedElement === currentElement){
			gameData.previouslySelectedElement.style.opacity = 1
			gameData.updatePreviouslySelectedEmement(null)
	} else{
			swapElements(gameData.previouslySelectedElement,currentElement)
			gameData.previouslySelectedElement.style.opacity = 1
			gameData.updatePreviouslySelectedEmement(null)

	}
}
