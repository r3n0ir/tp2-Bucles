/* 9- Crea un script que escriba los números del 1 al 500, que indique cuáles
son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. 
Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————
*/

for (let i = 1; i <= 500; i++) {
    let linea = `${i}`;
    if (i % 4 === 0) {
        linea += " (Multiplo de 4)";
    }
    if (i % 9 === 0) {
        linea += " (Multiplo de 9)";
    }
    console.log(linea);
    if (i % 5 === 0) {
        console.log("—————————————————————————————————————");
    }
}

