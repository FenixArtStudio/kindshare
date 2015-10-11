
Meteor.startup(function () {


	if (Gifts.find().count() <= 0){
		var breakfast = {
			"title": "Breakfast",
			"price": 21.00,
			"plan": true
		}
		
		Gifts.insert(breakfast);
		
		var lunch = {
			"title": "Lunch",
			"price": 24.00,
			"plan": true
		}

		Gifts.insert(lunch);

		var dinner = {
			"title": "Dinner",
			"price": 26.00,
			"plan": true
		}

		Gifts.insert(dinner);
	}


	if (Wishlist.find().count() <= 0){

		var items = ["spices", "chocolate","fresh fruit", "tea","coffee"];
		for (i = 0;i<items.length; i++){
			var duration = Math.floor(Math.random() * 6) + 1;
			Wishlist.insert({
				"title": items[i],
				"price": 10,
				"duration": duration
			});
		}

	}

	if (Essentials.find().count() <= 0){

		var items = ["beans", "canned meat", "peanut butter","pasta","cereal"];
		for (i = 0;i<items.length; i++){
			var units = Math.floor(Math.random() * 10) + 1;
			var stock = Math.floor(Math.random() * 3) + 1;
			Essentials.insert({
				"title": items[i],
				"price": 5,
				"units": units,
				"stock": stock
			});
		}

	}

	return;


});



Meteor.publish('wishlist', function(){
	return Wishlist.find();
})

Meteor.publish('essentials', function(){
	return Essentials.find();
})

Meteor.publish('goods', function(){
	return Goods.find();
})

Meteor.publish('gifts', function(){
	return Gifts.find();
})


Goods.allow({
	insert: function () {
		return true;
	},
	update: function () {
		//console.log(doc);
		return true;
	},
	remove: function () {
		return false;
	},
});