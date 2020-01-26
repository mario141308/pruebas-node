const fs = require('fs');
const colors = require('colors');

let listar = (base, limite = 10) => {

  console.log('====================='.white);
  console.log(`========Tabla de ${base}===========`.green);
  console.log('====================='.gray);
  

  for (let i = 1  ; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
}

let crearArchivo = async (base, limite = 10) => {
  if (!Number(base)) throw Error(`El valor introducido '${base}' no es un numero`);

    let data = '';

  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  }

  fs.writeFile(`./tablas/tabla-${base}.txt`, data, (error) => {
    if (error) throw new Error(error);
    console.log('the file has been created');
  })
  return `tabla-${base}.txt`;
}

module.exports = { crearArchivo, listar }