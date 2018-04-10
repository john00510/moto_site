import React from 'react';

const elements = {
  search: {href: 'https://www.carmax.com/mycarmax/saved-searches', id: 'search', name: 'Saved Searches', value: '(0)'},
  appointments: {href: 'https://www.carmax.com/mycarmax/appointments', id: 'date', name: 'Appointments', value: '(0)'},
  profile: {href: 'https://www.carmax.com/mycarmax/profile', id: 'profile', name: 'Profile'}
};

class GlobalSubNav2 extends React.Component {
  render() {
    return(
      <ul className="global-nav--item--subnav--list global-nav--my-carmax--dropdown--nav global-nav--my-carmax--header--sub-navigation">
        <li className="global-nav--item--subnav--list--item global-nav--my-carmax--dropdown--nav--link">
          <a href={elements['search']['href']} className="global-nav--my-carmax--link">
            <span>
              <svg className="global-nav--my-carmax--saved-searches--icon" role="img" id={elements['search']['id']} viewBox="0 0 29.013 29.013">
                <path d="M28.482,25.917l-8.742-8.74c1.268-1.777,2.02-3.947,2.02-6.297C21.76,4.87,16.889,0,10.88,0S0,4.87,0,10.88
        c0,6.008,4.871,10.881,10.88,10.881c2.349,0,4.521-0.754,6.297-2.02l8.741,8.74c0.708,0.709,1.855,0.709,2.564,0
        C29.189,27.774,29.189,26.626,28.482,25.917z M17.107,14.543c-0.627,1.06-1.504,1.938-2.564,2.565
        c-1.078,0.635-2.32,1.024-3.663,1.024c-4.006,0-7.253-3.248-7.253-7.254s3.247-7.253,7.253-7.253s7.253,3.247,7.253,7.253
        C18.132,12.223,17.742,13.464,17.107,14.543z">
                </path>
              </svg>
            </span>
              {elements['search']['name']}
            <span>{elements['search']['value']}</span>
          </a>
        </li>
        <li className="global-nav--item--subnav--list--item global-nav--my-carmax--dropdown--nav--link">
          <a href={elements['appointments']['href']} className="global-nav--my-carmax--link">
            <span>
              <svg className="global-nav--my-carmax--appointments--icon" id={elements['appointments']['id']} role="img" viewBox="0 0 46.018 50">
                <path d="M33.8407494,25.175644 L18.969555,40.0468384 L11.0070258,32.0843091 L13.7002342,29.3911007 L18.969555,34.6604215 L31.147541,22.4824356 L33.8407494,25.175644 Z M39.9297424,5.03512881 C41.3349016,5.03512881 42.5253659,5.523024 43.501171,6.49882904 C44.476976,7.47463407 44.9648712,8.66509836 44.9648712,10.0702576 L44.9648712,44.9648712 C44.9648712,46.3700304 44.476976,47.5604947 43.501171,48.5362998 C42.5253659,49.5121048 41.3349016,50 39.9297424,50 L5.03512881,50 C3.62996956,50 2.43950527,49.5121048 1.46370023,48.5362998 C0.487895199,47.5604947 0,46.3700304 0,44.9648712 L0,10.0702576 C0,8.66509836 0.487895199,7.47463407 1.46370023,6.49882904 C2.43950527,5.523024 3.62996956,5.03512881 5.03512881,5.03512881 L7.4941452,5.03512881 L7.4941452,0 L12.529274,0 L12.529274,5.03512881 L32.4355972,5.03512881 L32.4355972,0 L37.470726,0 L37.470726,5.03512881 L39.9297424,5.03512881 Z M39.9297424,44.9648712 L39.9297424,17.5644028 L5.03512881,17.5644028 L5.03512881,44.9648712 L39.9297424,44.9648712 Z">
                </path>
              </svg>
            </span>
              {elements['appointments']['name']}
            <span>{elements['appointments']['value']}</span>
          </a>
          </li>
          <li className="global-nav--item--subnav--list--item global-nav--my-carmax--dropdown--nav--link">
            <a href={elements['profile']['href']} className="global-nav--my-carmax--link">
              <span>
                <svg className="global-nav--my-carmax--profile--icon" role="img" id={elements['profile']['id']} viewBox="0 0 23 30">
                  <path d="M11.5,14.26c3.796,0,6.885-3.199,6.885-7.13C18.385,3.199,15.296,0,11.5,0C7.703,0,4.615,3.199,4.615,7.13
        C4.615,11.062,7.703,14.26,11.5,14.26z M11.5,2.736c2.34,0,4.243,1.971,4.243,4.394s-1.903,4.394-4.243,4.394
        S7.257,9.552,7.257,7.13C7.257,4.707,9.16,2.736,11.5,2.736z M11.5,15.004C4.982,15.004,0,21.29,0,29.312V30h23v-0.688
        C23,21.29,18.018,15.004,11.5,15.004z M3.058,27.721C3.283,22.038,6.91,17.665,11.5,17.665s8.217,4.373,8.441,10.056H3.058z">
                  </path>
                </svg>
              </span>
                {elements['profile']['name']}
            </a>
          </li>
        <span></span>
      </ul>
    );
  }
}

export default GlobalSubNav2;
