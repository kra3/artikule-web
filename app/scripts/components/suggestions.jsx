import React from 'react';
import { Link } from 'react-router';

const Suggestions = (props) => {
  const {loading, suggestions, page_number, total_pages} = props;

  return (
    <section id="suggestion">
      <header>
        <hr />
        <div>
          <h4>What to read next</h4>
          <div>
            <button
              className="pure-button"
              onClick={() => props.onPrev(props.page_number)}>
                <i className="fa fa-angle-left"></i>
            </button> &nbsp;
            <button
              className="pure-button"
              onClick={() => props.onNext(props.page_number)}>
                <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
        <hr />
      </header>
      <nav className="pure-menu-horizontal">
        <ul className="pure-menu-list">
          {suggestions.map((article, i) =>
            <li className="pure-menu-item" key={i+1}>
              <Link className="pure-menu-link" to={'/article/' + article.pk}>
                <img src={article.hero_image} className="pure-img nav-img" />
                <span className="nav-title">{article.title.slice(0, 30) + '...'}</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </section>
  )
};

Suggestions.propTypes = {
  loading : React.PropTypes.bool,
  suggestions : React.PropTypes.array,
  page_number : React.PropTypes.number,
  total_pages : React.PropTypes.number,
  onPrev : React.PropTypes.func,
  onNext : React.PropTypes.func,
}

export default Suggestions;
