class Card {

    constructor({ $target, data }) {
        const $imageInfo = document.createElement("div");
        $imageInfo.className = "ImageInfo";
        this.$imageInfo = $imageInfo;
        $target.appendChild($imageInfo);
    
        this.data = data;
    
        this.render();
      }
    




}