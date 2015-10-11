Template.goods.helpers({
	goods: function () {
		return Goods.find({});
	},
	filters: function(){
		var query = Goods.find().fetch();
		var filters = _.flatten(_.pluck(query, 'categories'));
		return filters;
	}
});