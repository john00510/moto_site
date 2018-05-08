import React from 'react';

class HeroPromo extends React.Component {
  render() {
    return(
      <div className="hero promo inverted" data-rendering-name="Hero-Cold">
        <div
          className="background-image-responsive"
          data-react="ResponsiveImage"
          style={{backgroundImage: "url('/cdn/car.svg')"}}>
        </div>
        <div className="content"></div>
      </div>
    );
  }
}

export default HeroPromo;
