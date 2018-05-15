





						// Escribir los números del 1 al número:
						// 		- Con While
						//		- Con Do-While



function EscribirNumeros() 
{
	var campoResultado,
		numero

	campoResultado = document.getElementById('Resultado')
	numero = parseInt(document.getElementById('Numero').value)
	contador = 0


	while(numero > contador){

		campoResultado.innerHTML += " " + (contador + 1)
		contador++
	}


	
}



function DoNumeros() 
{
	var campoResultado,
		numero

	campoResultado = document.getElementById('Resultado1')
	numero = parseInt(document.getElementById('Numero1').value)
	contador = 0

	do{
		campoResultado.innerHTML += " " + (contador + 1)
		contador++
	}
	while(numero > contador)



	
}