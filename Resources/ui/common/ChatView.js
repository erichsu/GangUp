function ChatView(opts) {
	// var CustomTitleWindow = require('ui/common/CustomTitleWindow');
	// var win = new CustomTitleWindow(opts);
	
	var rootView = Ti.UI.createView();
	
	// sender balloon
	var senderMsgLabel = Ti.UI.createLabel({
		text: 'WTF~ Where is Reed!',
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
	
	// From balloon
	var fromMsgLabel = Ti.UI.createLabel({
		text: 'Ha ha ha ha ha..',
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
		leftImage: 'iphone/head_0.png',
		selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
		height: 40
	});
	fromRow.add(fromBox);
	
	var tableView = Ti.UI.createTableView({
		data: [senderRow, fromRow],
		height: 371,
		separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
		top: 0
	});

	var flexSpace = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	
	var tf = Titanium.UI.createTextField({
		height:32,
		backgroundImage:'iphone/inputfield.png',
		width:200,
		font:{fontSize:13},
		color:'#777',
		paddingLeft:10,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
	});
	tf.addEventListener('focus', function(e){
		toolBar.animate({bottom: 216});
		tableView.height = 155;
	});
	tf.addEventListener('blur', function(e){
		toolBar.animate({bottom: 0});
		tableView.height = 371;
	});
	
	var camera = Titanium.UI.createButton({
		backgroundImage:'iphone/camera.png',
		height:33,
		width:33
	});
	camera.addEventListener('click', function()
	{
		Titanium.UI.createAlertDialog({title:'Toolbar',message:'You clicked camera!'}).show();
	});
	
	var send = Titanium.UI.createButton({
		backgroundImage:'iphone/send.png',
		backgroundSelectedImage:'iphone/send_selected.png',
		width:67,
		height:32
	});
	send.addEventListener('click', function()
	{
		// Titanium.UI.createAlertDialog({title:'Toolbar',message:'You clicked send!'}).show();
		if (tf.value != '') {
			// sender balloon
			var senderMsgLabel = Ti.UI.createLabel({
				text: tf.value,
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
				right: 0
			});
			var senderRow = Ti.UI.createTableViewRow({
				height: 40
			});
			senderRow.add(senderBox);
			tableView.appendRow(senderRow);
			tableView.scrollToIndex(tableView.data[0].rowCount - 1);
			tf.value = '';
		}
	});
	
	var toolBar = Ti.UI.iOS.createToolbar({
		items:[flexSpace,camera, flexSpace,tf,flexSpace, send,flexSpace],
		height: 40,
		barColor: '#999',
		bottom: 0
	});
	
	
	rootView.add(tableView);
	rootView.add(toolBar);
	return rootView;
}

module.exports = ChatView;