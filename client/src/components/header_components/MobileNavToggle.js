import React from 'react';

class MobileNavToggle extends React.Component {
  render() {
    return(
      <div className="page-header--mobile-nav-toggle toggle">
        <div className="hamburger">
          <svg role="img" id="" viewBox="0 0 20 14">
            <path d="M0 0h20v2H0zM0 6h20v2H0zM0 12h20v2H0z"></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default MobileNavToggle;
