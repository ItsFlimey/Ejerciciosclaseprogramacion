const detener = 24;
document.write(`<h2>Números en base 5</h2><hr/>`);
document.write(`<p>`);
for (i=0;i<=detener;i++){
    let j = i;
    let counter = 0;
    if (j>=5){
        counter = parseInt(j/5);
        j=j%5;
    }
    document.write(`${counter}${j}\n`);
}
document.write(`</p>`);