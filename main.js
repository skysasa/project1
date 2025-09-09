// 유저는 숫자를 입력할 수 있다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That’s right이라고 뜨고 게임이 종료된다.
// 유저는 총 5번의 기회가 있다
// 게임이 종료되면 버튼은 비활성화된다
// 리셋버튼을 누르면 게임이 초기화된다
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다
// 반응형 UI

let computerNum = 0;
let playButton = document.getElementById("click");
let resetButton = document.querySelector(".reset");
// let userInput = document.getElementById("user-input");
//또는
//let userInput = document.getElementsByClassName("user-input")[0];
//또는
let userInput = document.querySelector(".user-input");

let resultArea = document.querySelector(".result");
let chancesArea = document.querySelector(".remaining");
let historyArea = document.querySelector(".history");
let chances = 3;
let gameOver = false;

let history = [];
let resultImg = document.querySelector(".result-img");

playButton.addEventListener("click", play);

resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    alert("1과 100사이 숫자를 입력해주세요");
    return;
  }
  if (history.includes(userValue)) {
    alert("같은 숫자를 입력하셨습니다. 다른 숫자를 입력해주세요");
    return;
  }
  chances--;
  chancesArea.textContent = `남은기회: ${chances}`;
  //console.log(userValue);
  if (userValue < computerNum) {
    resultImg.src = "./img/up1.jpg";
    resultArea.textContent = "UP";
  } else if (userValue > computerNum) {
    resultImg.src = "./img/down.jpg";
    resultArea.textContent = "DOWN";
  } else {
    resultImg.src = "./img/good.jpg";
    resultArea.textContent = "맞추셨습니다.";
    gameOver = true;
  }

  history.push(userValue);
  historyArea.textContent = `내가 추측한 숫자 리스트: ${history}`;

  if (!gameOver && chances === 0) {
    gameOver = true;
    resultImg.src = "./img/wrong.jpg";
    resultArea.textContent = `기회를 모두 사용하셨습니다. 정답은 ${computerNum}입니다.`;
  }

  if (gameOver === true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();
  gameOver = false;
  history = [];
  chances = 3;
  playButton.disabled = false;
  resultArea.textContent = ``;
  chancesArea.textContent = `남은기회: 3`;
  historyArea.textContent = `내가 추측한 숫자 리스트: `;
  resultImg.src = "./img/main.jpg";
}

pickRandomNum();
