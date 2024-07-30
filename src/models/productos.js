const { Schema, model } = require( 'mongoose' );

const productosSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    urlImagen: {
        type:String,
    },
    quantity: {
        type: Number,
        default: 0 
    }
},{
    timestamps: true
});

const productosModel = model( 'productos', productosSchema );

module.exports = productosModel;