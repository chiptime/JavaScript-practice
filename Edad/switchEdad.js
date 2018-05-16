function CalcularEdad(){
	var campoEdad, campoResultado;
	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad')
	valorEdad = campoEdad.value;
switch(){
	case 12:
		campoResultado.innerHTML = "infancia";
			break;
	case 13:
		campoResultado.innerHTML = "adolescencia";
			break;
	case 17:
		campoResultado.innerHTML = "juventud";
			break;
	case 23:
		campoResultado.innerHTML = "adulto";
			break;


}/*
	if(0 <= valorEdad && valorEdad <= 12)
		campoResultado.innerHTML = "infancia";
		else
			if(13 <= valorEdad && valorEdad <= 16)
				campoResultado.innerHTML = "adolescencia";
			else
				if(17 <= valorEdad && valorEdad <= 22)
					campoResultado.innerHTML = "juventud";
				else
					campoResultado.innerHTML = "adulto";
}*/
		
	
		
}

