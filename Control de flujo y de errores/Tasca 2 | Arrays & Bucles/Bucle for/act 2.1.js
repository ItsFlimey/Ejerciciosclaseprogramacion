let ingredientes = [`Lechuga`,`Tomate`,`Uvas`,`Remolacha`,`Semillas de girasol`,`Aceite`,`Sal`];
document.write(`<h3>Componentes de una ensalada </h3>\n<hr/>\n<ul>`);
for (let i=0;i<ingredientes.length;i++){
    document.write(`<li>${ingredientes[i]}</li>`);
}
