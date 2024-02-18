const butcli = document.querySelector(".show");
const clobtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overLay");

butcli.onclick = function TS() {
  sidebar.classList.toggle("sideUP");

  overlay.style.display = "block";
};

clobtn.onclick = function cl() {
  sidebar.classList.remove("sideUP");
  overlay.style.display = "none";
};
