var $ = require('jquery');
var _ = require('underscore');
require('backbone');

var CatView = require('./cats/cat.view');
var Cat = require('./cats/cat.model');

var cat = new Cat({
  name: "Fluffy"
});

$(function() {
  new CatView({
    el: $('app'),
    model: cat
  });
});

