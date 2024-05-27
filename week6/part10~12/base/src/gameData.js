let gameData = {
	imageIndexesArray : [],
	imageSet : 1,
	previouslySelectedElement : null,

	changeOriginalImageset : function() {
		this.imageSet = Math.floor(Math.random() * 3) + 1
		const originalImage = document.getElementById('originalImage')
		originalImage.setAttribute('src',`./data/image${this.imageSet}/originalImage.png`)
	},

	generateImageIndexes: function() {
		const uniqueNumbers = new Set();
		gameData.changeOriginalImageset()
		while (uniqueNumbers.size < 9) {
			uniqueNumbers.add(Math.ceil(Math.random() * 9));
		}
		this.imageIndexesArray = [...uniqueNumbers]
	},

	updatePreviouslySelectedEmement: function(newElement) {
		this.previouslySelectedElement = newElement
	}
}

export default gameData