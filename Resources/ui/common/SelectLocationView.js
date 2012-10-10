//SelectLocationView Component Constructor
function SelectLocationView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		barColor: '#4d2c14',
		barImage: 'iphone/titlebar.png'
	});
	
	var search = Titanium.UI.createSearchBar({
	    barColor:'#000', 
	    showCancel:true,
	    height:43,
	    top:0,
	});
	
	var tableView = Ti.UI.createTableView({
		top:44
	});
	
	self.add(search);
	self.add(tableView);
	// self.add(navGroup);
	return self;
}

module.exports = SelectLocationView;