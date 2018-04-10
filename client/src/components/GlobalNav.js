import React from 'react';
import GlobalSubNav1 from './GlobalSubNav1';
import GlobalSubNav2 from './GlobalSubNav2';

class GlobalNav extends React.Component {
  render() {
    const elements = {
      buys: {id: "buysMenu", href: "cars", text: "Cars For Sale"},
      sells: {id: "sellsMenu", href: "sell-my-car", text: "Sell Your Car"},
      financing: {id: "financeMenu", href: "car-financing", text: "Financing"},
      research: {id: "researchMenu", href: "research", text: "Research"}
    };

    return (
      <div className="global-nav">
        <ul className="global-nav--list" data-js="jsToggle">
          <li className="global-nav--item global-nav--item-has-subnav" id={ elements['buys']['id'] }>
            <a className="global-nav--link" href={ elements['buys']['href'] }>{ elements['buys']['text'] }</a>
            <span className="global-nav--link global-nav--link-mobile">{ elements['buys']['text'] }</span>
          </li>
          <li className="global-nav--item global-nav--item-has-subnav" id={ elements['sells']['id'] }>
            <a className="global-nav--link" href={ elements['sells']['href'] }>{ elements['sells']['text'] }</a>
            <span className="global-nav--link global-nav--link-mobile">{ elements['sells']['text'] }</span>
          </li>
          <li className="global-nav--item global-nav--item-has-subnav" id={ elements['financing']['id'] }>
            <a className="global-nav--link" href={ elements['financing']['href'] }>{ elements['financing']['text'] }</a>
            <span className="global-nav--link global-nav--link-mobile">{ elements['financing']['text'] }</span>
          </li>
          <li className="global-nav--item global-nav--item-has-subnav" id={ elements['research']['id'] }>
            <a className="global-nav--link" href={ elements['research']['href'] }>{ elements['research']['text'] }</a>
            <span className="global-nav--link global-nav--link-mobile">{ elements['research']['text'] }</span>
          </li>
          <li className="global-nav--item global-nav--my-carmax">
            <div style={{ height: "100%" }}>
              <span>
                <svg className="global-nav--my-carmax--header--icon" id="my-carmax-car" role="img" viewBox="0 0 15 14">
                  <path d="M13.267,0.841C13.095,0.35,12.629,0,12.083,0H2.917C2.371,0,1.904,0.35,1.733,0.841L0,5.833V12.5c0,0.458,0.375,0.833,0.833,0.833h0.833c0.462,0,0.833-0.375,0.833-0.833v-0.834h10V12.5c0,0.458,0.375,0.833,0.834,0.833h0.833c0.462,0,0.833-0.375,0.833-0.833V5.833L13.267,0.841z M2.917,9.167c-0.691,0-1.25-0.559-1.25-1.25s0.559-1.25,1.25-1.25c0.692,0,1.25,0.558,1.25,1.25S3.608,9.167,2.917,9.167z M12.083,9.167c-0.691,0-1.25-0.559-1.25-1.25s0.559-1.25,1.25-1.25s1.25,0.558,1.25,1.25S12.775,9.167,12.083,9.167z M1.667,5l1.25-3.75h9.167L13.333,5H1.667z"></path>
                </svg>
              </span>
              <h3 className="global-nav--my-carmax--header--title">MyCarMax</h3>
              <GlobalSubNav1 />
              <div className="global-nav--my-carmax--dropdown--box global-nav--item--subnav-my-carmax">
                <div className="global-nav--my-carmax--dropdown">
                  <GlobalSubNav2 />
                  <div className="global-nav--my-carmax--dropdown--btn" data-js="jsDropDown"></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default GlobalNav;
