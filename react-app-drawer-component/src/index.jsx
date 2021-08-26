import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './menu';

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
          <Menu onClick={this.closeMenu} />
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
