import React from 'react';
import Suggestions from '../components/suggestions.jsx';
import Post from '../components/article.jsx';
import ArticleStore from '../stores/articleStore';
import ArticleActions from '../actions/articleActions';

class Article extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      article: {},
      loadingSuggestions: false,
      suggestions : [],
      page_number: 1,
      total_pages: 1
    };
  }

  componentDidMount() {
    this.unsubscribe = ArticleStore.listen(this.onStatusChange.bind(this));
    ArticleActions.loadSuggestions();
    ArticleActions.loadArticle(this.props.params.articleID);
  }

  componentWillReceiveProps(nextProps) {
    const {params} = nextProps;
    if(params.articleID !== this.props.params.articleID){
      ArticleActions.loadArticle(this.props.params.articleID);
      ArticleActions.loadSuggestions();
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <Post article={this.state.article} />
        <Suggestions
          loading={this.state.loadingSuggestions}
          suggestions={this.state.suggestions}
          page_number={this.state.page_number}
          total_pages={this.state.total_pages}
          onPrev={(page_number) => ArticleActions.loadSuggestions(page_number - 1)}
          onNext={(page_number) => ArticleActions.loadSuggestions(page_number + 1)} />
      </div>
    );
  }
}

export default Article;
