// Requireds
const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
  case 'listar':
    console.log('listar');
    listar(argv.base, argv.limite);
    break;
  case 'crear':
    console.log('crear');
    console.log(argv.base);

    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(console.log);
    break;
  default:
    console.log('no se reconoce el comando');
    break;
}

// console.log(argv);


// console.log('LIMITE', argv.limite);

