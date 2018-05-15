import React from 'react';
import AdvancedSearchLayouts from './advanced_search_layouts';
import {FetchData} from '../api';

class AdvancedSearchLayoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make1: "advanced-box make-model",
      make2: "Make/Model",
      make3: "advanced-box--flyout hidden",
      makes: "",
      type1: "advanced-box type-search",
      type2: "Type",
      type3: "advanced-box--flyout hidden",
      types: "",
      price1: "advanced-box price-search",
      price2: "Price",
      price3: "advanced-box--flyout hidden",
      prices: ""
    };
    this.handleMakeModelClick = this.handleMakeModelClick.bind(this);
    this.handleTypeClick = this.handleTypeClick.bind(this);
    this.handlePriceClick = this.handlePriceClick.bind(this);
  }

  handleMakeModelClick() {
    let el1, el2;

    if (this.state.make1 == "advanced-box make-model") {
      let data = FetchData("model");
      this.setState({ makes: data });

      el1 = "advanced-box make-model selected";
      el2 = "advanced-box--flyout";
    } else {
      el1 = "advanced-box make-model";
      el2 = "advanced-box--flyout hidden";
    }

    this.setState({ make1: el1 });
    this.setState({ make3: el2 });
    this.setState({ type1: "advanced-box type-search"});
    this.setState({ type3: "advanced-box--flyout hidden"});
    this.setState({ price1: "advanced-box price-search"});
    this.setState({ price3: "advanced-box--flyout hidden"});
  }

  handleTypeClick() {
    let el1, el2;

    if (this.state.type1 == "advanced-box type-search") {
      let data = FetchData("type");
      this.setState({ types: data });

      el1 = "advanced-box type-search selected";
      el2 = "advanced-box--flyout";
    } else {
      el1 = "advanced-box type-search";
      el2 = "advanced-box--flyout hidden";
    }

    this.setState({ type1: el1 });
    this.setState({ type3: el2 });
    this.setState({ make1: "advanced-box make-model"});
    this.setState({ make3: "advanced-box--flyout hidden"});
    this.setState({ price1: "advanced-box price-search"});
    this.setState({ price3: "advanced-box--flyout hidden"});
  }

  handlePriceClick() {
    let el1, el2;

    if (this.state.price1 == "advanced-box price-search") {
      let data = FetchData("price");
      this.setState({ prices: data });

      el1 = "advanced-box price-search selected";
      el2 = "advanced-box--flyout";
    } else {
      el1 = "advanced-box price-search";
      el2 = "advanced-box--flyout hidden";
    }

    this.setState({ price1: el1 });
    this.setState({ price3: el2 });
    this.setState({ make1: "advanced-box make-model"});
    this.setState({ make3: "advanced-box--flyout hidden"});
    this.setState({ type1: "advanced-box type-search"});
    this.setState({ type3: "advanced-box--flyout hidden"});
  }

  render() {
    return <AdvancedSearchLayouts
      make1={this.state.make1} make2={this.state.make2} make3={this.state.make3} handleMakeModelClick={this.handleMakeModelClick}
      type1={this.state.type1} type2={this.state.type2} type3={this.state.type3} handleTypeClick={this.handleTypeClick}
      price1={this.state.price1} price2={this.state.price2} price3={this.state.price3} handlePriceClick={this.handlePriceClick}
    />;
  }
}

export default AdvancedSearchLayoutContainer;
