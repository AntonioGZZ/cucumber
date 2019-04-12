const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de laciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);