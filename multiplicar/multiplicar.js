const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        if (!Number(base)) {
            reject('No me estas dando un numero rufian :v');
        } else {
            resolve(data);
        }


    });
}
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero!');
            return;
        }

        //console.log(!Number(base));
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${base*i}\n`);
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);

            else
                resolve(`tabla-${base}.txt`);

        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
}