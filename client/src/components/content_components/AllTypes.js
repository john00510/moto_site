import React from 'react';
import Types from '../types';

class AllTypes extends React.Component {
  render() {
    const typesList = Types.map(
      type => <div><a href={ type[0] }>{ type[2] }<span>{ type[1] }</span></a></div>
    );
    return(
      <div className="link-section--types">
        <h2>Shop by Type</h2>
        <div className="type-icons">
          { typesList }
        </div>
      </div>
    );
  }
}

export default AllTypes;
