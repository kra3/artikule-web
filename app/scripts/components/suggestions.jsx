import React from 'react';
import { Link } from 'react-router';

const Suggestions = (props) => {
  return (
    <section id="suggestion">
      <header>
        <hr />
        <div>
          <h4>What to read next</h4>
          <div>
            <div className="pure-button"><i className="fa fa-angle-left"></i></div> &nbsp;
            <div className="pure-button"><i className="fa fa-angle-right"></i></div>
          </div>
        </div>
        <hr />
      </header>
      <nav className="pure-menu-horizontal">
        <ul className="pure-menu-list">
          {[...Array(4)].map((num, i) =>
            <li className="pure-menu-item" key={i+1}>
              <Link className="pure-menu-link" to="home">
                <img src="images/nav.png" className="pure-img" />
                <span>Related title {i + 1}</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </section>
  )
};

export default Suggestions;
