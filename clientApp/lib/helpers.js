UI.registerHelper("connectionStatus", function(){
	return Meteor.status().connected;
	
})

UI.registerHelper('iPhone', function(){
	if (window.navigator.standalone)
		return true;
	else
		return false;
})



UI.registerHelper('isInCart', function(date){
	if (Cart.find({"title": this.title}).count() >= 1){
		return true;
	}
	else{
		return false;
	}
})


UI.registerHelper('isToday', function(date){
	var date = new Date(date);
	return moment(date).isSame(new Date(), 'day');
})

UI.registerHelper("date", function(dateType,date){
	var rawDate;
	if (date != undefined){
		 rawDate = new Date(date);
	}
	
	switch(dateType){
		case "fullDate":
		//console.log(date);
			return moment(rawDate).format("DD MMM YYYY HH:MMa");
		case "hoursMinutes":
			return moment(rawDate).format("DD MMM");
		case "time":
			return moment(rawDate).format("h:mma");
		case "timeFrom":
			return moment(rawDate).fromNow();
		case "timeTo":
		//console.log(date);
			return moment().to(rawDate);
		case "calendarTime":
			return moment(rawDate).calendar();
		case "dayDate":
			if (rawDate != undefined)
				if (moment(rawDate).isSame(new Date(), 'day'))
					return "Today";
				else
					return moment(rawDate).format("ddd, DD MMM");
			else
				return moment().format("ddd, DD MMM");
		default:
			return moment().format("DD MMM");
	}
	
})



UI.registerHelper('lineBreak', function(text){
  var paragraph = text.split("\n").join("<br>");
  return new Spacebars.SafeString(paragraph); 

})



  String.prototype.capitalize = function(lower) {
      return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  };



UI.registerHelper("isActiveRoute", function(name){

	var name = name.toLowerCase();
	var routerName = Router.current().route.options.name.toLowerCase();

	//console.log(routerName.match(name));

	if (routerName.match(name) != null){
		return "green";
	}
	else{
		return;
	}
})