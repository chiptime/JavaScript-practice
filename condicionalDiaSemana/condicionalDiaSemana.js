function CalcularDia(){
	var campoResultado,
		fecharActual,
		diaActual;

	campoResultado = document.getElementById('Resultado');
	fecharActual = new Date();
	diaActual = fecharActual.getDay();



	//strlen(cadena); En programacion tradicional
	//cadena.strlen(); En POO

	switch(diaActual){
		case 1:
			campoResultado.innerHTML = "Lunes: ";
		case 2:
		case 3:
		case 4:
		case 5:
			campoResultado.innerHTML += "Entre Semana";
			break;
		case 6:
		case 0:
			campoResultado.innerHTML = "Fin de Semana";
			break;
		default:
			campoResultado.innerHTML = "Día no valido";
			break;	}
}