const array1 = [11,12,18,22,29,34,43,55,72,96,98,99];
document.write(`<h2>Divisores de la array [${array1}]</h2><hr/>`);
for (i=0;i<array1.length;i++){
    document.write(`<p>`);
    let var1 = array1[i];
    document.write(`Múltiples de ${var1}: `);
    for (j=1;j<=var1;j++){
        if ((var1%j)==0){
            document.write(j);
            if (j!=var1){
                document.write(`, `);
            }
        }
    }
    document.write(`</p>`);
}
document.write(`<hr/>`);
//Segunda parte del ejercicio: Sin divisores
/*---------------------------------*/
const array2 = [2,3,5,7,19,11,13];
document.write(`<h2>Misma lista pero sin los divisores [${array2}]</h2><hr/>`);
for (i=0;i<array1.length;i++){
    document.write(`<p>`);
    let var1 = array1[i];
    document.write(`Múltiples de ${var1}: `);
    for (j=1;j<=var1;j++){
        if (!array2.includes(j)){
            if ((var1%j)==0){
                document.write(j);
                if (j!=var1){
                    document.write(`, `);
                }
            }
        }
    }
    document.write(`</p>`);
}