import React from 'react';

class PriceFlyout extends React.Component {
  render() {
    const Prices = ['No Min', '$25K', '$50K', '$75K', 'No Max'];
    const pricesList = Prices.map(
      (price) => <span className="slider--label">{price}</span>
    );

    return(
      <div className="price-search--flyout">
        <div className="price-search--inner">
          <div>{pricesList}</div>
          <div className="slider slider-double ">
            <span className="slider--value-label"></span>
            <span className="slider--value-label"></span>
            <div className="slider--wrap" style={{position: "relative"}}>
              <div className="bar bar-0" style={{position: "absolute", left: 0, right: 608}}></div>
              <div className="bar bar-1" style={{position: "absolute", left: 0, right: 0}}></div>
              <div className="bar bar-2" style={{position: "absolute", left: 608, right: 0}}></div>
              <div className="handle handle-0" style={{position: "absolute", zIndex: 2, left: 0}}>
                <div className="slider--handle">
                  <div className="slider--handle--value"></div>
                </div>
              </div>
              <div className="handle handle-1" style={{position: "absolute", zIndex: 1, left: 608}}>
                <div className="slider--handle">
                  <div className="slider--handle--value"></div>
                </div>
              </div>
            </div>
          </div>
          <p className="price-search--label">
            Set a Maximum And Minimum Price Range.
          </p>
          <span className="price-search--label form-error-message"></span>
        </div>
        <div className="price-search--see-cars">
          <span className="price-search--see-cars--label">Shopping Between:</span>
          <div className="price-search--see-cars--input-wrap">
            <input className="form--field " name="minPrice" value="No Min" type="text" />
          </div>
          <span className="price-search--see-cars--label">&</span>
          <div className="price-search--see-cars--input-wrap">
            <input className="form--field " name="maxPrice" value="No Max" type="text" />
          </div>
          <div className="price-search--see-cars--btn-wrap">
            <a className="btn" href="">Shop This Range</a>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceFlyout;
