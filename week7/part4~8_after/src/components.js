class Component {
    constructor(parentElem, props = {}) {
        this.parentElem = parentElem;
        this.props = props;
        this.element = null; // 각 컴포넌트의 루트 요소
        this.init();
    }

    init() {
        this.createElement();
        this.setup();
    }

    createElement() {
        // 자식 클래스에서 이 메소드를 재정의하여 각각의 요소를 생성
    }

    setup() {
        // 이벤트 리스너 설정
    }
}

//제목
export class Title extends Component {
    createElement() {
        this.element = document.createElement('h1');
        this.element.textContent = '🐈고양이 사진 검색기🔎'
        
        this.parentElem.appendChild(this.element);
    }
}


//검색어 입력
export class SearchInput extends Component {
    createElement() {
        this.element = document.createElement('input');
        this.element.className = 'keyword';
        this.element.autocomplete = 'off';
        this.element.placeholder = '검색어 입력...';
        this.parentElem.appendChild(this.element);
        
        this.currentIndex = -1;
        this.$keywords = document.querySelector(".keywords");  // $keywords를 클래스 속성으로 초기화
        this.debounceTimer = null;  // 디바운스 타이머 초기화
        this.lastValue = '';  // 마지막 입력값 초기화
        this.keywordSearchController = null;  // 검색 요청 컨트롤러 초기화
    }

    setup() {
        
        this.element.addEventListener('keydown', this.onKeydown.bind(this));
        this.element.addEventListener('keyup', this.onKeyup.bind(this));
    }

   

    onKeydown(e) {
        const { key } = e;
        const items = document.querySelectorAll('#keywords li');
        
        
        switch (key) {
            case "Escape":
                this.$keywords.style.display = 'none';
                this.resetCurrentIndex();
                break;
            case "ArrowDown":
                this.currentIndex = (this.currentIndex + 1) % items.length;
                this.highlightItem(items, this.currentIndex);
                e.preventDefault();
                break;
            case "ArrowUp":
                if (this.currentIndex <= 0) this.currentIndex = items.length;
                this.currentIndex = (this.currentIndex - 1) % items.length;
                this.highlightItem(items, this.currentIndex);
                e.preventDefault();
                break;
            case "Enter":
                if (this.currentIndex >= 0 && this.currentIndex < items.length) {
                    const selectedKeyword = items[this.currentIndex].textContent;
                    this.element.value = selectedKeyword;
                    this.keywordsElement.style.display = 'none';
                    this.resetCurrentIndex();
                    this.searchPhotos(selectedKeyword);
                    e.preventDefault();
                }
                break;
        }
    }

    onKeyup(e) {
        
        const { value } = e.target;
        if (this.lastValue === value) return;
        this.lastValue = value;

        if (["Escape", "ArrowDown", "ArrowUp", "Enter"].includes(e.key)) {
            return;
        }

        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.fetchKeywords(value);
        }, 300);
    }

    async fetchKeywords(value) {
        if (!value) {
            $keywords.style.display = 'none';
            this.resetCurrentIndex();
            return;
        }
    
        const cachedResults = sessionStorage.getItem(`keywords-${value}`);
        if (cachedResults) {
            this.displayKeywords(JSON.parse(cachedResults));
        } else {
            if (this.keywordSearchController) {
                this.keywordSearchController.abort();
            }
            this.keywordSearchController = new AbortController();
            
            try {
                const response = await fetch(`https://lc6g0r0d5a.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/keywords?q=${value}`, { signal: this.keywordSearchController.signal });
                const results = await response.json();
                sessionStorage.setItem(`keywords-${value}`, JSON.stringify(results));
                this.displayKeywords(results);
                this.keywordSearchController = null;
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('API 요청 실패:', error);
                }
            }
        }
    }

    displayKeywords(results) {
        const ul = document.createElement('ul');
        this.$keywords.innerHTML = '';
        this.$keywords.appendChild(ul);
        results.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', () => {
                this.element.value = li.textContent;
                this.$keywords.style.display = 'none';
                this.resetCurrentIndex();
                this.searchPhotos(li.textContent);
            });
            ul.appendChild(li);
        });
        this.$keywords.style.display = 'block';
    }

    resetCurrentIndex() {
        this.currentIndex = -1;
    }

    highlightItem(items, index) {
        items.forEach(item => item.classList.remove('highlighted'));
        items[index].classList.add('highlighted');
    }

    searchPhotos(keyword) {
        console.log('사진 검색:', keyword);
        // 사진 검색 로직
    }
}


//검색어 추천목록 관리
export class Keywords extends Component {
    createElement() {
        this.element = document.createElement('div');
        this.element.id = 'keywords';
        this.element.className = 'keywords';
        this.parentElem.appendChild(this.element);
    }

    setup() {
        this.element.addEventListener('click', this.onClick.bind(this));
    }

    onClick(event) {
        console.log('Selected keyword:', event.target.textContent);
        // 항목 선택 처리 로직
    }

    renderKeywords(keywords) {
        this.element.innerHTML = '';  // Clear existing keywords
        keywords.forEach(keyword => {
            const li = document.createElement('li');
            li.textContent = keyword;
            this.element.appendChild(li);
        });
    }
}


//검색결과 표시
export class SearchResults extends Component {
    createElement() {
        this.element = document.createElement('div');
        this.element.className = 'search-results';
        this.parentElem.appendChild(this.element);
    }

}


//로딩
export class Loading extends Component {
    createElement() {
        this.element = document.createElement('div');
        this.element.id = 'loading';
        this.element.className = 'loading';
        this.element.textContent = '로딩 중...';
        this.element.style.display = 'none';  // Initially hidden
        this.parentElem.appendChild(this.element);
    }

    show() {
        this.element.style.display = 'block';
    }

    hide() {
        this.element.style.display = 'none';
    }
}

