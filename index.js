const bodyTypeBl = document.getElementById("bodyTypeBl");
const brandBl = document.getElementById("brandBl");
const sliderBl = document.getElementById("sliderBl");

brandBl.addEventListener("click", () => {
  sliderBl.style.marginLeft = "-100%";
  brandBl.style.backgroundColor = "#4071cb";
  brandBl.style.color = "white";
  bodyTypeBl.style.backgroundColor = "white";
  bodyTypeBl.style.color = "black";
});

bodyTypeBl.addEventListener("click", () => {
  sliderBl.style.marginLeft = "0";
  bodyTypeBl.style.backgroundColor = "#4071cb";
  bodyTypeBl.style.color = "white";
  brandBl.style.backgroundColor = "white";
  brandBl.style.color = "black";
});

const cookieBlock = document.getElementById("cookieBlock");
const cookieBtn = document.getElementById("cookieBtn");
console.log(sessionStorage.getItem('cookieCheck'))

if(!sessionStorage.getItem('cookieCheck')){
  setTimeout(() => {
    cookieBlock.style.bottom = "26px";
  }, 1000);
  sessionStorage.setItem('cookieCheck', true);
}

cookieBtn.addEventListener("click", () => {
  cookieBlock.style.bottom = "-160px";
});

const cardLx500d1 = document.getElementById("cardLx500d1");
const cardLx500d2 = document.getElementById("cardLx500d2");

cardLx500d1.addEventListener("click", () => {
  window.open("./index2.html");
});

cardLx500d2.addEventListener("click", () => {
  window.open("./index2.html");
});

const letsGoBtn = document.getElementById("letsGoBtn");
const anchors = document.getElementById("mainBl2");

letsGoBtn.addEventListener("click", () => {
  document.querySelector("#mainBl2").scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
});

document.addEventListener("keydown", (event) => {
  let key = event.keyCode;
  switch (key) {
    case 37:
      sliderBl.style.marginLeft = "0";
      bodyTypeBl.style.backgroundColor = "#4071cb";
      bodyTypeBl.style.color = "white";
      brandBl.style.backgroundColor = "white";
      brandBl.style.color = "black";
      break;
    case 39:
      sliderBl.style.marginLeft = "-100%";
      brandBl.style.backgroundColor = "#4071cb";
      brandBl.style.color = "white";
      bodyTypeBl.style.backgroundColor = "white";
      bodyTypeBl.style.color = "black";
      break;
  }
});

document.addEventListener("keydown", (event) => {
  let key = event.key;
  switch (key) {
    case "Enter":
      cookieBtn.style.backgroundColor = "black";
      cookieBtn.style.color = "white";
      setTimeout(() => {
        cookieBlock.style.bottom = "-160px";
      }, 200);
      break;
  }
});

const buyBtn = document.querySelectorAll('.buyBtn');

const language = document.getElementById('language');
language.addEventListener('input', () => {
  let languageValue = language.value;
  switch (languageValue){
    case 'Dollars':
      for(let i = 0; i < buyBtn.length; i++){
        buyBtn[i].innerHTML = '124 901 $';
      }
      break
    case 'Rubles':
      for(let i = 0; i < buyBtn.length; i++){
        buyBtn[i].innerHTML = '11 547 124₽';
      }
      break
    case 'AED':
      for(let i = 0; i < buyBtn.length; i++){
        buyBtn[i].innerHTML = '458 750 AED';
      }
      break
  }
})

