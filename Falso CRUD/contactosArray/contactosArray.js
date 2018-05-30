class Contacto{
	constructor(nombre,telefono,direccion){
		this.nombre = nombre
		this.telefono = telefono
		this.direccion = direccion
	}

	Escribir(elementoHTML){
		var resultado;
		resultado = document.getElementById(elementoHTML)
		resultado.innerHTML = 
		"nombre" + this.nombre + "<br>" +
		"telefono" + this.telefono + "<br>" +
		"direccion" + this.direccion + "<br>" 

		/*`
		Nombre ${this.nombre}  <br> 
		Telefono ${this.telefono} <br>
		Direccion ${this.direccion} <br>`*/
	}
	EscribirNombre(elementoHTML){
		
		var resultado
		resultado = document.getElementById(elementoHTML)
		resultado.innerHTML = "nombre: " + this.nombre + "<br>"//`Nombre ${this.nombre} <br>`
	}

	CambiarTelefono(telefono){
	this.telefono = telefono/*var resultado
		resultado = document.getElementById(elementoHTML)
		resultado.innerHTML = `Telefono ${this.telefono} <br>`*/
	}
}


class ListaContactos{


	constructor(){
		this.nContactos = 0
		this.lista = new Array(5)
	}
	InsertarContacto(nom,tel,dir){
		var contacto = new Contacto(nom,tel,dir)
		this.lista[this.nContactos] = contacto
		this.nContactos++
	}
	EscribirNombres(elementoHTML){
		/*var resultado = document.getElementById(elementoHTML)
		resultado.innerHTML = ""*/

		for(var i = 0; i < this.nContactos; i++){
			this.lista[i].EscribirNombre(elementoHTML)
		}
	}
}

//Objeto Global

var milista = new ListaContactos()

function AgregarContacto(elementoHTML) {
	var minombre = document.getElementById('nombre').value
	var mitelefono = document.getElementById('telefono').value
	var midireccion = document.getElementById('direccion').value


	milista.InsertarContacto(minombre, mitelefono, midireccion)
	milista.EscribirNombres(elementoHTML)
}