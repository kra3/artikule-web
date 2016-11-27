import React from 'react';
import { Link } from 'react-router';

let buildArticleList = articles => Object.values(articles).map((article, i) =>
  <article key={article.pk}>
    <span>{i + 1}</span>
    <header>
      <h2>{article.title}</h2>
    </header>
    <section className="summary">{article.content.slice(0, 251)}</section>
    <Link to={'/article/' + article.pk}>read more ...</Link>
  </article>
)

const LatestArticles = (props) => {
  const {loading, articles} = props;

  if(!loading){
    return (
      <section id="latest">
        {buildArticleList(articles)}
      </section>
    )
  } else {
    return(<i className="fa fa-spinner" />)
  }
};

LatestArticles.propTypes = {
  loading : React.PropTypes.bool,
  articles : React.PropTypes.object
}

export default LatestArticles;
