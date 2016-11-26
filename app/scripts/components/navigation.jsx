import React from 'react';
import { Link } from 'react-router';

let buildNavItems = (times) => [...Array(times)].map((num, i) =>
  <li className="pure-menu-item" key={i+1}>
    <Link className="pure-menu-link" to="article/1">
      <img src="images/nav.png" className="pure-img" />
      <span>Nav {i + 1}</span>
    </Link>
  </li>
)

const Navigation = (props) => {
  return (
    <div className="sidebar pure-u-1 pure-u-md-2-24">
      <div className="header">
        <h1 hidden>Artikule</h1>
        <Link to="home">
          <img src="images/logo.png" className="pure-img"/>
        </Link>

        <div className="pure-g">
          <div className="pure-button pure-u-1-2">
            <i className="fa fa-bars"></i>
          </div>
          <div className="pure-button pure-u-1-2">
            <i className="fa fa-search"></i>
          </div>
        </div>

        <nav className="pure-menu">
          <ul className="pure-menu-list">
            {buildNavItems(4)}
          </ul>
        </nav>
      </div>
    </div>
  )
};

export default Navigation;
