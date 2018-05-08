import React from 'react';

const stores = [
  ['Store Name', 'Store Phone'],
  ['Lynnwood, WA', '(425) 412-1290'],
];

class GlobalUtilityHeader extends React.Component {
  render() {
    return(
      <nav className="page-header--utility-nav">
        <ul className = "page-header--utility-nav--list" >
          <li className="sticky--search-btn">
            <div id="NavFlyout">
              <div>
                <a className="page-header--utility-nav--item btn--pill alt">
                  <svg className="btn--pill--icon" role="img" id="search" viewBox="0 0 29.013 29.013">
                    <path d="M28.482,25.917l-8.742-8.74c1.268-1.777,2.02-3.947,2.02-6.297C21.76,4.87,16.889,0,10.88,0S0,4.87,0,10.88
                      c0,6.008,4.871,10.881,10.88,10.881c2.349,0,4.521-0.754,6.297-2.02l8.741,8.74c0.708,0.709,1.855,0.709,2.564,0
                      C29.189,27.774,29.189,26.626,28.482,25.917z M17.107,14.543c-0.627,1.06-1.504,1.938-2.564,2.565
                      c-1.078,0.635-2.32,1.024-3.663,1.024c-4.006,0-7.253-3.248-7.253-7.254s3.247-7.253,7.253-7.253s7.253,3.247,7.253,7.253
                      C18.132,12.223,17.742,13.464,17.107,14.543z">
                    </path>
                  </svg>
                  <span className="btn--pill--text">Search</span>
                </a>
                <div className="flyout ">
                  <form className="search-box">
                    <div>
                      <div className="search-box--wrap">
                        <input autocomplete="off" name="FreeText" className="search-box--input" placeholder="Enter your Search" data-kmx="free-text-search-input" type="text" />
                        <button type="submit" className="search-box--wrap--btn">Go</button>
                        <nav></nav>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              </div>
          </li>
          <li className="page-header--utility-nav--item">
            <div className="my-store--container">
              <div className="my-store--store-label">Your Store</div>
              <a className="my-store--store-name">
                <svg className="btn--pill--icon" role="img" id="" viewBox="0 0 30.188 43.109">
                  <path d="M15.093 0c2.086 0 4.047.396 5.881 1.187s3.424 1.876 4.77 3.256C27.125 5.789 28.209 7.38 29 9.214s1.188 3.794 1.188 5.88c0 5.654-5.031 14.993-15.095 28.016C5.031 30.086 0 20.748 0 15.094c0-2.086.395-4.046 1.187-5.88a14.724 14.724 0 0 1 3.256-4.771c1.345-1.379 2.936-2.465 4.77-3.256C11.046.396 13.006 0 15.093 0zm0 20.495c.74 0 1.439-.143 2.096-.429a5.001 5.001 0 0 0 1.689-1.186c.506-.471.9-1.035 1.188-1.691a5.2 5.2 0 0 0 .428-2.095c0-.74-.143-1.438-.428-2.095a5.049 5.049 0 0 0-1.188-1.691 5.042 5.042 0 0 0-1.689-1.187 5.204 5.204 0 0 0-2.096-.428c-.741 0-1.438.144-2.095.429a5.05 5.05 0 0 0-1.691 1.187A5.046 5.046 0 0 0 10.12 13a5.187 5.187 0 0 0-.429 2.095c0 .741.143 1.439.429 2.095.286.656.682 1.22 1.187 1.691a5.02 5.02 0 0 0 1.691 1.186 5.186 5.186 0 0 0 2.095.428z"></path>
                </svg>
                <span className="btn--pill--text">{stores[0][0]}</span>
              </a>
              <span className="my-store--store-phone btn--pill alt unclickable">
                <span>
                  <svg className="btn--pill--icon" role="img" id="phone" viewBox="0 0 14 14">
                    <path d="M2.417,5.197c0.96,1.887,2.503,3.429,4.393,4.39l1.467-1.471C8.46,7.933,8.724,7.881,8.953,7.953
        c0.748,0.246,1.551,0.38,2.38,0.38C11.705,8.333,12,8.631,12,9v2.333C12,11.703,11.705,12,11.333,12C5.074,12,0,6.927,0,0.667
        C0,0.297,0.3,0,0.667,0H3c0.37,0,0.667,0.297,0.667,0.667c0,0.829,0.133,1.634,0.379,2.38C4.12,3.276,4.067,3.54,3.884,3.723
        L2.417,5.197z"></path>
                  </svg>
                </span>
                <span className="btn--pill--text">{stores[0][1]}</span>
              </span>
              <div className="my-store-flyout">
                <div>
                  <div className="my-store-flyout--section">
                    <h4 className="my-store-flyout--section-title">Your Store</h4>
                    <a className="my-store-flyout--section-action my-store-flyout--store-name" href="https://www.carmax.com/stores/7250">
                      <h4 className="my-store-flyout--store-name">Lynnwood</h4>
                    </a>
                    <div className="my-store-flyout--section-content">
                      <span>21317 Highway 99
                        <br />Lynnwood,


                          WA



                          98036
                        <br />
                      </span>
                      <span>(425) 412-1290</span>
                    </div>
                    <div className="my-store-flyout--section-content"></div>
                    <h4 className="my-store-flyout--section-title">Showroom hours</h4>
                    <div className="my-store-flyout--section-content">
                      <span className="my-store-flyout--section-content-store-hours">Mon-Fri 10-9</span>
                      <span className="my-store-flyout--section-content-store-hours">Sat 9-9</span>
                      <span className="my-store-flyout--section-content-store-hours">Sun 11-7</span>
                    </div>
                    <h4 className="my-store-flyout--section-title">Service center hours</h4>
                    <div className="my-store-flyout--section-content" data-kmx="my-store-flyout-service-center-hours">
                      <span className="my-store-flyout--section-content-store-hours">Mon-Fri 7:30-6</span>
                    </div>
                  </div>
                  <span className="my-store-flyout--section my-store-flyout--section-action my-store-flyout--mobile-store-phone unclickable" data-kmx="my-store-flyout-store-phone">
                    <svg className="btn--pill--icon" role="img" id="" viewBox="0 0 14 14">
                      <path d="M2.417 5.197a10.043 10.043 0 0 0 4.393 4.39l1.467-1.471a.671.671 0 0 1 .676-.163 7.62 7.62 0 0 0 2.38.38c.372 0 .667.298.667.667v2.333c0 .37-.295.667-.667.667C5.074 12 0 6.927 0 .667 0 .297.3 0 .667 0H3c.37 0 .667.297.667.667 0 .829.133 1.634.379 2.38a.667.667 0 0 1-.162.676L2.417 5.197z"></path>
                    </svg>Call Store
                  </span>
                  <a className="my-store-flyout--section my-store-flyout--section-action" target="_blank" href="https://www.google.com/maps/dir/?api=1&amp;origin=My+Location&amp;destination=CarMax%20Lynnwood%2C21317%20Highway%2099%2CLynnwood%2CWA%2098036">
                    <svg className="btn--pill--icon" role="img" id="" viewBox="0 0 98.702 98.704">
                      <path d="M96.004 0c.342 0 .686.064 1.029.192a2.525 2.525 0 0 1 1.476 1.478c.129.343.191.687.191 1.028v82.896c0 .688-.191 1.266-.578 1.734-.386.473-.834.793-1.35.965l-30.973 10.41-32.9-11.566-29.3 11.44c-.173.086-.321.127-.45.127h-.45a2.91 2.91 0 0 1-1.028-.191 2.502 2.502 0 0 1-1.478-1.478A2.911 2.911 0 0 1 0 96.004V13.109c0-.685.193-1.263.578-1.735.386-.47.878-.791 1.478-.964L32.901 0l32.9 11.567L95.106.128c.17-.084.32-.128.449-.128h.449zM65.803 87.78V22.491L32.901 10.924v65.29L65.803 87.78z"></path>
                    </svg>Get Directions
                  </a>
                </div>
                <div className="my-store-flyout--search">
                  <h4 className="my-store-flyout--section-title">Change Your Store</h4>
                  <form>
                    <input autocomplete="off" className="lead-form--field" placeholder="Enter ZIP or State" type="text" />
                    <button className="my-store-flyout--search--action">
                      <svg className="btn--pill--icon" role="img" id="" viewBox="0 0 29.013 29.013">
                        <path d="M28.482 25.917l-8.742-8.74a10.8 10.8 0 0 0 2.02-6.297C21.76 4.87 16.889 0 10.88 0S0 4.87 0 10.88c0 6.008 4.871 10.881 10.88 10.881 2.349 0 4.521-.754 6.297-2.02l8.741 8.74a1.811 1.811 0 0 0 2.564 0 1.815 1.815 0 0 0 0-2.564zM17.107 14.543a7.275 7.275 0 0 1-2.564 2.565c-1.078.635-2.32 1.024-3.663 1.024a7.253 7.253 0 1 1 7.253-7.254c-.001 1.345-.391 2.586-1.026 3.665z"></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default GlobalUtilityHeader;
