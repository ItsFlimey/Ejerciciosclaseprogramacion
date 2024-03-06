let letra = prompt("Por favor, introduzca la letra que desea repetir: ");
let numero = parseInt(prompt("¿Cuantas veces la quiere repetir?"));
//Introducción de variables
document.write(`<h2>Repetición de la letra ${letra} (${numero} veces)</h2><hr/>`);
document.write(`<p>`);

if (numero!=NaN){
    for (i=1;i<=numero;i++){
        document.write(`${letra}`);
        if ((i%10)==0){document.write(`<br/>`)}
    }
} else {document.write(`El número introducido no es un número real :/`)}
document.write(`</p>`);