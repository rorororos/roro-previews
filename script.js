// canvas estilo matrix minimalista
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// lista de kanjis
const kanjis = "日月火水木金土天地風林火山雨電龍神夢愛光闇魂心力無限戦忍";
const matrix = kanjis.split("");

// máximo de kanjis ativos
const maxKanjis = 8;

// cria posições aleatórias para cada kanji
let drops = Array.from({ length: maxKanjis }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  speed: 0.3 + Math.random() * 0.5,
  char: matrix[Math.floor(Math.random() * matrix.length)]
}));

function draw() {
  // fundo quase transparente (rastro suave)
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = "18px monospace";
  ctx.fillStyle = "rgba(0, 255, 100, 0.15)"; // bem fraco, quase invisível

  for (let d of drops) {
    ctx.fillText(d.char, d.x, d.y);

    // move o kanji pra baixo devagar
    d.y += d.speed;

    // reinicia em nova posição se sair da tela
    if (d.y > canvas.height + 20) {
      d.x = Math.random() * canvas.width;
      d.y = -20;
      d.char = matrix[Math.floor(Math.random() * matrix.length)];
    }
  }
}

setInterval(draw, 60);

// reajusta se redimensionar a janela
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
