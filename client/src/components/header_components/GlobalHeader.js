import React from 'react';
import MobileNavToggle from './MobileNavToggle';
import MobileNav from './MobileNav';
import GlobalNav from './GlobalNav';

class GlobalHeader extends React.Component {
  render() {
    return (
      <nav>
        <div>
          <MobileNavToggle />
          <MobileNav />
          <GlobalNav mainLink={this.props.mainLink}/>
        </div>
      </nav>
    );
  }
}

export default GlobalHeader;
