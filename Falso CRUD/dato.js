
//let nick,pass,pass2,email

class Punto {
	constructor(nick,pass,pass2,email){
		this.nick  = nick
		this.pass  = pass
		this.pass2 = pass2
		this.email = email
	}
	comprobarContrasena(pass2) {
		

		if(this.pass.value !== this.pass2.value)
			return false
		else
			return true
	}
}
function RecogerValores(){
	const persona = new Punto(
								document.getElementById('nombre'),//.value
								document.getElementById('contrasena'),//.value
								document.getElementById('contrasenaConfirmar'),//.value
								document.getElementById('email')//.value
							  )

}
	
function Enviar(Punto) {
	let resul 
	// const persona = new Punto(
	// 							document.getElementById('nombre'),//.value
	// 							document.getElementById('contrasena'),//.value
	// 							document.getElementById('contrasenaConfirmar'),//.value
	// 							document.getElementById('email')//.value
	// 						  )
	


	// persona.nick  = document.getElementById('nombre'),//.value
	// persona.pass  = document.getElementById('contrasena'),//.value
	// persona.pass2 = document.getElementById('contrasenaConfirmar'),//.value
	// persona.email = document.getElementById('email')//.value
	// )
	resul = document.getElementById('resultado')
	if(persona.comprobarContrasena() == false)
	 	resul.innerHTML = "Las contraseñas no coinciden"
	 else
	 	resul.innerHTML = " "



}