Template.login.events({
  'click #loginAsGuest': function () {
    Session.set("guestConfirmed",true);
  }
});

Template.navigation.events({
  'click #goodsPath': function () {
    Router.go('goods');
  },
  'click #foodPath': function () {
    Router.go('home');
  },
  
});