import mongoose from "mongoose";

const flightSchema = mongoose.Schema({
    id: String,
    flightNumber: String,
    airline: String,
    takeoff: String,
    landing: String,
    duration: Number,
    price: Number,
    currencyCode: String,
    departureAirport: String,
    arrivalAirport: String
})

const FlightModel = mongoose.model('FlightModel', flightSchema)
export default FlightModel
