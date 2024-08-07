function login() {
    var userEmail = document.querySelector("#email").value;
    var userSenha = document.querySelector('#myInput').value;
 
    var senhaMemory = localStorage.getItem(userEmail);
 
    if (userEmail === "admin" && userSenha === "lucassena231"){

     window.location.href = 'Homepage.html'
}

    else if (userSenha === senhaMemory) {
         window.location.href = 'Homepage.html'
    } else {
         alert("ERROR: E-mail ou senha incorretos");
    } 

 }
 