class CardView {
  
  $containerDiv = null
  data = null;
  cardStorage = null
  isEvent = false
  
  
  constructor({$body,initalState,onClick}) {
      this.$containerDiv = document.createElement("div");
      this.$containerDiv.setAttribute("id", "cards_container");
      
      // main태그(page_content) 아래에 추가
      const $main = document.getElementById("page_content");
      $main.appendChild(this.$containerDiv);
      
      this.onClick = onClick

      this.data = initalState.personalInfo
      if (this.data){
        this.render();
      }
      
    }

    setState(nextData) {
        this.data = nextData;
        this.cardStorage = JSON.parse(this.data.cardStatus)
        this.render();
    }


  ListObserver = new IntersectionObserver((entries,observer) => {
      entries.forEach( entry => {
        
        if (entry.isIntersecting) {
            console.log('대상 요소가 70% 이상 보이고 있습니다.');
            
            this.onNextPage()
            this.onClick(entry)
            
        
            observer.unobserve(entry.target);
        }
    });
  }, {
    threshold: 0.7  // 대상 요소의 70%가 보여야 콜백 함수가 실행됨
  });


  onNextPage ()  {
    
    console.log(JSON.parse(this.data.personalInfo).length)
    const personalInfoArray = JSON.parse(this.data.personalInfo);
    const newPageData = JSON.parse(this.data.personalInfo);

    // newPageData 배열의 모든 요소를 personalInfoArray에 하나씩 추가
    Array.prototype.push.apply(personalInfoArray, newPageData);
    this.data.personalInfo = JSON.stringify(personalInfoArray);

    this.render()
    
  }

  cardFlipped(targetCard) {
      targetCard.classList.toggle("is-flipped");
      this.cardStorage[targetCard.getAttribute('idx')].status = targetCard.classList.contains("is-flipped");
      localStorage.setItem("cardStatus", JSON.stringify(this.cardStorage));
  }

  initializeCardStatus() {  
    this.$containerDiv.querySelectorAll(".card").forEach(($card_div, index) => {
        if (this.cardStorage && this.cardStorage[index] && this.cardStorage[index].status) {
            $card_div.classList.add("is-flipped");
        } else {
            $card_div.classList.remove("is-flipped");
              this.cardStorage[index] = {
              "idx": index,
              "status": false // 기본 상태는 뒤집혀있지 않음으로 설정
            };
        }

        $card_div.setAttribute('idx', index);

    });
  }

  render() { 
    console.log('CardData')
    console.log(this.data.personalInfo)
      
    this.$containerDiv.innerHTML = JSON.parse(this.data.personalInfo)
    .map((data,index) =>`
      <div idx="${index}" class="card">
        <div class="card_plane card_plane--front">${data.nickname}</div>
        <div class="card_plane card_plane--back">${data.mbti}</div>
      </div>
    `)
    .join("")

    this.initializeCardStatus();

    this.$containerDiv.querySelectorAll(".card").forEach(($card_div) => {      
    $card_div.addEventListener("click", () => {
        this.onClick($card_div)
    });

  })
  
  const target = this.$containerDiv.lastElementChild
  this.ListObserver.observe(target)

  }
}
export default CardView;