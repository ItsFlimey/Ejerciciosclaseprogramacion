let var1 = prompt("Por favor, introduzca una frase");
/////////////////////
var1 = var1.split(" ");
document.write(`<h2>Analización de frases</h2><hr/>`);
for (i of var1){
    document.write(`<p>${i}: Longitud de ${i.length} letras</p>`);
}