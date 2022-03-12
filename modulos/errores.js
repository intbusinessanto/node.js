function serompe() {
    return 3 + z;
}

try {
    serompe();
} catch (err) {
    console.error('Que fue de madre');
    console.error(err.message);
}

console.log('Esto está aquí al final');