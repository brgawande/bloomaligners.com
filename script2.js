let navbar2 = document.querySelector(".navbar2");

document.querySelector("#menu-btn2").onclick = () => {
  navbar2.classList.toggle("active");
};
window.onscroll = () => {
  navbar2.classList.remove("active");
};
