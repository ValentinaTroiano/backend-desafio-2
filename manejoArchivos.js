const { log } = require('console')
const fs = require ('fs')

const arr = []

let ultimoId = 0

class Caja {
    constructor(ruta){
        this.ruta = ruta
        this.cosas = []
    }

    async guardar (cosa){
        cosa.id = ultimoId +1 
        this.cosas.push (cosa)

        try{
            await fs.promises.writeFile(this.ruta, JSON.stringify(this.cosas))
             console.log(cosas)
             console.log("guardado")

        } catch (err){
            console.log("error")
        }
     

        return ultimoId

    }
    getById (idNumber){
        console.log(this.cosas[idNumber]);
    }
    getAll (){
        console.log(this.cosas);
    }
    deleteById (idNumber){
        this.cosas.splice(idNumber,1);
        console.log((`Obejto con id ${idNumber} elimindado`));
    }
    deleteAll(){
        this.cosas  = [];

    }







}

const caja =new Caja()

const cosa = [
    { nombre:"escuadra", precio: 30, thumbnail: "http://http2.mlstatic.com/D_656522-MLA44388481439_122020-I.jpg"},
    { nombre: "globo terraqueo", precio: 50, thumbnail: "http://http2.mlstatic.com/D_920961-MLA31579848144_072019-I.jpg"},
    { nombre :"calculadora", precio:40, thumbnail: "http://http2.mlstatic.com/D_875724-MLA31116238699_062019-O.jpg" }
]

caja.guardar(cosa)


























