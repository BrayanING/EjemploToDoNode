const descripcion = {
              demand: true,
              alias: 'd',
              desc: 'Descripcion por la tarea por hacer'
          };
const completado = {
              default: true,
              alias: 'c',
              desc: 'Marca como completado o pendiente la tarea'
          };
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer',{descripcion})
    .command('actualizar', 'Actualiza el estado completado de una tarea', {descripcion, completado})
    .command('borrar', 'Borrar una tarea',{descripcion})
    .help()
    .argv;

module.exports = {
    argv
}