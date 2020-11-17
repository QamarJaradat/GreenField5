const trips = require("../DataModel").trips
exports.tripsList = (req,res) => {
    trips.find({},(err,trips)=>{
        if(err)
        res.send(err);
        res.json(trips);
    });
}
exports.updateTrip = (req,res) => {
    trips.findOne({_id:req.body.id},(err,trip) => {
        if(err)
        res.send(err);
        if(trip){
        
        trip.touristid.push(req.body.touristid);
        trips.updateOne({_id : trip._id},{touristid:trip.touristid},(err,data)=>{

            trips.findOne({_id:req.body.id},(err,trip) =>{
                if(err)
                res.send(err);
                res.send(trip)
            })
        }
        )
    }
    })
}