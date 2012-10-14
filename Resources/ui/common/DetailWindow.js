function DetailWindow(opts) {
	var CustomTitleWindow = require('ui/common/CustomTitleWindow');
	var win = new CustomTitleWindow(opts);
	
	var mapButton = Ti.UI.createButton({
		image: 'iphone/location.png'
	});
	mapButton.addEventListener('click', function(){
		var MapWindow = require('ui/common/MapWindow');
		(new MapWindow()).open({
			modal : true,
			modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL
		});
	});
	win.setRightNavButton(mapButton);
	
	var view = Ti.UI.createLabel({text: 'Detail view is constructing...'});
	win.add(view);
	
	return win;
}
module.exports = DetailWindow;