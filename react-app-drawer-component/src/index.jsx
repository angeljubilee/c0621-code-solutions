import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = { showMenu: false };
  }

  openMenu() {
    this.setState({ showMenu: true });
  }

  closeMenu(event) {
    if (event.target.closest('.menu') && !event.target.closest('a')) {
      return;
    }
    this.setState({ showMenu: false });
  }

  render() {
    if (this.state.showMenu) {
      return (
        <div className="gray-background" onClick={this.closeMenu}>
          <div className="menu">
            <a href="#"><h2>Menu</h2></a>
            <a href="#"><h4>About</h4></a>
            <a href="#"><h4>Get Started</h4></a>
            <a href="#"><h4>Sign In</h4></a>
          </div>
        </div>
      );
    }
    return (
      <div>
        <FontAwesomeIcon icon={faBars}
          onClick={this.openMenu} />
      </div>
    );
  }
}

ReactDOM.render(
  <AppDrawer />,
  document.getElementById('root')
);
