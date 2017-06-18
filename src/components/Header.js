import React from 'react';
import VerticalMenu from '../containers/VerticalMenu';
import Logo from '../icon-components/Logo';
import Search from '../icon-components/Search';
import Pencil from '../icon-components/Pencil';
import Hamburger from '../icon-components/Hamburger';
import DropDownArrow from '../icon-components/DropdownArrow';
import '../css/Header.css';

const Header = () => (
  <header className="Header noPrint">
    <div className="Header__top header">
      <div className="expanded row">
        <div className="columns">
          <ul className="menu">
            <li className="Header__top-logo">
              <a href="/">
                <span
                  className="Icon steem Icon_2x"
                  style={{ display: 'inline-block', width: '2rem', height: '2rem' }}
                >
                  <Logo />
                </span>
              </a>
            </li>

            <li className="Header__top-steemit show-for-medium noPrint">
              <a href="/">steemit<span className="beta">beta</span></a>
            </li>

            <li className="DropdownMenu Header__sort-order-menu show-for-small-only">
              <a href="/">
                <span>
                  trending
                  <span
                    className="Icon dropdown-arrow"
                    style={{ display: 'inline-block', width: '1.12rem', height: '1.12rem' }}
                  >
                    <DropDownArrow />
                  </span>
                </span>
              </a>
              <VerticalMenu />
            </li>
          </ul>
        </div>

        <div className="columns shrink">
          <ul className="menu sub-menu">
            <li className="Header__search">
              <a href="/static/search.html" title="Search">
                <span
                  className="Icon search"
                  style={{ display: 'inline-block', width: '1.12rem', height: '1.12rem' }}
                >
                  <Search />
                </span>
              </a>
            </li>

            <li className="show-for-medium">
              <a href="/pick_account">Sign Up</a>
            </li>

            <li className="show-for-medium">
              <a href="/login.html">Login</a>
            </li>

            <li className="show-for-medium submit-story">
              <a href="/submit.html">Submit a Story</a>
            </li>

            <li className="show-for-small-only">
              <a href="/submit.html">
                <span
                  className="Icon pencil2"
                  style={{ display: 'inline-block', width: '1.12rem', height: '1.12rem' }}
                >
                  <Pencil />
                </span>
              </a>
            </li>

            <li className="toggle-menu Header__hamburger">
              <a href="/"><Hamburger /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="Header__sub-nav expanded show-for-medium row">
      <div className="columns">
        <ul className="HorizontalMenu menu">
          <li className="">
            <a href="/created">new</a>
          </li>

          <li className="">
            <a href="/hot">hot</a>
          </li>

          <li className="active">
            <b><a href="/trending">trending</a></b>
          </li>

          <li className="">
            <a href="/promoted">promoted</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);
export default Header;
