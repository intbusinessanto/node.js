function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Estoy siendo asincrona, Hola ' + nombre);
        miCallback();
    }, 3000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    }, 3000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

// --
let nombre1 = 'Santo';

console.log('Iniciando proceso...');
hola(nombre1, function(nombre) {
    conversacion(nombre1, 4, function() {
        console.log('...Terminamos');
    });
});


// hola(nombre1, function(nombre) {
//     hablar(function() {
//         adios(nombre1, function() {
//             console.log('Terminando proceso...');
//         });
//     });
// });