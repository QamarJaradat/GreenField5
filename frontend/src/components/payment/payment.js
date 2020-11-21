import React from 'react'
import './payment.css';
import $ from 'jquery'

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cvv: '',
            edate: '',
            ccnumber: '',
            tripid: '',
            idOfTourist: ''
        }

        this.handelchange = this.handelchange.bind(this)
        this.checkPayment = this.checkPayment.bind(this)

    }

    handelchange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(e.target.value)
    }
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        this.setState({
            tripid: this.props.location.state.tripid
        })
        console.log(this.props.location.state.tripid, 'trip')
        console.log(this.props.location.state.userid, 'user')

    }

    checkPayment() {
        var data = {
            exDate: this.state.edate,
            creditCard: this.state.ccnumber,
            cvv: this.state.cvv
        }
        var paydata = {
            id: this.props.location.state.tripid,
            idOfTourist: this.props.location.state.userid
        }
        $.ajax({
            method: 'POST',
            url: '/payment',
            data: data,
            success: function (res) {
                //another ajax to update db !!
                console.log(res)
                //alert('enjoy your trip')
                $.ajax({
                    method: 'POST',
                    url: '/addtrip',
                    data: paydata,
                    success: function (updatedData) {
                        document.getElementById("Expired").innerHTML = "<p></p>"
                        if (updatedData === 'all update') {
                            console.log(updatedData)
                            document.getElementById("wait").innerHTML = "<div class='alert alert-secondary' role='alert'>Wait a moment please</div>"
                            setTimeout(() => {
                                setTimeout(() => {

                                    window.location.href = "/"
                                }, 3000);
                                document.getElementById("wait").innerHTML = "<div class='alert alert-primary' role='alert'>Enjoy your trip</div>"
                            }, 5000);
                        } else {
                            alert('Data not updated');
                        }
                    }
                })
            },
            error: function (err) {
                if (err.status === 406)
                    //alert('Credit Card Date Expired')
                    document.getElementById("Expired").innerHTML = "<div class='alert alert-danger' role='alert'> Credit Card Date Expired</div>"

                if (err.status === 401)
                    //alert('you enterd wrong information')
                    document.getElementById("Expired").innerHTML = "<div class='alert alert-danger' role='alert'> you enterd wrong information</div>"


            }
        })
    }

    render() {
        return (
            <div className="imgdivpay">
                <div className="row">
                    <div id="payment" className="col-sm-4 right" >
                        <form action="#" className='form1' >
                            <div>
                                <label>Credit Card Number</label>
                                <input type="string" className="form-control" name="ccnumber" onChange={this.handelchange} placeholder="Cridet Card Number" />
                            </div>

                            <div>
                                <label>CVV</label>
                                <input className="form-control" name="cvv" onChange={this.handelchange} placeholder="Your CVV" />
                            </div>
                            <div>
                                <label>Expired Date</label>
                                <input type='date' className="form-control" name="edate" onChange={this.handelchange} placeholder=" Credit Card Expier Date" />
                                <small id="Expired"></small>
                            </div>

                            <div style={{ "marginTop": '12px' }}>
                                <input type='button' value='Ready to Go!' className="btn btn-secondary" onClick={this.checkPayment} style={{ "display": 'inline-block', "marginRight": '10px' }}></input>
                            </div>
                            <br></br>
                            <br></br>
                            <small id="wait"></small>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default Payment;
