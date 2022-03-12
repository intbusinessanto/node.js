let i = 0;
let intervalo = setInterval(function() {
    console.log('Hola Santo el Aspero');
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++;
}, 2000);

setImmediate(function() {
    console.log('Perrito');
});

console.log(__dirname);
console.log(__filename);