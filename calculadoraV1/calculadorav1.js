
var dato = {
	dato1: 0,
	dato2: 0
}



//var operador = '+';
function obtenerDatos() {

	dato.dato1 = document.getElementById('Dato1').value;
	dato.dato2 = document.getElementById('Dato2').value;

		return dato;//parseInt(this.dato1.value), parseInt(this.dato2.value);
}

function operar(operador){
	//var operador = '+';
	//var operador;
	//this.operador = operador;
	let resultado;
	
	obtenerDatos();	

	
	if(operador == '+'){
		//resultado = dato[0].value + dato[1].value;
		resultado = parseInt(dato.dato1) + parseInt(dato.dato2);
	console.log(resultado);
	DarResultado(resultado);
	return resultado;
	}

	if(operador == '-'){
		resultado = parseInt(dato.dato1) - parseInt(dato.dato2);
	DarResultado(resultado);
	return resultado
	}

	if(operador == '*'){
		resultado = parseInt(dato.dato1) * parseInt(dato.dato2);
	DarResultado(resultado);
	return resultado
	}

	if(operador == '/'){
		resultado = parseInt(dato.dato1) / parseInt(dato.dato2);
		DarResultado(resultado);

		return resultado

	}
	

}


function DarResultado (resultado) {

document.getElementById('Resultado').innerHTML = resultado;
	//"El valor es " + resultado;
}

////////////////////////////////////////////////////////////////////////////////////////

function operarSinVariables() {
	document.getElementById('Resultado').innerHTML =
	parseInt(document.getElementById('Dato1').value)
	+
	parseInt(document.getElementById('Dato2').value);
}

/*function DarResultado () {
let miResultado; 
miResultado = document.getElementById('resultado');
miResultado.innerHTML = 
	"El valor es " + miResultado.value;
}*/
/*var op = {
	suma:'+',
	resta: '-'.
	mult: '*',
	division:'/',
	modulo:"%"
}

onclick="obtenerOperador();"
onclick="obtenerOperador();"
onclick="obtenerOperador();"
onclick="obtenerOperador();"
onclick="obtenerOperador();"

*/