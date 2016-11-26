import Reflux from 'reflux';
import ArticleActions from '../actions/articleActions';

let ArticleStore = Reflux.createStore({
  listenables: ArticleActions,

  init() {
    this.articles = {};
  },

  loadFeatured() {
    this.trigger({
      loading: true
    });
  },

  loadFeaturedCompleted(article) {
    this.articles[article.pk] = article;

    this.trigger({
      featured : article,
      loading: false
    });
  },

  loadFeaturedFailed(error) {
    this.trigger({
      error : error,
      loading: false
    });
  },

  loadSuggestions() {
    this.trigger({
      loading: true
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
      loading: false
    });
  },

  loadSuggestionsFailed(error) {
    this.trigger({
      error : error,
      loading: false
    });
  },

  loadArticles() {
    this.trigger({
      loading: true
    });
  },

  loadArticlesCompleted(articles) {
    for(const article of articles.articles){
      this.articles[article.pk] = article;
    }

    this.trigger({
      articles: this.articles,
      loading: false
    });
  },

  loadArticlesFailed(error) {
    this.trigger({
      error : error,
      loading: false
    });
  },

  loadArticle(articleId){
    this.trigger({
      article: this.articles[articleId]
    })
  }
});

export default ArticleStore;
