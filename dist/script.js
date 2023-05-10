const themeBtn = document.querySelector("#themeBtn");
const html = document.querySelector("html");

if(localStorage.getItem('theme') !== null) {
  html.classList.add(localStorage.getItem("theme"));
}

themeBtn.addEventListener("click", function () {
  if (localStorage.getItem("theme") !== "dark") {
    localStorage.setItem("theme", "dark");
    html.classList.add('dark');
  } else {
    localStorage.removeItem("theme");
    html.classList.remove('dark');
  }
});
