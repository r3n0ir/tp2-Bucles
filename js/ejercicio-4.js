/*4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números 
introducidos.*/

let suma_total = 0
do {
    const numero = parseInt(prompt("Ingrese un numero: "))
    if (!isNaN(numero)) {
        suma_total = suma_total + numero
    } else {
        alert("El dato ingresado no es un numero, por favor ingrese un numero")
    }
} while (confirm("¿Desea continuar ingresando numeros?"))

document.write(`Suma total: ${suma_total}`)