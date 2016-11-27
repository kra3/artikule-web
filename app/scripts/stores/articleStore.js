import Reflux from 'reflux';
import ArticleActions from '../actions/articleActions';

let ArticleStore = Reflux.createStore({
  listenables: ArticleActions,

  init() {
    this.articles = {};
  },

  loadFeatured() {
    this.trigger({
      loadingFeatured: true
    });
  },

  loadFeaturedCompleted(article) {
    this.articles[article.pk] = article;

    this.trigger({
      featured : article,
      loadingFeatured: false
    });
  },

  loadFeaturedFailed(error) {
    this.trigger({
      error : error,
      loadingFeatured: false
    });
  },

  loadSuggestions() {
    this.trigger({
      loadingSuggestions: true
    });
  },

  loadSuggestionsCompleted(suggestions) {
    const {page_number, articles, total_pages} = suggestions;

    for(const article of articles){
      this.articles[article.pk] = article;
    }

    this.trigger({
      suggestions : articles,
      page_number: page_number,
      total_pages: total_pages,
      loadingSuggestions: false
    });
  },

  loadSuggestionsFailed(error) {
    this.trigger({
      error : error,
      loadingSuggestions: false
    });
  },

  loadArticles() {
    this.trigger({
      loadingArticles: true
    });
  },

  loadArticlesCompleted(articles) {
    for(const article of articles.articles){
      this.articles[article.pk] = article;
    }

    this.trigger({
      articles: this.articles,
      loadingArticles: false
    });
  },

  loadArticlesFailed(error) {
    this.trigger({
      error : error,
      loadingArticles: false
    });
  },

  loadArticle(articleId){
    this.trigger({
      article: this.articles[articleId]
    })
  }
});

export default ArticleStore;
