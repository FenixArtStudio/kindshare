Template.shop.helpers({
	gifts: function(){
		return Gifts.find();
	},
	normalList: function () {
		return Essentials.find({},{sort: {stock:1}});
	},
	wishList: function(){
		return Wishlist.find();
		// console.log(Wi)
	},
	cart: function(){
		var cart = Cart.find();
		if (cart.count() <= 0){
			return false;
		}
		else{
			cart = cart.fetch();
			// var group = _.groupBy(cart, function(item){
			// 	return item.plan == true;
			// })
			// console.log(group);
			return cart;
		}
	},
	cartTotal: function(){
		var count = 0;
		_.each(Cart.find().fetch(), function(item){
			count = count + item.price
		})
		return count;
	},
	showCompletePurchase: function(){
		return Session.get("showCompletePurchase");
	}
});

Template.shop.events({
	'click .buy': function () {
		return Cart.insert({"title":this.title,"price": this.price});
	},
	'click .circle': function () {
		return Cart.insert({"title":this.title,"price": this.price});
	},
	'click #showCompletePurchase': function(){
		if (Cart.find().count() > 0){
			Session.set("showCompletePurchase", true);
		}
		else{
			alert("No Items In Cart");
		}
	}
});

Template.completePurchase.helpers({
	cart: function () {
		return Cart.find();
	}
});
Template.completePurchase.rendered = function () {
	var element = $('#completePurchaseContent');
	element.velocity("callout.pulse");

	checkCart()
};

Template.completePurchase.events({
	'click #deleteCartItem': function () {
		Cart.remove(this);
		checkCart();
		return;
	},
	'click #continueShopping': function(){
		Session.set("showCompletePurchase", false);
	}
});

function checkCart(){
	if (Cart.find().count() <= 0){
		Session.set("showCompletePurchase", false);
	}	
}