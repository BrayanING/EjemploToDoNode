const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('Fichero/data.json', data, (err)=>{
        if(err) throw new Error('No se pudo grabar', err);

    })
}

const cargarDB = () => {
    try{
        listadoPorHacer = require('../Fichero/data.json'); 
    }catch(error){
        listadoPorHacer = [];
    }
}

const getListado = () =>{
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado=true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if( listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    console.log(listadoPorHacer);
    guardarDB();
    return porHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}