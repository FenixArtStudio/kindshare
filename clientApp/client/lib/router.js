	

var AdminConnect;
AdminConnect = DDP.connect("http://d15.local:2000");
// if (Meteor.absoluteUrl().indexOf("local") > 0)
	// AdminConnect = DDP.connect("http://d15.local:2000");
// else
	// AdminConnect = DDP.connect("http://d15.local:2000");		


Wishlist = new Meteor.Collection('wishlist',{
	connection: AdminConnect
});

Essentials = new Meteor.Collection('essentials',{
	connection: AdminConnect
});

Gifts = new Meteor.Collection('gifts',{
	connection: AdminConnect
});

Goods = new Meteor.Collection('goods',{
	connection: AdminConnect
});


Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

CustomController = RouteController.extend({
	notFoundTemplate: 'notFound',	
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){
		if (Meteor.isClient){
			return [AdminConnect.subscribe('wishlist'),AdminConnect.subscribe('gifts'),AdminConnect.subscribe('essentials'),AdminConnect.subscribe('goods')];
		}
	},
	onBeforeAction: function(){
		if (Meteor.isClient){
			Session.setDefault("guestConfirmed", false);
			
			//document.getElementById('adminHeaderSearch').value = "";
			if (!Session.equals("guestConfirmed", true)) {
			  this.render('login');
			} else {
		 	 //Session.set("adminSearch", "");
			  //$('#adminSearch').val("");
		 	 this.next();
			}
		}
  },

});	


Router.route('/', {
  name: 'home',
  template: 'shop',
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

Router.route('/profile', {
  name: 'profile',
  template: 'profile',
  controller: 'CustomController',
  yieldRegions: {
	'navigation': {to: 'navigation'}, 
  },
});


