import React from 'react';
//import ReactDOM from 'react-dom';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Profile extends React.Component {
    render() {
       return (
      <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Paul Hanna</h2>
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{ height: '250px' }}
          />
          <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>  </p>
          <ul>Tour name : 20.10.2020</ul>
          <ul>Tour name : 20.10.2020</ul>
          <ul>Tour name : 20.10.2020</ul>
          <ul>Tour name : 20.10.2020</ul>

        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />

          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (123) 456-7890
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                  <i className="fa fa-fax" aria-hidden="true" />
                  (123) 456-7890
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  someone@example.com
                </ListItemContent>
              </ListItem>

              

            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  )
    }
}



export default Profile;
