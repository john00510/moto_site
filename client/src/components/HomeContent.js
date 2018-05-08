import React from 'react';
import AllMakes from './content_components/AllMakes';
import AllTypes from './content_components/AllTypes';
import HeroPromo from './content_components/HeroPromo';
import VehicleSearch from './content_components/VehicleSearch';
import RecomendedVehicles from './content_components/RecomendedVehicles';
import RecentlyViewedVehicles from './content_components/RecentlyViewedVehicles';

class HomeContent extends React.Component {
  render() {
    const style = {marginTop: this.props.marginTop};

    return(
      <div className="container body-content" style={style}>
        <HeroPromo />
        <VehicleSearch />
        {/*<RecentlyViewedVehicles />*/}
        {/*<RecomendedVehicles />*/}
        <div className="content">
          <div className="homepage-links">
            <div id="seeAllSection" className="link-section-all">
              <AllMakes />
              <AllTypes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContent;
