let compra = parseInt(prompt("Cuanto ha gastado en su compra?"));
//
document.write("<h1>Recibo</h1><hr/>");

if (compra < 100) {
    document.write(`<h3>Cantidad comprada: ${compra}</h3>`);
    document.write(`<h3>Descuento recibido: 0%`);
    document.write(`<h3>Precio a pagar: ${compra}`);
} else if ((compra >= 100) && (compra < 300)) {
    document.write(`<h3>Cantidad comprada: ${compra}</h3>`);
    document.write(`<h3>Descuento recibido: 5%`);
    document.write(`<h3>Precio a pagar: ${compra-(compra*0.05)}`);
} else if ((compra >= 300) && (compra < 400)) {
    document.write(`<h3>Cantidad comprada: ${compra}</h3>`);
    document.write(`<h3>Descuento recibido: 10%`);
    document.write(`<h3>Precio a pagar: ${compra-(compra*0.1)}`);
} else if ((compra >= 400)) {
    document.write(`<h3>Cantidad comprada: ${compra}</h3>`);
    document.write(`<h3>Descuento recibido: 15%`);
    document.write(`<h3>Precio a pagar: ${compra-(compra*0.15)}`);
};