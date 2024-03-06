document.write(`<h2>100 números aleatorios entre 0 y 100</h2><hr/>`);
for (i=0;i<100;i++){
    document.write(`<p>${Math.random()*100}</p>`);
}