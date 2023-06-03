import express from 'express'
import { getFlights, postFlight, updateFlight, deleteFlight, getFlight } from '../controller/Flights.js'

const router = express.Router()
router.get('/', getFlights)
router.get('/:id', getFlight)
router.post('/', postFlight)
router.patch('/:id', updateFlight)
router.delete('/:id', deleteFlight)
export default router
