function ChatView(opts) {
	// var CustomTitleWindow = require('ui/common/CustomTitleWindow');
	// var win = new CustomTitleWindow(opts);
	
	var rootView = Ti.UI.createView();
	
	var msgData = [
		{msg: 'God, where is Reed~'},
		{msg:'XD', img:'iphone/head_1.jpg'},
		{msg:'Reed is always late', img:'iphone/head_2.jpg'},
		{msg:'Easy easy~ Roy!', img:'iphone/head_1.jpg'},
		{msg:'Sorry~', img:'iphone/head_3.jpg'},
	];
	
	var tableView = Ti.UI.createTableView({
		height: 371,
		separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
		top: 0
	});
	
	for (i=0; i< msgData.length; i++) {
		if (msgData[i].img != undefined) {
			tableView.appendRow(
				require('ui/common/FromMsgBox').createFromMsgBox(msgData[i].msg, msgData[i].img)
			);
		} else {
			tableView.appendRow(
				require('ui/common/SendMsgBox').createSendMsgBox(msgData[i].msg)
			);
		}
	}

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