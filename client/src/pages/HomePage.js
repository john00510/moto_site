import React from 'react';
import {Link} from 'react-router-dom';
import AllMakes from '../components/AllMakes';
import AllTypes from '../components/AllTypes';
import Header from '../components/Header';
import '../css/fonts.css';
import '../css/main.css';

const mainLink = "http://localhost:3000/";

class HomePage extends React.Component {
  render() {
    return (
      <html lang="en">
        <head className="at-element-marker">
          <title>Home Page</title>
        </head>
        <body data-rendering-name="Homepage">
          <div className="wrapper">
            <Header />
            <div className="container body-content" style={{ marginTop: "0px" }}>
              <div className="content">
                <div className="homepage-links">
                  <div id="seeAllSection" className="link-section-all">
                    <AllMakes />
                    <AllTypes />
                  </div>
                </div>
              </div>
            </div>
            <footer>
            </footer>
          </div>
        </body>
      </html>
    );
  }
}

export default HomePage;
