let palabra = prompt("Por favor, introduzca la palabra que desea transformar: ");
let veces3 = ["a","e","i","o","u"];
let veces2 = ["b","c","d","f","g","h","l","m","n","p","r","s","t","v","w","x","y","z"];
let veces5 = ["j","k","q"];

document.write(`<h2>Palabra ${palabra} transformada:</h2><hr/>`);
document.write(`<h4>`);
for (i=0;i<palabra.length;i++){
    if (veces3.includes(palabra[i].toLowerCase())){document.write(palabra[i].repeat(3))}
    if (veces2.includes(palabra[i].toLowerCase())){document.write(palabra[i].repeat(2))}
    if (veces5.includes(palabra[i].toLowerCase())){document.write(palabra[i].repeat(5))}
}
document.write(`</h4>`);