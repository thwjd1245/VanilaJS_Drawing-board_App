const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //그림 그릴때 사용 (context)

canvas.width = 800;
canvas.height = 800;


ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.stroke();