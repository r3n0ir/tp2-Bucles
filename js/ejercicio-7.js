/*7- Haz un script que escriba una pirámide inversa de los números del 1 al 
número que indique el usuario (no mayor de 50)  de la siguiente forma : 
(suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let numero = parseInt(prompt("Ingrese un numero entre 1 y 50 para la piramide inversa:"));
if (isNaN(numero) || numero < 1 || numero > 50) {
    alert("Debe ingresar un numero valido entre 1 y 50.");
} else {
    for (let i = numero; i >= 1; i--) {
        let linea = "";
        for (let j = 0; j < i; j++) {
            linea += i;
        }
        console.log(linea);
    }
}

