function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Estoy siendo asincrona, ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback;
    }, 1000);
}

console.log('Iniciando proceso...');
hola('Santo', function(nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso...');
    });
});