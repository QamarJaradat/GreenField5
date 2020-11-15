const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose');
// var url = "mongodb+srv://lef:1234@cluster0.diesu.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(process.env.DB_CONNECT, { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })
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
    id: { type: Number, unique: true, sparse: true },
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
// userSchema.index({ createdBy: 1, name: 1 }, { unique: true });
let trips = mongoose.model("tripsinfo", tripsSchema);
let users = mongoose.model("userinfo", userSchema);
let payment = mongoose.model("paymentinfo", paymentSchema);

<<<<<<< HEAD

module.exports.users = users















=======
module.exports = db
>>>>>>> a7af87f3f4348342b878681e87558cca6c77dc55
