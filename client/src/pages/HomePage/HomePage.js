import React from 'react';
import {Link} from 'react-router-dom';
import PageHeaderLogo from './svg/logos';
import AllMakes from './Components/AllMakes';
import AllTypes from './Components/AllTypes';
import './fonts.css';
import './main.css';

class HomePage extends React.Component {
  render() {
    return(
      <html lang="en">
        <head className="at-element-marker">
          <title>Home Page</title>
        </head>
        <body data-rendering-name="Homepage">
          <div className="wrapper">
            <header>
              <PageHeaderLogo />
            </header>
            <content>
              <div className="homepage-links">
                <AllMakes MainLink="http://localhost:3000/" />
                <AllTypes MainLink="http://localhost:3000/" />
              </div>
            </content>
            <footer>
            </footer>
          </div>
        </body>
      </html>
    );
  }
}

export default HomePage;
