exports.createSendMsgBox = function(msg){
	// sender balloon
	var senderMsgLabel = Ti.UI.createLabel({
		text: msg,
		right: 12
	});
	var senderBalloon = Ti.UI.createView({
		right: 7,
		backgroundImage: 'iphone/sender-box.png',
		width: senderMsgLabel.toImage().width + 10,
	});
	var senderArrow = Ti.UI.createView({
		backgroundImage: 'iphone/sender-box-arrow.png',		
		width: 7, hedght: 26,
		right:0, bottom: 10
	});
	var senderBox = Ti.UI.createView({
		children: [senderBalloon, senderMsgLabel, senderArrow],
		//width: senderMsgLabel.text.length * 10 + 30,
		right: 0
	});
	var senderRow = Ti.UI.createTableViewRow({
		height: 40,
		selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	});
	senderRow.add(senderBox);
	return senderRow;
}
