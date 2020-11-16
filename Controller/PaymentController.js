const PaymentModel = require('../DataModel').payment

exports.payment = (req, res) => {
    console.log(req.body)
    // res.send(req.body)
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    //today = mm + '/' + dd + '/' + yyyy;
    today = new Date();
    var ex = new Date(req.body.exDate)
    console.log(new Date(req.body.exDate))
    payment.findOne({ exDate: req.body.exDate, creditCard: req.body.creditCard, cvv: req.body.cvv }, (err, data) => {
        console.log(today)
        if (ex.getTime() > today.getTime()) {
            return res.status(200).send(data)
        }
        return res.status(400).send('err')

    })
}
