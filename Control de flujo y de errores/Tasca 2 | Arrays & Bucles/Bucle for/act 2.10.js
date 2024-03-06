let main_values = [];
let secondary_values = [];
let array2D = [];
/*Declaración de variables acaba aquí*/
for (i=0;i<32;i++){
    let value = String(parseInt(Math.random()*100));
    if (value.length == 1){
        main_values.push(`0${value}`);
        secondary_values.push(`0${value}`);
    } else {
        main_values.push(`${value}`);
        secondary_values.push(`${value}`);
    }
}
document.write(`<p>${main_values}</p><hr/>`);
/*Generación de números aleatorios acaba aquí*/
for (i=0;i<4;i++){
    let test_array = [];
    for (j=0;j<8;j++){
        test_array.push(main_values.shift());
    }
    array2D.push(test_array);
}
document.write(`<p>`);
for (i=0;i<array2D.length;i++){
    for (j=0;j<array2D[i].length;j++){
        document.write(`${array2D[i][j]} `);
    }
    document.write(`<br/>`);
}
document.write(`-------------------------------------------<br/>`)
for (i=0;i<array2D[0].length;i++){
    console.log(i);
    let num1 = 0;
    for (j=0;j<array2D.length;j++){
        num1 = num1+parseInt(array2D[j][i]);
    }
    document.write(`${num1} `);
}
document.write(`</p><hr/>`)
/*Impresión de la array en 2D acaba aquí*/
let level1 = [];
let level2 = [];
for (i=0;i<16;i++){
    level1.push(secondary_values[i]);
    level2.push(secondary_values[i+16]);
}
let num2 = 0;
document.write(`<p style=float:left;margin:10px;> Nivel 1: <br/>`);
for (i=0;i<level1.length;i=i+4){
    document.write(`${level1[i]} ${level1[i+1]} ${level1[i+2]} ${level1[i+3]} <br/>`)
}
document.write(`</p>`);

num2 = 0;
document.write(`<p style=float:left;margin:10px;> Nivel 2: <br/>`);
for (i=0;i<level2.length;i=i+4){
    document.write(`${level1[i]} ${level1[i+1]} ${level1[i+2]} ${level1[i+3]} <br/>`)
}
document.write(`</p>`);