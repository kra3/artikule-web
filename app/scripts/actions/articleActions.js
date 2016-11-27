import Reflux from 'reflux';
import request from 'superagent';

const ArticleActions = Reflux.createActions([
  {'loadFeatured': {children: ['completed', 'failed']}},
  {'loadSuggestions': {children: ['completed', 'failed']}},
  {'loadArticles': {children: ['completed', 'failed']}},
  {'loadArticleAsync': {children: ['completed', 'failed']}},
  'loadArticle'
]);

ArticleActions.loadFeatured.listen(function(){
  request
    .get('/api/articles/featured/')
    .end((err, res) => {
        err? this.failed(err): this.completed(res.body)
    });
});

ArticleActions.loadSuggestions.listen(function(next_page=1){
  request
    .get('/api/articles/suggest/')
    .query({next_page: next_page})
    .end((err, res) => {
        err? this.failed(err): this.completed(res.body)
    });
});


ArticleActions.loadArticles.listen(function(){
  request
    .get('/api/articles/')
    .end((err, res) => {
        err? this.failed(err): this.completed(res.body)
    });
});


ArticleActions.loadArticleAsync.listen(function(articleID){
  request
    .get('/api/articles/' + articleID + '/')
    .end((err, res) => {
        err? this.failed(err): this.completed(res.body)
    });
});

export default ArticleActions;
