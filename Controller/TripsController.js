const trips = require("../DataModel").trips
const tripsData = require('../Data/trips.json')
exports.tripsList = (req, res) => {
    trips.find({}, (err, trips) => {
        if (err)
            res.send(err);
        res.json(trips);
    });
}
exports.updateTrip = (req, res) => {
    trips.findOne({ _id: req.body.id }, (err, trip) => {
        if (err)
            res.send(err);
        if (trip) {

            trip.idOfTourist.push(req.body.touristid);
            trips.updateOne({ _id: trip._id }, { idOfTourist: trip.idOfTourist }, (err, data) => {

                trips.findOne({ _id: req.body.id }, (err, trip) => {
                    if (err)
                        res.send(err);
                    res.send(trip)
                })
            }
            )
        }
    })
}

exports.fillTrips = (req, res) => {

    for (let index = 0; index < tripsData.length; index++) {
        var trip = new trips(tripsData[index])
        trip.save((err, trip1) => {
            if (err)
                console.log(err)
            console.log(trip1)
        })
    }
    res.send(tripsData)

}