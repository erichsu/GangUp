function LoginWindow(){
	var win = Ti.UI.createWindow({
		
	});
	
	var Facebook = new (require('ui/common/util/Facebook'))('371272799616908');
	
	var loginButton = Facebook.createLoginButton();
	win.add(loginButton);
	
	win.addEventListener('click', function(e){
		Facebook.FB_GetEvent(win);
	});
	
	win.addEventListener('load', function(e){
		console.log(e);
	});
	return win; 
}
module.exports = LoginWindow;
