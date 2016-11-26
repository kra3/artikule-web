import Reflux from 'reflux';
import request from 'superagent';

const ArticleActions = Reflux.createActions([
  'loadFeatured': {children: ['completed', 'failed']},
  'loadSuggestions': {children: ['completed', 'failed']},
  'loadArticles': {children: ['completed', 'failed']},
  'loadArticle'
]);

ArticleActions.loadFeatured.listen(function(){
  request
    .get('http://localhost:8000/featured_article')
    .end((err, res) => {
        err? this.failed(err): this.completed(res)
    });
});

ArticleActions.loadSuggestions.listen(function(){
  request
    .get('http://localhost:8000/suggest_articles')
    .end((err, res) => {
        err? this.failed(err): this.completed(res)
    });
});


ArticleActions.loadArticles.listen(function(){
  request
    .get('http://localhost:8000/articles')
    .end((err, res) => {
        err? this.failed(err): this.completed(res)
    });
});

export default ArticleActions;
