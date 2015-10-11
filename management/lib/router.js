


Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

CustomController = RouteController.extend({
	notFoundTemplate: 'notFound',	
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){
		if (Meteor.isClient){
			return [Meteor.subscribe('wishlist'),Meteor.subscribe('gifts'),Meteor.subscribe('essentials'),Meteor.subscribe('goods')];
		}
	},	
	onBeforeAction: function(){
		if (Meteor.isClient){
			Session.setDefault("guestConfirmed", false);

			if (!Session.equals("guestConfirmed", true)) {
			  this.render('login');
			} else {
		 	 this.next();
			}
		}
  },

});	


Router.route('/', {
  name: 'home',
  template: 'home',
  controller: 'CustomController',
  yieldRegions: {
	'navigation': {to: 'navigation'}, 
  },
});



Router.route('/goods', {
  name: 'goods',
  template: 'goods',
  controller: 'CustomController',
  yieldRegions: {
	'navigation': {to: 'navigation'}, 
  },
});