import React from 'react';
import Suggestions from '../components/suggestions.jsx';
import Post from '../components/article.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';

class Article extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false
    };
  }

  componentDidMount() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange.bind(this));
    ItemActions.loadItems();
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
        <Post />
        <Suggestions />
      </div>
    );
  }
}

export default Article;
