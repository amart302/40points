let index = 0;
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const lexusImg = document.getElementById("lexusImg");

let margin = 0;
arrowLeft.addEventListener("click", () => {
  if (index > 0) {
    lexusImg.style.marginLeft = `${(margin += 102)}%`;
    index--;
  }
});
arrowRight.addEventListener("click", () => {
  if (index < 3) {
    lexusImg.style.marginLeft = `${(margin -= 102)}%`;
    index++;
  }
});

document.addEventListener("keydown", (event) => {
  let key = event.keyCode;
  switch (key) {
    case 37:
      if (index > 0) {
        lexusImg.style.marginLeft = `${(margin += 102)}%`;
        index--;
      }
      break;
    case 39:
      if (index < 3) {
        lexusImg.style.marginLeft = `${(margin -= 102)}%`;
        index++;
      }
      break;
  }
});

const buyBtn = document.querySelectorAll(".buyBtn");

const language = document.getElementById("language");
language.addEventListener("input", () => {
  let languageValue = language.value;
  switch (languageValue) {
    case "Dollars":
      for (let i = 0; i < buyBtn.length; i++) {
        buyBtn[i].innerHTML = "124 901 $";
      }
      break;
    case "Rubles":
      for (let i = 0; i < buyBtn.length; i++) {
        buyBtn[i].innerHTML = "11 547 124₽";
      }
      break;
    case "AED":
      for (let i = 0; i < buyBtn.length; i++) {
        buyBtn[i].innerHTML = "458 750 AED";
      }
      break;
  }
});
