var mongoose = require('mongoose');
var Usuario = require('../models/Usuario');

var usuarioController = {};

usuarioController.list = function(req, res) {
    Usuario.find({}).exec(function(err,usuarios) {
        if (err) {
            console.log('ERROR: ', err); 
            return;
        }
        console.log('INDEX');
        res.render('../views/usuario/index',{usuarios:usuarios,titulo:'INDEX'});
    });
    
    /*    let usuarios;

    function cargarEstado(sql) {
        console.log(sql);
        return new Promise((resolve, reject) => {
            Usuario.find({estado:sql}).exec(function(error, datos) {
                if (error) reject(error);
                resolve(datos);
            });
        });
    }

    Promise.all([
        cargarEstado("A"), 
        cargarEstado("B")
    ])
    .then(lista => {
        usuarios = lista[0];
        console.log('usuarios: ', usuarios);
        res.render('../views/usuario/index',{usuarios:usuarios, titulo:'INDEX'})
    })
    .catch(error => {
        console.log(error)
    });
*/

};

module.exports = usuarioController;
