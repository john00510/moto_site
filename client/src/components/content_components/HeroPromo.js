import React from 'react';

const styles = {
  backgroundImage: "url('/cdn/hp-hero-shopper-on-car-lot-final.jpg')"
};

class HeroPromo extends React.Component {
  render() {
    return(
      <div className="hero promo inverted">
        <div className="background-image-responsive" style={styles}></div>
        <div className="content"></div>
      </div>
    );
  }
}

export default HeroPromo;
