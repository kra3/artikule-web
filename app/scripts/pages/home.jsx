import React from 'react';
import ItemList from '../components/itemList.jsx';
import Featured from '../components/featured.jsx';
import LatestArticles from '../components/articles.jsx';
import Suggestions from '../components/suggestions.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';

class Home extends React.Component {

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
        <Featured />
        <LatestArticles />
        <Suggestions />
      </div>
    );
  }
}

export default Home;
