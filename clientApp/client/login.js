Template.login.rendered = function () {
	// var element = $('#login');
	// element.velocity("callout.tada")
};

Template.login.events({
	'click #loginAsGuest': function () {
		Session.set("guestConfirmed",true);
	}
});