async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hola ' + nombre + ' Estoy metida en una Promesa');
            resolve(nombre);
        }, 3000);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve(nombre);
        }, 3000);
    });
}

async function main() {
    let nombre1 = await hola('Santo');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre1);
    console.log('Terminamos el proceso...');
}

console.log('Empezamos el proceso...');
main();