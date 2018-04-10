import React from 'react';

const elements = {
  signin: {href: "https://www.carmax.com/mycarmax/sign-in", title: "Log In", text: "Sign In"},
  register: {href: "https://www.carmax.com/mycarmax/register", title: "Register", text: "Register"},
  account: {href: "https://www4.carmax.com/account/summary", title: "Make a Payment", text: "Make a Payment"},
  saved: {href: "https://www.carmax.com/mycarmax/saved-cars", title: "", text: "Saved Cars"}
};

class GlobalSubNav1 extends React.Component {
  render() {
    return(
      <ul className="global-nav--item--subnav--list global-nav--my-carmax--header--sub-navigation global-nav--item--subnav-my-carmax">
        <li className="global-nav--item--subnav--list--item global-nav--my-carmax--login-register global-nav--my-carmax--login-link">
          <a href={elements['signin']['href']} data-kmx="global-login" title={elements['signin']['title']} className="global-nav--my-carmax--link">
            {elements['signin']['text']}
          </a>
        </li>
        <li className="global-nav--item--subnav--list--item global-nav--my-carmax--login-register">
          <a href={elements['register']['href']} className="global-nav--my-carmax--link" title={elements['register']['title']}>
            {elements['register']['title']}
          </a>
        </li>
        <li className="global-nav--item--subnav--list--item global-nav--my-carmax--payment--title">
          <a href={elements['account']['href']} className="global-nav--my-carmax--link" title={elements['account']['title']}>
            {elements['account']['text']}
          </a>
        </li>
        <li className="global-nav--item--subnav--list--item global-nav--my-carmax--saved-cars">
          <a href={elements['saved']['href']} className="global-nav--my-carmax--link">
            <span>
              <svg className="global-nav--my-carmax--saved-cars--icon" id="heart-filled" role="img" viewBox="0 0 13.036 10.992">
                <path d="M11.12,0.303C9.458-0.454,7.287,0.258,6.518,1.891C5.75,0.258,3.578-0.455,1.917,0.303C0.148,1.111-0.698,3.176,0.7,5.612 c0.991,1.733,2.75,3.039,5.818,5.38c3.068-2.341,4.827-3.648,5.818-5.38C13.734,3.176,12.888,1.111,11.12,0.303z"></path>
              </svg>
            </span>
              {elements['saved']['text']}
            <span>
              <span>(</span>0<span>)</span>
            </span>
          </a>
        </li>
      </ul>
    );
  }
}

export default GlobalSubNav1;
