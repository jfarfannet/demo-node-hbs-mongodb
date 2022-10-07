var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nombre : {type: String, require:true, max:20 },
    apellido : {type: String, require:true, max:20 },
    email : {type: String, require:true },
    estado : {type: String, require:true, max:1 },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario',UsuarioSchema);