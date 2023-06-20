let menu = document.querySelectorAll(".menu__item");
let toggle = document.getElementsByClassName("toggle");
// Menu[0].addEventListener("focus", console.log("clicked"))

console.log(toggle.style);

console.log(menu[1]);

function test() {
  console.log("test");
}

function doDisplay() {
    toggle.classList.toggle("toggle")
}

for (i = 0; i < 6; i++) {
  menu[i].addEventListener("mouseover", doDisplay);
}

