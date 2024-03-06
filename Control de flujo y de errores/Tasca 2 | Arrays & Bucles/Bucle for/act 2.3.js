let var1 = parseInt(prompt("Por favor, introduzca un número: "));
//Introducción de variables
document.write(`<h2>Números del ${var1} hasta 0</h2><hr/>`);
document.write(`<p>`);
for (i=var1;i!=0;i--){
    if (i!=0){
        document.write(`${i}, `);
    } else {
        document.write(`${i}.`)
    }
    if (((i%10)==0)&&(i!=0)){
        document.write(`<br/>`)
    }
};
document.write(`0</p>`);