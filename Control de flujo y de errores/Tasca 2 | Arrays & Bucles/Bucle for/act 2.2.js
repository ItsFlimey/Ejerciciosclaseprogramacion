let var1 = parseInt(prompt("Por favor, introduzca un número entero:"));
//Introducción de variables
document.write(`<h2>Números desde 0 a ${var1}</h2>\n<hr/>\n`);
document.write(`<p>`);
for (i=0;i<=var1;i++) {
    if (i == var1){
        document.write(`${i}.`);
    } else {
        document.write(`${i}, `);
    }
    if (((i%10)==0)&&(i!=0)){
        document.write("<br/>");
    }
}
document.write(`</p>`);