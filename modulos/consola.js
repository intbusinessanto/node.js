console.group('Jugando con la consola');
console.log('Algo')
console.info('Algo más')
console.error('Esto es un error')
console.warn('Hijo de la chingada')

var tabla = [{
        nombre: 'Care Chimba',
        edad: 20
    },
    {
        nombre: 'Care lo Mio',
        edad: 22
    }
]
console.groupEnd('Fin del juego con la consola');

console.table(tabla);

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');