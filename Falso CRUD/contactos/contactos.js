class Contacto
{
    // Creación del constructor
    //   -n: Nombre, t: Teléfono
    constructor(nombre,telefono)
    {
    	this.nombre = n;
    	this.telefono = t;
    }

    Escribir()
    {
    	var resultado;

    	resultado = document.getElementById('lista');
    	resultado.innerHTML = 
    	   "Nombre: "   + this.nombre
    	   "Teléfono: " + this.telefono
    }

    CambiarTelefono(nuevoT)
    {
    	this.telefono = nuevoT;
    }
}

function 

function CrearContacto() 
{
	var c1 = new Contacto("Pepe",1111),
	    c2 = new Contacto("Ana",2222);

	c1.Escribir();
}