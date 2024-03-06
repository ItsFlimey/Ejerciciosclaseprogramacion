let var1 = parseInt(prompt("Por favor, introduzca un número para saber su tabla de multiplicar: "))
//Introducción de variables
document.write(`<h2>Tabla de multiplicar del número ${var1}</h2>`);
for (i=0;i<=var1;i++){
    document.write(`<p>${var1} x ${i} = ${i*var1}`);
}