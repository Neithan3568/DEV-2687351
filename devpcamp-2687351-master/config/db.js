const mongoose = require('mongoose')



//funcion de conexion
async function conectDB () {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Conectado a Mongo`.bgMagenta.blue)
}

module.exports = conectDB