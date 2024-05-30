import { showLoading, hideLoading } from './loading.js';

const $keyword = document.querySelector(".keyword");
const $keywords = document.querySelector(".keywords");
const $searchResults = document.querySelector(".search-results");
const styleSheet = document.styleSheets[0] // 스타일시트

let currentIndex = -1;  // 현재 하이라이트된 검색어의 인덱스
let isMouseOverKeywords = false;  // 키워드 목록 위에 마우스가 있는지 확인하는 플래그
let lastValue = "";  // 마지막 입력 값을 저장하는 변수
let hoverRuleIndex = -1; // 새 스타일 규칙(호버)을 추가할 위치


function resetCurrentIndex() {
  currentIndex = -1;  // 인덱스 초기화
  document.querySelectorAll('#keywords li').forEach(item => {
    item.classList.remove('highlight'); // 모든 하이라이트 제거
  });
}

function highlightItem(items, index) {
  items.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('highlight');
    } else {
      item.classList.remove('highlight');
    }
  });
}

async function searchPhotos(keyword) {
  showLoading();

  try {
    const response = await fetch(`https://lc6g0r0d5a.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/search?q=${keyword}`);
    const data = await response.json();
    hideLoading();

    const dataList = data.data;
    if (Array.isArray(dataList)) {
      const filteredDataList = dataList.filter(item => item.name.includes(keyword));
      $searchResults.innerHTML = filteredDataList
        .map(item => `<article><img src="${item.url}" alt="Loaded image" /></article>`)
        .join("");
    } else {
      $searchResults.innerHTML = '<p>No matching photos found.</p>';
    }
  } catch (error) {
    console.error('사진 검색 API 요청 실패:', error);
    hideLoading();
    $searchResults.innerHTML = '<p>사진을 불러오는 데 실패했습니다.</p>';
  }
}

document.addEventListener("click", (event) => {
  // 클릭 이벤트가 input 필드나 추천 검색어 창에서 발생하지 않았을 경우에만 동작
  if (!$keyword.contains(event.target) && !$keywords.contains(event.target)) {
    $keywords.style.display = 'none';
    resetCurrentIndex();
  }
});



$keyword.addEventListener("keydown", (e) => {
  const { key } = e;
  const items = document.querySelectorAll('#keywords li');

  if (isMouseOverKeywords) {
    
    if (hoverRuleIndex !== -1 && hoverRuleIndex < styleSheet.cssRules.length) {
      styleSheet.deleteRule(hoverRuleIndex); // 기존 규칙 삭제
    }
   
  }

  switch (key) {
    case "Escape":
    $keywords.style.display = 'none';
      resetCurrentIndex();
      return
    case "ArrowDown":
      currentIndex = (currentIndex + 1) % items.length;
      highlightItem(items, currentIndex);
      e.preventDefault();
      return
    case "ArrowUp":
      if (currentIndex <= 0) currentIndex = items.length;
      currentIndex = (currentIndex - 1) % items.length;
      highlightItem(items, currentIndex);
      e.preventDefault();
      return
    case "Enter":
      if (currentIndex >= 0 && currentIndex < items.length) {
        const selectedKeyword = items[currentIndex].textContent;
        $keyword.value = selectedKeyword;
        $keywords.style.display = 'none';
        resetCurrentIndex();
        searchPhotos(selectedKeyword);  // 검색어로 사진 검색
        e.preventDefault();
      }
      return
  }
});

//** 키이벤트에서 눌렀다 땔때 Process 키값으로 박힘, 마지막 입력 값을 저장하는 변수만들어 해결
$keyword.addEventListener("keyup", async (e) => {
  const { value } = e.target;
  
  if (lastValue === value) return;  // 값이 변경되지 않았다면 종료
  lastValue = value;  // 값이 변경되었다면 저장

  if (["Escape", "ArrowDown", "ArrowUp", "Enter"].includes(e.key)) {
    return;
  }

  if (value.trim()) {
    showLoading();
    $keywords.style.display = 'none';

    try {
      const response = await fetch(`https://lc6g0r0d5a.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/keywords?q=${value}`);
      const results = await response.json();
      if (results && results.length > 0) {
        const ul = document.createElement('ul');
        $keywords.innerHTML = '';
        $keywords.appendChild(ul);

        results.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          li.addEventListener('click', function() {
            $keyword.value = this.textContent;
            $keywords.style.display = 'none';
            resetCurrentIndex();
            searchPhotos(this.textContent);
          });
          ul.appendChild(li);
        });
        hideLoading();
        $keywords.style.display = 'block';
      } else {
        $keywords.innerHTML = '<p>No keywords found.</p>';
        $keywords.style.display = 'block';
      }
    } catch (error) {
      console.error('Keywords API request failed:', error);
      hideLoading();
      $searchResults.innerHTML = '<p>Failed to load keywords.</p>';
      resetCurrentIndex();
    }
  } else {
    $keywords.style.display = 'none';
    resetCurrentIndex();
  }
});



$keywords.addEventListener('mouseenter', (event) => {

  // hover 스타일 규칙을 업데이트
if (hoverRuleIndex !== -1 && hoverRuleIndex < styleSheet.cssRules.length) {
    styleSheet.deleteRule(hoverRuleIndex); // 기존 규칙 삭제
}
hoverRuleIndex = styleSheet.insertRule(`.keywords li:hover { 
    cursor: pointer;
    background-color: blue;
    color: white;
}`, styleSheet.cssRules.length); // 새로운 규칙 추가

currentIndex = -1

  isMouseOverKeywords = true;  // 마우스가 진입하면 플래그를 참으로 설정
  // div 태그를 선택 (여기서는 클래스 이름으로 선택)
  const divContainer = document.querySelector('.keywords ul');

  // divContainer 아래에 있는 모든 li 태그를 찾아서 하이라이트 클래스 제거
  const listItemElements = divContainer.querySelectorAll('li');
  listItemElements.forEach(li => {
      li.classList.remove('highlight');
  });


}, true);



$keywords.addEventListener('mouseleave', (event) => {
 isMouseOverKeywords = false;  // 마우스가 벗어나면 플래그를 거짓으로 재설정
  // div 태그를 선택 (여기서는 클래스 이름으로 선택)
const divContainer = document.querySelector('.keywords ul');

// divContainer 아래에 있는 모든 li 태그를 찾아서 하이라이트 클래스 제거
const listItemElements = divContainer.querySelectorAll('li');
listItemElements.forEach(li => {
    li.classList.remove('highlight');
});
}, true);