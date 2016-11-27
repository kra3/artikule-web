import React from 'react';
import { Link } from 'react-router';

let newLineToParagraph = text => text?
  text.replace('\r\n', '\n') .split('\n').map((block, i) => <p key={i}>{block}</p>):
  []

const Post = (props) => {
  const {loading, article} = props;
  const paras = newLineToParagraph(article.content);

  if(!loading){
    return (
      <section id="post">
        <article>
          <header>
            <h2>{article.title}</h2>
            <div>
              <span className="publsished_on">{article.publication_date}</span> | &nbsp;
              <span className="author">{article.author}</span>
            </div>
          </header>
            <img src={article.hero_image} className="pure-img" />
            <section>
              {paras.slice(0, 2)}
              {article.opt_image && <img src={article.opt_image} className="pure-img" />}
              {paras.slice(2)}
            </section>
        </article>
      </section>
    )
  } else {
    return(<i className="fa fa-spinner" />)
  }
};

Post.propTypes = {
  loading : React.PropTypes.bool,
  article : React.PropTypes.object
}

export default Post;
