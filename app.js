// const fs = require('fs');
// const fs = require('fs');

const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        multiplicar.listarTabla(argv.base, argv.limite)
            .then(data => {
                console.log('===============================');
                console.log(`========Tabla de ${argv.base}==========`);
                console.log('===============================');
                console.log(data.white)
            })
            .catch(e => console.log(e));
        // console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:` + (`${archivo}`).green +
                `con base ${argv.base} y limite ${argv.limite}`))
            .catch(e => console.log(e));

        break;
    default:
        console.log('Comando no reconocido');
        break;
}

// console.log(module);


// console.log(process.argv);
// let argv2 = process.argv;
// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log(multiplicar);
// console.log(base);