Template.goods.helpers({
	items: function () {
		return Goods.find({});
	}
});

Template.goods.events({
	'click #uploadImage': function () {
	}
});