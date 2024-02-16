let mes = parseInt(prompt("Por favor, introduzca el més del año en el que nos encontramos (En número): "));
let dia = parseInt(prompt("Ahora introduzca el dia del més:"));
if ((mes > 12 || mes < 1) || (mes == 2 && dia > 29) || (dia > 31 || dia < 1)){
    alert("El dia que has introducido es invalido...")
} else if ((mes > 3 && mes < 6) || (mes == 3 && dia >= 21) || (mes == 6 && dia <= 21)){
    alert("¡Es primavera!");
} else if ((mes > 6 && mes < 9) || (mes == 6 && dia >= 22) || (mes == 9 && dia <= 21)){
    alert("¡Es verano!");
} else if ((mes > 9 && mes < 12) || (mes == 9 && dia >= 22) || (mes == 12 && dia <= 21)){
    alert("¡Es otoño!");
} else if ((mes == 12 && dia >= 21) || (mes >= 1 && mes < 3) || (mes == 3 && dia <= 20)){
    alert("¡Es invierno!");
};