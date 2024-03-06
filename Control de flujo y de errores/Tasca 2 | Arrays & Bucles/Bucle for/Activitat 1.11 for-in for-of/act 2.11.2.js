let num_rand = [];
for (i=0;i<10;i++){
    num_rand.push(parseInt(Math.random()*(15-5)+5));
}
for (i of num_rand){
    document.write("<p>"+`x`.repeat(i)+"</p>");
}
console.log(num_rand);