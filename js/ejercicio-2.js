/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert
según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente */

const nota = parseInt(prompt("Ingrese la nota (entre 0 y 10)"))
if (nota < 0 || nota > 10) {
    alert("Numero erroneo")
    alert("Introduce un numero valido")
} else if (nota >= 0 && nota<= 2) {
    alert("Calificacion: Muy deficiente")
} else if (nota >= 3 && nota <= 4) {
    alert("Calificacion: Insuficiente")
} else if (nota >= 5 && nota <= 6) {
    alert("Calificacion: Suficiente")
} else if (nota >= 7 && nota < 8) {
    alert("Calificacion: Bien")
} else if (nota >= 8 && nota <= 9) {
    alert("Calificacion: Notable")
} else if (nota > 9 && nota <= 10) {
    alert("Calificacion: Sobresaliente")
}