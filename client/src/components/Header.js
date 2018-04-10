import React from 'react';
import PageHeaderLogo from '../svg/logos';
import GlobalHeader from '../components/GlobalHeader';
import GlobalUtilityHeader from '../components/GlobalUtilityHeader';

class Header extends React.Component {
  render() {
    return(
      <header className="page-header" data-js="StickyNav" data-kmx="global-header">
        <div className="content">
          <PageHeaderLogo />
          <GlobalUtilityHeader />
          <GlobalHeader />
        </div>
      </header>
    );
  }
}

export default Header;
