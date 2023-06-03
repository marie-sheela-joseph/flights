import FlightModel from '../models/flightModel.js'

export const getFlights = async (req, res) => {
    try {
        const flights = await FlightModel.find()
        res.status(200).json(flights)
    } catch (err) {
        console.log(err)
        res.status(404).json(err)
    }

}
export const getFlight = async (req, res) => {
    try {
        const result = await FlightModel.findById(req.params.id)
        res.status(200).json(result)

    } catch (err) {
        res.status(404).json(err)
    }
}
export const postFlight = async (req, res) => {
    const newFlight = new FlightModel(req.body.flight)
    try {
        console.groupEnd('newFlight', newFlight)
        const result = await newFlight.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error, message })
    }
}
export const updateFlight = async (req, res) => {
    try {
        console.log(req.params.id, req.body)
        const result = await FlightModel.findByIdAndUpdate(req.params.id, { $set: req.body.flight }, { new: true })
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const deleteFlight = async (req, res) => {
    try {
        console.log(req.params.id)
        const result = await FlightModel.findByIdAndDelete(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}