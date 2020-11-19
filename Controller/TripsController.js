const trips = require("../DataModel").trips
const UserModel = require('../DataModel').users

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
            return res.status(400).send(err);
        if (trip) {
            trip.idOfTourist.push(req.body.idOfTourist);
            trips.updateOne({ _id: trip._id }, { idOfTourist: trip.idOfTourist }, (err, data) => {
                if (err)
                    return res.status(400).send(err);
                if (data) {
                    UserModel.findOne({ _id: req.body.idOfTourist }, (err, user) => {
                        if (err)
                            return res.status(400).send(err);
                        if (user) {
                            user.trips.push(req.body.id)
                            UserModel.updateOne({ _id: user._id }, { trips: user.trips }, (err, data) => {
                                if (err)
                                    return res.status(400).send(err);
                                if (data) {
                                    return res.status(200).send('all update')
                                }
                            })
                        }
                    })
                }
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

exports.getmytrips = (req, res) => {
    console.log(req.body)

    trips.findOne({ _id: req.body.id }, (err, data) => {
        if (data) {
            res.send(data)

        }
    })

}