import React from 'react';
import Navbar from './components/Homepage/Navbar';
import Footer from './components/Homepage/Footer';
import Home from './components/Homepage/Home'
// import Profile from './components/user/Profile';
import $ from 'jquery'
// import $ from 'jquery'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Trips from './components/Homepage/Cards'
import Login from './components/user/login'
import Trip from './components/trips/trips'
import Signup from './components/user/signup'
// import Payment from './components/payment/payment'
import Profile from './components/user/Profile';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: true,
      hello: 'hello for reeal',
      thetrip: [{
        id: 5,
        explor: 'Explore the beauty of palestine Coast',
        image: [
          [
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Israel_-_Haifa_-_Bahai_Gardens_004.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6e/TerracesBenGurion2.jpg"
          ],
          [
            "https://media.safarway.com/content/9a65bc29-4e0a-4abc-9dc3-c4c05e1cff70_sm.jpg",
            "https://data.arab48.com/data/news/2018/09/19/Croped/20180919114210.jpg",
            "https://media.safarway.com/content/0065122b-6c6e-4bc8-b398-8a8d94a05957_sm.jpg",
            "https://i.ytimg.com/vi/bpC_cGDdegU/maxresdefault.jpg"
          ],
          [
            "https://pbs.twimg.com/media/DbepjT9XkAMGwRr.jpg",
            "https://i.ytimg.com/vi/M9DU5HyJ_-0/maxresdefault.jpg",
            "https://pbs.twimg.com/media/DWT0otJWsAAns_b.jpg",
            "https://i.ytimg.com/vi/Gw4tDpqg4Bs/maxresdefault.jpg"
          ],
          [
            "https://www.elmstba.com/wp-content/uploads/%D8%B3%D9%88%D8%B1-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%B9%D9%83%D8%A7.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/9/9d/%D8%B3%D9%88%D8%B1-%D8%B9%D9%83%D8%A7.jpg",
            "https://tripnholidays.com/wp-content3_3/12-top-rated-tourist-attractions-in-akko-acre-2.jpg",
            "https://tripnholidays.com/wp-content3_3/12-top-rated-tourist-attractions-in-akko-acre-3.jpg",
            "https://tripnholidays.com/wp-content3_3/12-top-rated-tourist-attractions-in-akko-acre-4.jpg",
            "https://tripnholidays.com/wp-content3_3/12-top-rated-tourist-attractions-in-akko-acre-6.jpg",
            "https://tripnholidays.com/wp-content3_3/12-top-rated-tourist-attractions-in-akko-acre-11.jpg"
          ],
          [
            "https://modo3.com/thumbs/fit630x300/153313/1484740873/%D9%85%D8%AF%D9%8A%D9%86%D8%A9_%D9%8A%D8%A7%D9%81%D8%A7_%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D8%A9.jpg",
            "https://hyatok.com/mwfiles/thumbs/fit630x300/10078/1588763429/%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA_%D8%B9%D9%86_%D9%85%D8%AF%D9%8A%D9%86%D8%A9_%D9%8A%D8%A7%D9%81%D8%A7.jpg",
            "https://s3-eu-west-1.amazonaws.com/ourboox-media-prod/wp-content/uploads/2017/01/2-53.jpg",
            "https://up.graaam.com/img/85ee8c6956ef8247850228ceaf61710e.jpg",
            "https://pbs.twimg.com/media/Dj7h-YEXgAAUu-v.jpg",
            "https://yaffa48.com/Public/image/articles/173259976920191010125033//watermarked/8a7c0d40-7726-4a2b-b44a-963176c3c571.jpg.jpg"
          ]
        ],
        tripType: "4 night & 5 days Trip",
        name: "The Coast Trip",
        price: "150 JD",
        date: "2020-12-10T00:00:00.000+00:00",
        deadLine: "2020-11-09T00:00:00.000+00:00",
        tripGuide: "Guide 4",
        maximumNumPerTrip: 40,
        idOfTourist: [],
        discription: {
          1: "We will start our trip by visiting The Terraces of the Baháʼí Faith. These gardens extend over the Carmel Mount. In the center of the Baha'i garden , there is  a building with a golden dome, and it is the duty of a Baha'i missionary who was killed in 1850, and his remains were transferred to Haifa.You will enjoy an Awesome view of the city from the top of the hill.",
          2: "On the second day,the journey begins at Tell al-Samak, which is considered one of the archaeological sites rich in important discoveries.Tal al-Samak is located on the seashore, 1.3 km southwest of Mount Carmel, and on the old main road running from Caesarea to Acre. After That we will go to the Sculptures Garden.A wonderful garden in the city of Haifa overlooking the picturesque port of Haifa, and the most distinctive feature of this park are the wonderful bronze statues scattered throughout the park.",
          3: "On that day we will visit Mount Carmel, enjoy the beautiful overlooks, and walk on the hanging bridges in the mountain.The UNESCO Carmel Reserve, have the Carmel National Park.Choose one of the many trails within the park, or cycle or hike your way to panoramic views of Haifa and the surrounding valleys.",
          4: "We will be visiting the city of Akka , going to the Fence near the coast and enjoying the sea view. On that day we will be visiting all the tourist places related to Ahmed El-Jazzar. The mosque , castles and the Crusader city.  The old city market and Khan Al-Omran will be on that day list. ",
          5: "On the final day we will go to Jafa, one of the oldest and most important cities in historic Palestine. It is located on the eastern coast of the Mediterranean Sea.Visiting the city will be the best way to end the cost trip. By visiting the oranges fields , the old city and market. You will have an unforgettable lunch at a popular fish restaurant. "
        }
      },

      {
        id: 1,
        explor: 'Explore the beauty of Nablus city',
        image: [
          [
            "https://www.inlocamotion.com/wp-content/uploads/2019/03/nablus-old-city-clock-tower.jpg",
            "https://thisweekinpalestine.com/wp-content/uploads/2019/08/001-8.jpg",
            "https://electronicintifada.net/sites/default/files/styles/original_800w/public/2005-04/market483.jpg?itok=Tn4wwaoT",
            "https://thisweekinpalestine.com/wp-content/uploads/2014/07/DKkZ5eYUQAAwfhv.jpg"
          ]
        ],
        tripType: "One Day Trip",
        name: "Nablus Trip",
        price: "50 NIS",
        date: "2020-11-19T00:00:00.000+00:00",
        deadLine: "2020-11-18T00:00:00.000+00:00",
        tripGuide: "Guide 1",
        maximumNumPerTrip: 20,
        idOfTourist: [],
        discription: {
          1: "During your visit to Nablus, you can look into the ancient past. We will visit the old town, historical buildings , palaces and the Turkish public baths.If you like history, our trip will include the Roman amphitheater at Mount Gerizim, ancient mosques and historical churches.The city is considered the cradle of  many religions. We will visit Al-Nasr Mosque in the old city, Bir Ya`qub, Christian churches.And  Mount Gerizim which is sacred to the Samaritan sect. So we can  enjoy the beautiful different views of the city. Last, but not least, is to enjoy a varied food combination between  traditional and western food , various Nabulsi sweets, such as Kunafa."
        }
      }
      ],
      testtrips: []
    }
    this.changeLogInStatus = this.changeLogInStatus.bind(this)
    this.getup = this.getup.bind(this)
    this.paymentCheck = this.paymentCheck.bind(this)
    this.getTrips = this.getTrips.bind(this)

  }
  changeLogInStatus() {
    this.setState({
      islogin: !this.state.islogin,
      tokenin: ''
    })
  }
  getTrips = () => {
    var alltrips = []
    $.ajax({
      type: "GET",
      url: "/gettrips",
      success: (res) => {
        for (var i in res) {
          console.log(res[i])
          alltrips.push(res[i])

        }
        console.log("my first ajax request yay" + alltrips)
        this.setState({
          testtrips: alltrips
        })
      },
      error: function (err) {
        console.error(err)
      }
    })
  }


  getup() {
    console.log('all the way from the app, Hi!', this.state.testtrips)
  }
  componentDidMount() {
    this.setState({
      tokenin: document.cookie
    })
    document.documentElement.scrollTop = 0;
    this.getTrips()

  }

  paymentCheck() {
    console.log('payment method')
  }
  render() {
    if (!this.state.tokenin === '') {
      console.log('hi')
    }
    const { islogin } = this.state
    let comp
    if (islogin) {
      comp = <Route
        path='/sign-up'
        render={(props) => <Signup toggleLogin={this.changeLogInStatus} />}
      />
    }
    else {
      comp = <Route
        path='/sign-up'
        render={(props) => <Login toggleLogin={this.changeLogInStatus} hello='hello' />}
      />
    }
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            {comp}
            <Route
              path="/"
              exact render={(props) => <Home getup={this.getup} testtrips={this.state.testtrips} paymentCheck={this.paymentCheck} hello={this.state.hello} trip={this.state.thetrip} />}
            />
            <Route
              path="/trips"
              render={(props) => <Trips getup={this.getup} testtrips={this.state.testtrips} paymentCheck={this.paymentCheck} lable1={this.state.hello} trip={this.state.thetrip} />}
            />
            {/* <Route path="/" exact component={Home} /> */}
            {/* <Route path="/trips" exact component={Trips} /> */}
            <Route path="/sign-up" exact component={Signup} />
            <Route path="/user" exact component={Profile} />
            <Route path="/trip" exact component={Trip} />

          </Switch>
          <Footer />
        </Router>
      </>


    )


  }
}


export default App;
