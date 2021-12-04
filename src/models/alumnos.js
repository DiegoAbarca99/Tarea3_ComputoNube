const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlumnoSchema = Schema({
  Nombre: String,
  Apellido: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('alumnos', AlumnoSchema);
