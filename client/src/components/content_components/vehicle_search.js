import React from 'react';
import SearchForm from './search_form';
import AdvancedSearchLayoutContainer from './advanced_search_layout_container';

class VehicleSearch extends React.Component {
  render() {
    return(
      <div className="vehicle-search" id="SearchVehiclesBox">
        <div className="content">
            <SearchForm />
            <AdvancedSearchLayoutContainer />
        </div>
      </div>
    );
  }
}

export default VehicleSearch;
