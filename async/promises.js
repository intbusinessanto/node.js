function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hola ' + nombre + ' Estoy metida en una Promesa');
            resolve(nombre);
        }, 3000);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            // resolve(nombre);
            reject('Hay un error');
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve(nombre);
        }, 3000);
    });
}

// ---

let nombre1 = 'Santo';
console.log('Iniciando el proceso...');
hola(nombre1)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminando el proceso...');
    })
    .catch(error => {
        console.error('Ha habido un error: ');
        console.error(error);
    })