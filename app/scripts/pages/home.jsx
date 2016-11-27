import React from 'react';
import ItemList from '../components/itemList.jsx';
import Featured from '../components/featured.jsx';
import LatestArticles from '../components/articles.jsx';
import Suggestions from '../components/suggestions.jsx';
import ArticleStore from '../stores/articleStore';
import ArticleActions from '../actions/articleActions';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loadingFeatured: false,
      loadingSuggestions: false,
      loadingArticles: false,
      featured : {},
      articles: {},
      suggestions : [],
      page_number: 1,
      total_pages: 1
    };
  }

  componentDidMount() {
    this.unsubscribe = ArticleStore.listen(this.onStatusChange.bind(this));
    ArticleActions.loadFeatured();
    ArticleActions.loadSuggestions();
    ArticleActions.loadArticles();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state){
    this.setState(state);
  }

  render() {
    return (
      <div>
        <Featured
          loading={this.state.loadingFeatured}
          article={this.state.featured} />
        <LatestArticles
          loading={this.state.loadingArticles}
          articles={this.state.articles} />
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

export default Home;
