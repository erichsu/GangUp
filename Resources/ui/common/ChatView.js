function ChatView(opts) {
	// var CustomTitleWindow = require('ui/common/CustomTitleWindow');
	// var win = new CustomTitleWindow(opts);
	
	var rootView = Ti.UI.createView();
	
	var tableView = Ti.UI.createTableView({
		height: '90%',
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
		
		tableView.height = '90% - 216'
	});
	tf.addEventListener('blur', function(e){
		toolBar.animate({bottom: 0});
		tableView.height = '90%';
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
		Titanium.UI.createAlertDialog({title:'Toolbar',message:'You clicked send!'}).show();
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