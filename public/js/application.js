MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#content"
});

Url = Backbone.Model.extend({});

Urls = Backbone.Collection.extend({
  model: Url,
  comparator: function(a,b) {
    var url1 = a.get("text").toUpperCase();
    var url2 = b.get("text").toUpperCase();
    return url1 < url2 ? -1 : 2;
  }
});

Category = Backbone.Model.extend({});

Categories = Backbone.Collection.extend({
  model: Category,
  comparator: function(a,b) {
    var category1 = a.get("category").toUpperCase();
    var category2 = b.get("category").toUpperCase();
    return category1 < category2 ? -1 : 2;
  }
});

UrlView = Backbone.Marionette.ItemView.extend({
  template: "#url-template",
  tagName: "div"
});

CategoryView = Backbone.Marionette.CompositeView.extend({
  template: "#accordion-group-template",  
  className: "accordion-group",  
  childView: UrlView,  
  childViewContainer: "div.accordion-inner", 
  initialize: function(){
    this.collection = this.model.get('urls');
  }
});

CategoriesView = Backbone.Marionette.CollectionView.extend({
  id: "categoryList",
  
  className: "accordion",
  
  childView: CategoryView
});
