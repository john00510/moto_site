import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import '../css/fonts.css';
import '../css/main.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerSticky: "page-header",
      marginTop: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
     window.addEventListener('scroll', (e) => this.handleScroll());
  }

  handleScroll() {
    if (window.scrollY > 3) {
      this.setState({headerSticky: "page-header sticky"});
      this.setState({marginTop: 130});
    }
    if (window.scrollY <=3 ) {
      this.setState({headerSticky: "page-header"});
      this.setState({marginTop: 0});
    }
  }

  render() {
    return (
      <html lang="en">
        <head className="at-element-marker">
          <title>Home Page</title>
        </head>
        <body onScroll={this.handleScroll}>
          <div className="wrapper">
            <Header headerSticky={this.state.headerSticky} />
            <HomeContent marginTop={this.state.marginTop} />
            <footer></footer>
          </div>
        </body>
      </html>
    );
  }
}

export default HomePage;
