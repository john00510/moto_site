import React from 'react';
import PageHeaderLogo from '../svg/logos';
import GlobalHeader from '../components/header_components/GlobalHeader';
import GlobalUtilityHeader from '../components/header_components/GlobalUtilityHeader';

class Header extends React.Component {
  render() {
    return(
      <header className={this.props.headerSticky} dataJs="StickyNav">
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
