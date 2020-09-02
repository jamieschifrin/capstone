const mongoose = require('mongoose')
const Schema = mongoose.Schema
const locationSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zipcode:{
        type: String,
        required:true
    }
})
const attractionSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    website:{
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    location:{
        type: locationSchema,
        required: true
    },
    indoors:{
        type: Boolean,
        required: true
    },
    kidFriendly:{
        type: Boolean,
        required: true
    },
    likes:{
        type: String,
        required: false
    }
})
const Attraction = mongoose.model('Attraction', attractionSchema)
module.exports = Attraction





