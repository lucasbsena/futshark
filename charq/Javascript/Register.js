function registre() {
    var nome = document.querySelector("#nome").value;
    var email1 = document.querySelector("#email1").value;
    var senha1 = document.querySelector("#senha1").value;

    console.log(nome + " " + email1 + " " + senha1);

    
    localStorage.setItem(email1, senha1);

    window.location.href="Login.html"
}