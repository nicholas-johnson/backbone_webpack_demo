var {View} = require('backbone');

module.exports = View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'change:name', this.render);
  },
  events: {
    'click button': "setName"
  },
  render: function() {
    this.$el.html(this.model.get('name') + "<button>Click</button>");
  },
  setName: function() {
    this.model.set('name', 'Mikey');
  }
});
