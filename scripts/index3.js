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

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const filterBlock = document.getElementById("filterBlock");
leftArrow.addEventListener("click", () => {
  filterBlock.style.marginLeft = "-372px";
});
rightArrow.addEventListener("click", () => {
  filterBlock.style.marginLeft = "0";
});
document.addEventListener("keydown", (event) => {
  let key = event.key;
  switch (key) {
    case "ArrowLeft":
      filterBlock.style.marginLeft = "-372px";
      break;
    case "ArrowRight":
      filterBlock.style.marginLeft = "0";
  }
});
