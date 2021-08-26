import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './menu';

function Header() {
  return (
    <section className="header">
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime optio, quas adipisci veritatis natus tempora? Corrupti soluta incidunt sit ut corporis iusto odit alias, impedit minus est. Molestias, illo quam.</p>
    </section>
  );
}

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
        <div className="container gray-background" onClick={this.closeMenu}>
          <Menu />
          <Header />
        </div>
      );
    }
    return (
      <div className="container">
        <FontAwesomeIcon className="fixed" icon={faBars}
          onClick={this.openMenu} />
        <Header />
      </div>
    );
  }
}

ReactDOM.render(
  <AppDrawer />,
  document.getElementById('root')
);
