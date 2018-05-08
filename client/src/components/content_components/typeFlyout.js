import React from 'react';
import Types from '../types';

class TypeFlyout extends React.Component {
  render() {
    const typeWrap = (type, count) => (
      <div className="type-search--item ">
        {type[2]}
        <span className="type-search--item--link">
            {type[1]}
          <span className="type-search--item--count">
            ({count})
          </span>
        </span>
      </div>
    );

    const typesList = Types.map(typeWrap);

    return(
      <div className="type-search--flyout">
        <div className="type-search--inner">{typesList}</div>
        <div className="type-search--see-cars">
          <span className="type-search--see-cars--label">
            Select Vehicle Types From Above
          </span>
          <div className="type-search--see-cars--btn-wrap">
            <a className="btn" href="">
              Search Selected Cars
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TypeFlyout;
