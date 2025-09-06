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
// let userInput = document.getElementById("user-input");
//let userInput = document.getElementsByClassName("user-input")[0];
//또는
let userInput = document.querySelector(".user-input");

let resultArea = document.querySelector(".result");

playButton.addEventListener("click", play);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  //console.log(userValue);
  if (userValue < computerNum) {
    resultArea.textContent = "UP";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN";
  } else {
    resultArea.textContent = "맞추셨습니다.";
  }
}

pickRandomNum();
