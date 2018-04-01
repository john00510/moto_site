import React from 'react';
import {Link} from 'react-router-dom';
import PageHeaderLogo from './svg/logos';
import AllMakes from './Components/AllMakes';
import AllTypes from './Components/AllTypes';
import './fonts.css';
import './main.css';

const mainLink = "http://localhost:3000/";

const HomePage = () => (
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
            <div id="seeAllSection" className="link-section-all">
              <AllMakes MainLink={ mainLink } />
              <AllTypes MainLink={ mainLink } />
            </div>
          </div>
        </content>
        <footer>
        </footer>
      </div>
    </body>
  </html>
);

export default HomePage;
