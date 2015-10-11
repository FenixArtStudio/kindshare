Template.home.helpers({
	essentials: function () {
		return Essentials.find({},{sort:{stock:1}});
	},
	gifts: function () {
		return Gifts.find();
	}
});