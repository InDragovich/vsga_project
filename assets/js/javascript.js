function validateLogin() {
  let valEmail = document.getElementById("email").value;
  let valPassword = document.getElementById("pwd").value;

  let user = "admin@gmail.com";
  let password = "admin123";

  if (valEmail != "" && valPassword != "") {
    if (valEmail == user && valPassword == password) {
      alert("Welcome " + user);
      window.location = "dashboard.html";
    } else {
      alert("Email dan Password salah.");
    }
  } else {
    alert("Email dan Password tidak boleh kosong");
  }
}
