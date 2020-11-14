const mongoose = require('mongoose');
var url = "mongodb+srv://lef:1234@cluster0.diesu.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(process.env.MONGODB || url, { useUnifiedTopology: true, useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
    console.log('connection to db sucessful')
})



let tripsSchema = mongoose.Schema({
    id: { type: Number, unique: true },
    touristid: [Number],
    images: [String],
    price: Number,
    discription: [String],
    tourDate: Date,
    deadline: Date,
    tourGuide: String,
    maximumNumPerTour: Number,
})
let userSchema = mongoose.Schema({
    id: { type: Number, unique: true },
    userName: String,
    userMail: String,
    userPass: String,
    userNum: Number,
    trips: [Number],
    newsLetter: Boolean
})

let paymentSchema = mongoose.Schema({
    id: { type: Number, unique: true },
    creditCard: Number,
    cvv: Number,
    exDate: Date
})


let trips = mongoose.model("tripsinfo", tripsSchema);
let users = mongoose.model("userinfo", userSchema);
let payment = mongoose.model("paymentinfo", paymentSchema);

module.exports = db















