class Contacto{
	constructor(nombre,telefono,direccion){
		this.nombre = nombre
		this.telefono = telefono
		this.direccion = direccion
	}
	ImprimirContacto(elementoHTML){
		var resultado = document.getElementById(elementoHTML)
		resultado.innerHTML = `
		Nombre: ${this.nombre} <br>
		Telefono: ${this.telefono} <br>
		Direccion: ${this.direccion} <br>
		`
	}
}

class ListaContactos{
	constructor(){
		this.lista = new Array(5)
		this.nContactos = 0
	}

	AgregarContacto(nombre,telefono,direccion){
		var contacto = new Contacto(nombre,telefono,direccion)
		this.lista[this.nContactos] = contacto
		this.nContactos++
	}
	EscribirContacto(elementoHTML){
		this.lista[0].ImprimirContacto(elementoHTML)
	}

}

const l = new ListaContactos()

function InsertarContacto(){

		var nombre = document.getElementById('nombre').value
		var telefono = document.getElementById('telefono').value
		var direccion = document.getElementById('direccion').value

		l.AgregarContacto(nombre,telefono,direccion)

}
function ImprimirContactos(elementoHTML){
		l.EscribirContacto(elementoHTML)
}

/*function CrearLista(){
		const l = new ListaContactos()
}*/


function Main(){
	//CrearLista();
	InsertarContacto();
	ImprimirContactos('resultado');
}
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('enviar').addEventListener('submit', function(e){

	Main()
	e.preventDefault()
	}, false)
})