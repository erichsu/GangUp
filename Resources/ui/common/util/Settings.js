function Settings(_args){
	var win = Ti.UI.createWindow(_args);
	
	Ti.Facebook.appid = '371272799616908';
	Ti.Facebook.permissions = ['create_event', 'user_events', 'user_photos'];
	//
	// Login Status
	//
	var label = Ti.UI.createLabel({
		text:'Logged In = ' + Titanium.Facebook.loggedIn,
		font:{fontSize:14},
		height:'auto',
		top:10,
		textAlign:'center'
	});
	win.add(label);
	
	var forceButton = Ti.UI.createButton({
		title:'Force dialog: '+Titanium.Facebook.forceDialogAuth,
		top:50,
		width:160,
		height:40
	});
	forceButton.addEventListener('click', function() {
		Titanium.Facebook.forceDialogAuth = !Titanium.Facebook.forceDialogAuth;
		forceButton.title = "Force dialog: "+Titanium.Facebook.forceDialogAuth;
	});
	win.add(forceButton);
	
	function updateLoginStatus() {
		label.text = 'Logged In = ' + Titanium.Facebook.loggedIn;
		if (Titanium.Facebook.loggedIn) {
			Ti.Facebook.requestWithGraphPath('me', {fields:'id,name,picture'}, 'GET', function(e) {
				if (!e.success) {
					if (e.error) {
						alert(e.error);
					} else {
						alert("call was unsuccessful");
					}
					return;
				}
				Ti.App.Properties.setString('userName', JSON.parse(e.result).name);
				Ti.App.Properties.setString('pictureUrl', JSON.parse(e.result).picture.data.url);
			});
		}
	}
	
	// capture
	Titanium.Facebook.addEventListener('login', updateLoginStatus);
	Titanium.Facebook.addEventListener('logout', updateLoginStatus);
	
	//
	// Login Button
	//
	if(Titanium.Platform.name == 'iPhone OS'){
		win.add(Titanium.Facebook.createLoginButton({
			style:Ti.Facebook.BUTTON_STYLE_WIDE,
			bottom:30
		}));
	}
	else{
		win.add(Titanium.Facebook.createLoginButton({
			style:'wide',
			bottom:30
		}));
	}
	
	
	var cancel = Ti.UI.createButton({systemButton: Ti.UI.iPhone.SystemButton.CANCEL});
	cancel.addEventListener('click', function(e){
		win.close();
	});
	win.setLeftNavButton(cancel);
	
	var done = Ti.UI.createButton({systemButton: Ti.UI.iPhone.SystemButton.DONE});
	win.setRightNavButton(done);
	done.addEventListener('click', function(e){
		win.close();
	});

	return win;
}

module.exports = Settings;