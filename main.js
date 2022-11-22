function adduser() {
    user_name = document.getElementById("login_name").value;

    localStorage.setItem("user_name", user_name);

      window.location = "booktype.html";
}