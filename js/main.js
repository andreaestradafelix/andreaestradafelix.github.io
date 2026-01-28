const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Submitted successfully!");
  form.reset();
});
