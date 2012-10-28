exports.createFromMsgBox = function(msg, image){
	// From balloon
	var fromMsgLabel = Ti.UI.createLabel({
		text: msg,
		left: 19
	});
	var fromBalloon = Ti.UI.createView({
		backgroundImage: 'iphone/from-box.png',
		left: 14, width: fromMsgLabel.toImage().width + 10,
	});
	var fromArrow = Ti.UI.createView({
		backgroundImage: 'iphone/from-box-arrow.png',
		left: 0, bottom: 10,
		width: 14, height: 30
	})
	var fromBox = Ti.UI.createView({
		children: [fromBalloon, fromMsgLabel, fromArrow],
		left: 50
	});
	var fromRow = Ti.UI.createTableViewRow({
		leftImage: image,
		selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
		height: 40
	});
	fromRow.add(fromBox);
	
	return fromRow;
}
