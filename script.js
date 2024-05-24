//변수 초기 설정
const puzzle = document.getElementById('puzzle');
let imagePath = randomizeImagePath();
let lastImagePath = imagePath

let numPiecesPerSide = 3;
const totalWidth = 400;
const totalHeight = 400;
let pieceWidth = totalWidth / numPiecesPerSide;
let pieceHeight = totalHeight / numPiecesPerSide;

let pieces = [];
let selectedPiece = null; // 현재 선택된 조각
let swapCount = 0;
let timerId;
let totalTime = 120;


//퍼즐 사이즈 버튼 리스너
document.getElementById('sizeSelector').addEventListener('change', function() {
    document.getElementById('message').textContent = '';
    puzzle.style.backgroundImage = ``;
    
    numPiecesPerSide = parseInt(this.value);
    
    swapCount = 0; 
    document.getElementById('swapCount').textContent = `총 이동횟수: ${swapCount}`;
    
    initializePuzzle();
});

//이미지 변경 버튼 리스너
document.getElementById('changeImageButton').addEventListener('click', function() {
        document.getElementById('message').textContent = '';
        puzzle.style.backgroundImage = ``;
       
        do {
            imagePath = randomizeImagePath();
        } while (imagePath === lastImagePath);  // 이전 이미지와 다를 때까지 반복
    
        lastImagePath = imagePath;  // 선택된 이미지를 마지막 이미지로 저장

        document.getElementById('previewImage').src = imagePath;
    
    initializePuzzle();
});

function randomizeImagePath() { //이미지 랜덤 돌리는 함수
    const basePath = 'https://elbserver.store/static/puzzle-game/imgs/';
    const imageIndex = Math.floor(Math.random() * 10) + 1; 
    return `${basePath}img${imageIndex}.jpg`;  
}


function initializePuzzle() {// 활성화 함수

    swapCount = 0;
    document.getElementById('swapCount').textContent = `총 이동횟수: ${swapCount}`;
    document.getElementById('previewImage').src = imagePath;

    pieceWidth = totalWidth / numPiecesPerSide;
    pieceHeight = totalHeight / numPiecesPerSide;
    puzzle.style.gridTemplateColumns = `repeat(${numPiecesPerSide}, 1fr)`;
    puzzle.style.gridTemplateRows = `repeat(${numPiecesPerSide}, 1fr)`;
    
    createPieces();
    shuffleArray(pieces);
    renderPieces();
    resetTimer();
}

function createPieces() {//퍼즐 생성 함수
    puzzle.innerHTML = '';
    pieces = [];
    for (let y = 0; y < numPiecesPerSide; y++) {
        for (let x = 0; x < numPiecesPerSide; x++) {
            const index = y * numPiecesPerSide + x;
            const piece = document.createElement('div');
            piece.className = 'piece';
            piece.dataset.index = index.toString();
            piece.dataset.currentIndex = index.toString();
            piece.style.width = `${pieceWidth}px`;
            piece.style.height = `${pieceHeight}px`;
            piece.style.backgroundImage = `url('${imagePath}')`;
            piece.style.backgroundPosition = `-${x * pieceWidth}px -${y * pieceHeight}px`;
            piece.style.backgroundSize = `${totalWidth}px ${totalHeight}px`;
            
            pieces.push(piece);
        }
    }
}

function renderPieces() {//퍼즐 이벤트 적용 함수
    pieces.forEach(piece => {
        puzzle.appendChild(piece);
        piece.addEventListener('click', selectPiece);
    });
}

function shuffleArray(array) {//무작위 섞는 함수
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        array[i].dataset.currentIndex = i.toString();
        array[j].dataset.currentIndex = j.toString();
    }
}

function selectPiece(event) {//퍼즐 선택 함수
    const piece = event.target;
    if (!selectedPiece) {
        selectedPiece = piece;
        piece.style.border = '3px solid red';
    } else {
        if (selectedPiece === piece) {
            // 같은 퍼즐 조각을 다시 클릭한 경우, 선택만 해제합니다.
            piece.style.border = '1px solid #ccc';
            selectedPiece = null;
        } else {
            // 다른 퍼즐 조각을 클릭한 경우, 조각을 스왑합니다.
            swapPieces(selectedPiece, piece);
            selectedPiece.style.border = '1px solid #ccc';
            selectedPiece = null;
            checkCompletion();
        }
    }
}

function swapPieces(piece1, piece2) {//선택된 퍼즐끼리 스왑 하는 함수
    let tempIndex = piece1.dataset.currentIndex;
    piece1.dataset.currentIndex = piece2.dataset.currentIndex;
    piece2.dataset.currentIndex = tempIndex;
    
    let index1 = pieces.indexOf(piece1);
    let index2 = pieces.indexOf(piece2);
    [pieces[index1], pieces[index2]] = [pieces[index2], pieces[index1]];
    
    // 스왑시 스케일 애니메이션 적용
    piece1.style.transform = 'scale(1.2)';
    piece2.style.transform = 'scale(1.2)';

    // 애니메이션 후에 실제 DOM 위치와 속성을 교환합니다.
    setTimeout(() => {
          // 애니메이션 후에 원래대로 리셋
          piece1.style.transform = '';
          piece2.style.transform = '';
          
        if (piece1.nextElementSibling === piece2) {
            puzzle.insertBefore(piece2, piece1);
        } else if (piece2.nextElementSibling === piece1) {
            puzzle.insertBefore(piece1, piece2);
        } else {
            const afterPiece2 = piece2.nextElementSibling;
            puzzle.insertBefore(piece2, piece1);
            if (afterPiece2) {
                puzzle.insertBefore(piece1, afterPiece2);
            } else {
                puzzle.appendChild(piece1);
            }
        }
        
        // 스왑 카운트 업데이트
        swapCount++;
        document.getElementById('swapCount').textContent = `총 이동횟수: ${swapCount}`;
    }, 600); // CSS transition 시간과 일치시키기
}

function checkCompletion() {//퍼즐 완료 체크 함수
    const isComplete = pieces.every(piece => piece.dataset.index === piece.dataset.currentIndex);
    if (isComplete) {
        document.getElementById('message').textContent = '퍼즐을 성공적으로 완성하셨습니다😀 \n 새로고침을 통해 재시작 해주세요.';
        clearInterval(timerId)
        puzzle.style.backgroundImage = `url('${imagePath}')`;
        puzzle.style.backgroundSize = 'cover';  
        puzzle.innerHTML = '';
    }
}

// 남은 시간 함수
function resetTimer() {
    clearInterval(timerId);
    totalTime = 120;
    timerId = setInterval(updateTimer, 1000);
}

function updateTimer() {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').textContent = `남은시간: ${minutes}:${seconds}`;
    totalTime--;
    if (totalTime < 0) {
        clearInterval(timerId);
        document.getElementById('message').textContent = '실패 하였습니다😥 \n 새로고침을 통해 재시작 해주세요.';
        puzzle.innerHTML = '';
        puzzle.style.backgroundImage = '';
        
    }
}


//로드
initializePuzzle(); 