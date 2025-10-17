// Navbar burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', ()=> nav.classList.toggle('active'));

// Typing effect
const texts = ["Vivek Shaw.", "Digital Marketer.", "Data Enthusiast."];
let count=0, index=0, currentText='', letter='';

(function type(){
  if(count===texts.length) count=0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if(letter.length===currentText.length){ count++; index=0; setTimeout(type,500);}
  else setTimeout(type,150);
})();

// Dark/Light mode toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️':'🌙';
});

// Circular progress bars for skills
document.querySelectorAll('.circle').forEach(circle=>{
  let percent = circle.dataset.percent;
  circle.style.background = `conic-gradient(#ff4c60 ${percent*3.6}deg,#eee 0deg)`;
});
