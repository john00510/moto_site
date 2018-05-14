import React from 'react';
import MakeModelFlyout from './makeModelFlyout';
import TypeFlyout from './typeFlyout';
import PriceFlyout from './priceFlyout'

class SearchForm extends React.Component {
  render() {
    return(
      <div className="vehicle-search--wrap">
        <form className="search-box" action="/search" method="get">
          <div>
            <div class="search-box--wrap">
                <input className="search-box--input" id="FreeText" name="FreeText" placeholder="Search All Cars By Make, Model, or Keyword" type="text" value="" />
                <button className="search-box--wrap--btn" type="submit">
                    <svg className="search-box--wrap--btn--search" role="img" viewBox="0 0 29.013 29.013">
                        <path d="M28.482 25.917l-8.742-8.74a10.8 10.8 0 0 0 2.02-6.297C21.76 4.87 16.889 0 10.88 0S0 4.87 0 10.88c0 6.008 4.871 10.881 10.88 10.881 2.349 0 4.521-.754 6.297-2.02l8.741 8.74a1.811 1.811 0 0 0 2.564 0 1.815 1.815 0 0 0 0-2.564zM17.107 14.543a7.275 7.275 0 0 1-2.564 2.565c-1.078.635-2.32 1.024-3.663 1.024a7.253 7.253 0 1 1 7.253-7.254c-.001 1.345-.391 2.586-1.026 3.665z"></path>
                    </svg>
                </button>
                <span className="search-box--search-button"></span>
            </div>
          </div>
        </form>
    </div>
    );
  }
}

class Layout extends React.Component {
  render() {
    let flyout;

    if (this.props.el2 == 'Make/Model') {
      flyout = <MakeModelFlyout />;
    }
    if (this.props.el2 == 'Type') {
      flyout = <TypeFlyout />;
    }
    if (this.props.el2 == 'Price') {
      flyout = <PriceFlyout />;
    }

    return (
          <div className={this.props.el1} onClick={this.props.onClick}>
            <div className="advanced-box--label">
              {this.props.el2}
              <svg id="" role="img" viewBox="0 0 50 29.011">
                <path d="M49.498 5.284L26.152 28.511c-.303.299-.75.5-1.154.5-.4 0-.848-.201-1.15-.5L.502 5.284C.202 4.986 0 4.535 0 4.138s.202-.849.502-1.146L3.006.5c.303-.299.703-.5 1.155-.5.399 0 .849.201 1.15.499l19.687 19.588L44.688.499C44.99.201 45.439 0 45.844 0c.399 0 .848.201 1.15.499l2.504 2.492c.303.298.502.749.502 1.147s-.199.848-.502 1.146z"></path>
              </svg>
            </div>
            <div className={this.props.el3}>{flyout}</div>
          </div>
    );
  }
}

class AdvancedSearchFlyouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make1: "advanced-box make-model",
      make2: "Make/Model",
      make3: "advanced-box--flyout hidden",
      type1: "advanced-box type-search",
      type2: "Type",
      type3: "advanced-box--flyout hidden",
      price1: "advanced-box price-search",
      price2: "Price",
      price3: "advanced-box--flyout hidden"
    };
    this.handleMakeClick = this.handleMakeClick.bind(this);
    this.handleTypeClick = this.handleTypeClick.bind(this);
    this.handlePriceClick = this.handlePriceClick.bind(this);
  }

  handleMakeClick() {
    let el1, el2;

    if (this.state.make1 == "advanced-box make-model") {
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
    return (
      <div id="AdvancedSearchFlyouts">
        <div id="vehicle-search-dropdown-bar" className="vehicle-search--wrap">
            <div>
              <div className="advanced-box separator">
                <div className="advanced-box--label">or</div>
              </div>
            </div>
            <Layout el1={this.state.make1} el2={this.state.make2} el3={this.state.make3} onClick={this.handleMakeClick} />
            <Layout el1={this.state.type1} el2={this.state.type2} el3={this.state.type3} onClick={this.handleTypeClick} />
            <Layout el1={this.state.price1} el2={this.state.price2} el3={this.state.price3} onClick={this.handlePriceClick} />

        </div>
      </div>
    );
  }
}

class VehicleSearch extends React.Component {
  render() {
    return(
      <div className="vehicle-search" id="SearchVehiclesBox">
        <div className="content">
            <SearchForm />
            <AdvancedSearchFlyouts />
        </div>
      </div>
    );
  }
}

export default VehicleSearch;
