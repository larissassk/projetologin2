//######################################
//Código de validação de formulario de login

function Verificar(){
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
 
    if (!email || !senha){
    alert("Campos de preenchimento obrigatório. Favor preencher");
}
}