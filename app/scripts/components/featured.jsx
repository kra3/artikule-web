import React from 'react';
import { Link } from 'react-router';

let newLineToParagraph = text => text?
  text.replace('\r\n', '\n') .split('\n').map((block, i) => <p key={i}>{block}</p>):
  []

const Featured = (props) => {
  const {loading, article} = props;

  if(!loading){
    return (
      <section id="featured">
        <article>
          <header>
            <h2>{article.title}</h2>
            <div>
              <span className="publsished_on">{article.publication_date}</span> | &nbsp;
              <span className="author">{article.author}</span>
            </div>
          </header>
            <img src={article.hero_image} className="pure-img" />
            <section className="summary">
              {newLineToParagraph(article.content).slice(0, 3)}
            </section>
            <Link to={'/article/' + article.pk}>read more ...</Link>
        </article>
      </section>
    )
  } else {
    return(<i className="fa fa-spinner" />)
  }
};

Featured.propTypes = {
  loading : React.PropTypes.bool,
  article : React.PropTypes.object
}

export default Featured;
