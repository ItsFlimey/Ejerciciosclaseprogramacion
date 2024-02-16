let base = parseInt(prompt("Por favor, introduzca la longitud de la base: "));
let altura = parseInt(prompt("Por favor, introduzca la longitud de la altura: "));

function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillRect(10,10,base,altura);
    }
}
draw()