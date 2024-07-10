/* 10- Realiza un script que pida número de filas y columnas y escriba una 
tabla. Dentro de cada una de las celdas deberá escribirse un número 
consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los 
números irán del 35 al 1.
*/

const filas = parseInt(prompt("Ingrese el numero de filas para la tabla:"));
const columnas = parseInt(prompt("Ingrese el numero de columnas para la tabla:"));

if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
    alert("Debe ingresar numeros validos y mayores que 0.");
} else {
    const numero_inicial = filas * columnas;
    for (let i = 0; i < filas; i++) {
        let linea = "";
        for (let j = 0; j < columnas; j++) {
            const numero = numero_inicial - (i * columnas + j);
            linea += numero + "\t";
        }
        console.log(linea);
    }
}
