const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',
        // default: 10
    }
}



const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crear un archivo con la base y el limite especificado', opt)
    .help()
    .argv;

module.exports = {
    argv
}