const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name === "") {
    alert("Ismingizni kiriting");
    return;
  }

  if (email === "") {
    alert("Emailingizni kiriting");
    return;
  }

  if (!email.includes("@")) {
    alert("Email noto'g'ri");
    return;
  }

  if (password === "") {
    alert("Parolingizni kiriting");
    return;
  }

  if (password.length < 6) {
    alert("Parol kamida 6 ta belgi bo'lsin");
    return;
  }

  alert(marxamat)
});
