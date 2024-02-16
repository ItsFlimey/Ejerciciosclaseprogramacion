let nota = prompt("¿Que nota (sobre 10) has sacado en tu exámen?");
//Introducción de la nota
if (nota >= 0 && nota < 5){
    document.write("<h1>Has sacado un suspenso :(</h1>");
} else if (nota >= 5 && nota < 7){
    document.write("<h1>Has sacado un aprobado bajo :/</h1>");
} else if (nota >= 7 && nota < 9){
    document.write("<h1>Has sacado un notable :)");
} else if (nota >= 9 && nota <= 10){
    if (nota >= 9.9 && nota < 10){
        document.write("<h1>Tu profesor te tiene mania >:D</h1>");
    } else {document.write("<h1>Has sacado un sobresaliente :D");}
} else {
    document.write("<h1>Esta nota no existe >:C");
}