const button = document.getElementById("btn");
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message Sent");
  form.reset();
});
