class CardView {
  
  $containerDiv = null
  data = null;
  cardStorage = null
  isEvent = false
  
  
  constructor({$body,initalState}) {
      this.$containerDiv = document.createElement("div");
      this.$containerDiv.setAttribute("id", "cards_container");
      
      // main태그(page_content) 아래에 추가
      const $main = document.getElementById("page_content");
      $main.appendChild(this.$containerDiv);
      
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
      entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            console.log('대상 요소가 70% 이상 보이고 있습니다.');
            
            this.onNextPage()
        
            observer.unobserve(entry.target);
        }
    });
  }, {
    threshold: 0.7  // 대상 요소의 70%가 보여야 콜백 함수가 실행됨
  });


  onNextPage ()  {
    
    const newPageData = JSON.parse(this.data.personalInfo);

    // 새로운 데이터를 기존 컨텐츠에 이어 붙입니다.
    newPageData.forEach((data, index) => {
        const cardHTML = `
            <div idx="${index}" class="card">
                <div class="card_plane card_plane--front">${data.nickname}</div>
                <div class="card_plane card_plane--back">${data.mbti}</div>
            </div>
        `;

        // 'beforeend'는 기존 내용 끝에 새 내용을 추가합니다.(테스트용으로 만듬)
        this.$containerDiv.insertAdjacentHTML('beforeend', cardHTML);
    });

    this.initializeCardListeners();
    
  }


    initializeCardListeners() {
      
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

          if ($card_div.getAttribute('data-listener-attached') === 'true') {
            console.log('리스너 중복 확인')
            return; // 이미 리스너가 추가되었으면 더 이상 진행하지 않음
          }

          $card_div.addEventListener("click", (e) => {
              $card_div.classList.toggle("is-flipped");
              // $card_div.classList.contains("is-flipped") === true ? $card_div.classList.remove("is-flipped") : $card_div.classList.add("is-flipped")
              
              this.cardStorage[index].status = $card_div.classList.contains("is-flipped");
              localStorage.setItem("cardStatus", JSON.stringify(this.cardStorage));
          });
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

    //onclick 함수로 넣는다??
    this.initializeCardListeners();
    const target = this.$containerDiv.lastElementChild
    this.ListObserver.observe(target)


  }
}
export default CardView;