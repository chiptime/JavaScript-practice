class Contacto {
    constructor(nombre,telefono){
    	this.nombre = nombre
    	this.telefono = telefono
    }    
}
class UI {
    AgregarContacto(contacto){
        const listaContactos = document.getElementById('lista')
        const elemento       = document.createElement('div')
        elemento.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong >Nombre</strong>:   <i id="n1">${contacto.nombre}</i> -
                    <strong >Telefono</strong>: <i id="t1">${contacto.telefono}</i> -                   
                    <a href="#" class="btn btn-primary" name="editar">Editar</a>
                    <a href="#" class="btn btn-danger" name="borrar">X</a>
                </div>
            </div>
        `
        listaContactos.appendChild(elemento)
    }
    EliminarContacto(elemento){
        if(elemento.name === 'borrar')
            elemento.parentElement.parentElement.parentElement.remove()
    }
    EditarContacto(elemento){
        if(elemento.name === 'editar'){            
        const listaContactos = document.getElementById('formulario')
        const clonelista     = listaContactos.cloneNode(true)
        elemento.parentElement.appendChild(clonelista)
        document.querySelectorAll('input#nombre')[1].setAttribute("id", "nombreCambiar")
        document.querySelectorAll('input#telefono')[1].setAttribute("id", "telefonoCambiar")
        clonelista.setAttribute("id", "formularioCambiar")

        }
    }
    LimpiarFormulario(){
        document.getElementById('formulario').reset()
    }
}

function modificarUI(contacto){
    const nombre   = document.getElementById('n1')
    const telefono = document.getElementById('t1')
    nombre.innerHTML = `${contacto.nombre}`
    telefono.innerHTML = `${contacto.telefono}`
}

// DOM Events
document.addEventListener('DOMContentLoaded', () => {///////
document.getElementById('formulario').addEventListener('submit', function(e){
   const nombre = document.getElementById('nombre').value
   const telefono = document.getElementById('telefono').value   
   const contacto = new Contacto(nombre,telefono)
   const ui = new UI()
   ui.AgregarContacto(contacto)
   ui.LimpiarFormulario()
   e.preventDefault()
})

document.getElementById('lista').addEventListener('click', function(e){
    const ui = new UI()
    ui.EliminarContacto(e.target)
    ui.EditarContacto(e.target)
    document.getElementById('formularioCambiar').addEventListener('submit', function(e){
       const nombre = document.getElementById('nombreCambiar').value
       const telefono = document.getElementById('telefonoCambiar').value
       const contactoEditar = new Contacto(nombre,telefono)   
       modificarUI(contactoEditar)
    })   
})
})