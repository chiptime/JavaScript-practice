
let nick,pass,pass2,email
function Enviar() {
	
	

	nick  = document.getElementById('nombre')//.value
	pass  = document.getElementById('contrasena')//.value
	pass2 = document.getElementById('contrasenaConfirmar')//.value
	email = document.getElementById('email')//.value
	resul = document.getElementById('resultado')
	if(pass.value !== pass2.value)
		resul.innerHTML = "Las contraseñas no coinciden"
	else
		resul.innerHTML = " "



}