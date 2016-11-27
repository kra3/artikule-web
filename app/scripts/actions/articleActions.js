import Reflux from 'reflux';
import request from 'superagent';

const ArticleActions = Reflux.createActions([
  {'loadFeatured': {children: ['completed', 'failed']}},
  {'loadSuggestions': {children: ['completed', 'failed']}},
  {'loadArticles': {children: ['completed', 'failed']}},
  'loadArticle'
]);

ArticleActions.loadFeatured.listen(function(){
  request
    .get('/api/featured_article')
    .withCredentials()
    .end((err, res) => {
        err? this.failed(err): this.completed(res.body)
    });
});

ArticleActions.loadSuggestions.listen(function(next_page=1){
  request
    .get('/api/suggest_articles')
    .query({next_page: next_page})
    .end((err, res) => {
        err? this.failed(err): this.completed(res.body)
    });
});


ArticleActions.loadArticles.listen(function(){
  request
    .get('/api/articles')
    .end((err, res) => {
        err? this.failed(err): this.completed(res.body)
    });
});

export default ArticleActions;
