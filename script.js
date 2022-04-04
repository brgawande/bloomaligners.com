let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// function submit() {
//   alert("Our Team Will Contact You Soon!");
// }

var preloader = document.getElementById("loading");

function myFunction() {
  preloader.style.display = "none";
}

// google sheet

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyGXUNnI2NueTQq9S7AcRV5MgR_7rUHW4U6nclE8wZAXWcUbw1V9c3h7sor6E25kLy1/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for Contacting us..! Bloom Team Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});
