/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
*/

let numero = parseInt(prompt("Ingrese un numero entre 1 y 50 para la piramide:"));
if (isNaN(numero) || numero < 1 || numero > 50) {
    alert("Debe ingresar un numero valido entre 1 y 50.");
} else {
    for (let i = 1; i <= numero; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += j;
        }
        console.log(linea);
    }
}
