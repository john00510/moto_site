import React from 'react';
import MakeModelLayout from './make_model_layout';
import TypeLayout from './type_layout';
import PriceLayout from './price_layout';

const AdvancedSearchLayouts = (props) => (
  <div id="AdvancedSearchFlyouts">
    <div id="vehicle-search-dropdown-bar" className="vehicle-search--wrap">
        <div>
          <div className="advanced-box separator">
            <div className="advanced-box--label">or</div>
          </div>
        </div>
        <MakeModelLayout el1={props.make1} el2={props.make2} el3={props.make3} onClick={props.handleMakeModelClick} />
        <TypeLayout el1={props.type1} el2={props.type2} el3={props.type3} onClick={props.handleTypeClick} />
        <PriceLayout el1={props.price1} el2={props.price2} el3={props.price3} onClick={props.handlePriceClick} />

    </div>
  </div>
);

export default AdvancedSearchLayouts;
