const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 사각 도형을 그릴 수 있는 함수, (단, fill함수를 이후 라인에 사용하지 않으면 도형은 보이지 않는다.)
context.rect(50, 50, 100, 100);
context.rect(150, 150, 100, 100);
context.rect(250, 250, 100, 100);

// 도형에 색을 채우는 함수.
context.fill();

// 상단 도형과 경로(적용)를 분리시킬 때 사용
context.beginPath();
context.rect(350, 350, 100, 100);
// 도형의 색상을 변경하는 프로퍼티
context.fillStyle = 'blue';
context.fill();


