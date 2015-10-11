Template.navigation.rendered = function () {
	var element = $('#navigationContainer');
	element.velocity("transition.bounceUpIn");	
};

Template.navigation.events({
	'click #homeNav': function () {
		Router.go('home')
	},
	'click #goodsNav': function () {
		Router.go('goods')
	},
	'click #profileNav': function () {
		Router.go('profile')
	},		
});