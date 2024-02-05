let nombre = prompt("¿Cual es tu nombre?");
let apellido = prompt("¿Y tu primer apellido?");
let edad = prompt("¿Cuantos años tienes?");

//Con la información pedida al usuario, calculamos el nombre completo y el año de nacimiento.
let fullName = (nombre + " " + apellido);
let year = (2024-edad); //Teniendo en cuenta que el año actual es 2024

alert("Nombre: "+fullName+"\nAño de nacimiento: Entre "+(year-1)+" y "+(year));