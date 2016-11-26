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
      loading: false,
      featured : {},
      articles: [],
      suggestions : [],
      page_number: 1,
      total_pages: 1
    };
  }

  componentDidMount() {
    this.unsubscribe = ArticleStore.listen(this.onStatusChange.bind(this));
    ArticleActions.loadItems();
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
        <Featured />
        <LatestArticles />
        <Suggestions />
      </div>
    );
  }
}

export default Home;
