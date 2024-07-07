const $keyword = document.querySelector(".keyword");
const $keywords = document.querySelector(".keywords");
const $searchResults = document.querySelector(".search-results");
let currentIndex = -1;  // 현재 하이라이트된 검색어의 인덱스


function resetCurrentIndex() {
  currentIndex = -1;  // 인덱스 초기화
}

document.addEventListener("click", (event) => {
  // 클릭 이벤트가 input 필드나 추천 검색어 창에서 발생하지 않았을 경우에만 동작
  if (!$keyword.contains(event.target) && !$keywords.contains(event.target)) {
    $keywords.style.display = 'none';
    resetCurrentIndex();
  }
});

function searchPhotos(keyword) {

  document.getElementById('loading').style.display = 'block';

  fetch(`https://lc6g0r0d5a.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/search?q=${keyword}`)  // API URL은 예시입니다.
    .then((res) => res.json())
    .then((response) => {

    document.getElementById('loading').style.display = 'none';
  
    const dataList = response.data;
    if (Array.isArray(dataList)) {
      const filteredDataList = dataList.filter(item => item.name.includes(keyword));
      $searchResults.innerHTML = filteredDataList
        .map((item) => `<article><img src="${item.url}" /></article>`)
        .join("");
    }

    })
    .catch((error) => {
      console.error('사진 검색 API 요청 실패:', error);
      document.getElementById('loading').style.display = 'none';
      $searchResults.innerHTML = '<p>사진을 불러오는 데 실패했습니다.</p>';
    });
}

$keyword.addEventListener("keydown", (e) => {
  const { key } = e;
  const items = document.querySelectorAll('#keywords div');

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

function highlightItem(items, index) {
  items.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('highlight');
    } else {
      item.classList.remove('highlight');
    }
  });
}

$keyword.addEventListener("keyup", (e) => {
  const { value, key } = e.target;

  // 특정 키 입력시 아무 동작도 하지 않아야 함
  if (["Escape", "ArrowDown", "ArrowUp", "Enter"].includes(e.key)) {
    return;
  }

  if (value.trim()) {
    // 로딩 상태 표시
    document.getElementById('loading').style.display = 'block';
    $keywords.style.display = 'none';  // 기존 키워드 목록 숨기기

    fetch(`https://lc6g0r0d5a.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/keywords?q=${value}`)
      .then((res) => res.json())
      .then((results) => {
        // 로딩 상태 숨기기
        document.getElementById('loading').style.display = 'none';

        if (results) {
          $keywords.innerHTML = '';
          $keywords.style.display = 'block';
          results.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item;
            div.addEventListener('click', function() {
              $keyword.value = this.textContent;
              $keywords.style.display = 'none';
              resetCurrentIndex();
              searchPhotos(this.textContent);
            });
            $keywords.appendChild(div);
          });
        }
      })
      .catch((error) => {
        console.error('keywords API 요청 실패:', error);
        // 로딩 상태 숨기기
        document.getElementById('loading').style.display = 'none';
        $keywords.style.display = 'none';

        $searchResults.innerHTML = '<p>키워드 불러오는데 실패했습니다.</p>';
        resetCurrentIndex();
      });
  } else {
    $keywords.style.display = 'none';
    resetCurrentIndex();
  }
});
