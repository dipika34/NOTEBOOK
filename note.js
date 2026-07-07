function Login() {
    let user = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if (user == "dipika" && password == 123) {
        window.alert("logged in successfully👍");
        window.open("NoteAPP.html");

    } else {
        window.alert("invalid userName or password😔");
    }
}
