import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';
import '../css/style.css';



export class NavMenu extends Component {
  static displayName = NavMenu.name;

  
  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header className="header">
        <p><a name="top"/></p>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm mb-3" light>
          <Container>
            <div className="hInner">
            <a href="https://vk.com/id161099452" target="_blank" rel="noopener noreferrer">
                <img className="svinimg" src="https://i.imgur.com/I4Y6UUP.jpg"/>
            </a>
            <NavbarBrand className="navbarb text-white">Чесноков Артем Сергеевич</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navigation">

                <NavItem className='navigation navContent'>
                  <NavLink tag={Link} className="text-white" to="/">Главная</NavLink>
                </NavItem>

                <NavItem className='navigation navContent'>
                  <NavLink tag={Link} className="text-white" to="/Hobbie">Хобби</NavLink>
                </NavItem>

                <NavItem className='navigation navContent'>
                  <NavLink tag={Link} className="text-white" to="/Contacts">Контакты</NavLink>
                </NavItem>
                <a className='navigation anavContent' href="https://goo.su/SXruHoA" target="_blank" rel="noopener noreferrer">
                  Резюме
                </a>
              </ul>
            </Collapse>
            </div>
          </Container>
        </Navbar>
      </header>
    );
  }
}
