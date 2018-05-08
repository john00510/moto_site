import React from 'react';
import { Link } from 'react-router-dom';
import Makes from '../makes';

class AllMakes extends React.Component {
  render() {
    const makesList = Makes.map(
    /*  (make, i) => <li><a href={ make[0] } key={ 'make_' + i }>{ make[1] }</a></li> */
      (make, i) => <li><Link to={make[0]}>{make[1]}</Link></li>
    );

    return(
      <div className="link-section--makes">
        <h2>Shop by all Makes</h2>
        <ul>
          { makesList }
        </ul>
        <br/><br/>
        {/*<a href="cars" className="link-section-all--link">Shop For All Makes and Models</a>*/}
      </div>
    );
  }
}

export default AllMakes;
