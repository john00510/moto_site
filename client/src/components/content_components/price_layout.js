import React from 'react';
import PriceFlyout from './price_flyout';

class PriceLayout extends React.Component {
  render() {
    return (
          <div className={this.props.el1} onClick={this.props.onClick}>
            <div className="advanced-box--label">
              {this.props.el2}
              <svg id="" role="img" viewBox="0 0 50 29.011">
                <path d="M49.498 5.284L26.152 28.511c-.303.299-.75.5-1.154.5-.4 0-.848-.201-1.15-.5L.502 5.284C.202 4.986 0 4.535 0 4.138s.202-.849.502-1.146L3.006.5c.303-.299.703-.5 1.155-.5.399 0 .849.201 1.15.499l19.687 19.588L44.688.499C44.99.201 45.439 0 45.844 0c.399 0 .848.201 1.15.499l2.504 2.492c.303.298.502.749.502 1.147s-.199.848-.502 1.146z"></path>
              </svg>
            </div>
            <div className={this.props.el3}>{PriceFlyout}</div>
          </div>
    );
  }
}

export default PriceLayout;
