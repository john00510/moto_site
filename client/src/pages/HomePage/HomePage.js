import React from 'react';
import {Link} from 'react-router-dom';
import PageHeaderLogo from './svg/logos';
import AllMakes from './Components/AllMakes';
import AllTypes from './Components/AllTypes';
import GlobalHeader from './Components/GlobalHeader';
import GlobalUtilityHeader from './Components/GlobalUtilityHeader';
import './fonts.css';
import './main.css';

const mainLink = "http://localhost:3000/";

class HomePage extends React.Component {
  myFunc() {
    alert('Scroll');
  }

  render() {
    return (
      <html lang="en">
        <head className="at-element-marker">
          <title>Home Page</title>
        </head>
        <body data-rendering-name="Homepage">
          <div className="wrapper">
            <header className="page-header  sticky" onScroll={this.myFunc} data-js="StickyNav" data-kmx="global-header">
              <div className="content">
                <PageHeaderLogo />
                <GlobalUtilityHeader />
                <GlobalHeader />
              </div>
            </header>
            <div className="container body-content" style={{ marginTop: "0px" }}>
              <div className="content">
                <div className="homepage-links">
                  <div id="seeAllSection" className="link-section-all">
                    <AllMakes MainLink={ mainLink } />
                    <AllTypes MainLink={ mainLink } />
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
