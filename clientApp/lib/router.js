	


if (Meteor.isServer)
	var AdminConnect;
	// console.log();	
	if (Meteor.absoluteUrl().indexOf("local") > 0)
		AdminConnect = DDP.connect("d15.local:2000");
	else
		AdminConnect = DDP.connect("admin.kindshare.ca");		



Clients = new Meteor.Collection('clients',{
	connection: AdminConnect
});




Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

CustomController = RouteController.extend({
	notFoundTemplate: 'notFound',	
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	onBeforeAction: function(){
		if (Meteor.isClient){
			// Session.set("adminSearch", "");
			
			//document.getElementById('adminHeaderSearch').value = "";
			if (!Meteor.userId()) {
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
  template: 'home',
  controller: 'CustomController',
  yieldRegions: {
	'navigation': {to: 'navigation'}, 
	// 'adminFeed': {to: 'adminFeed'},
	// 'adminListHeader': {to: 'adminHeader'}  
  },
  // data:function(){
  // 	if (Meteor.isClient){
  // 		return {"title":"Clients" };  		
  // 	}
  	
  // }
});

