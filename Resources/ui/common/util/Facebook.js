function Facebook(fbAppID) {
	Ti.Facebook.appid = fbAppID;
	//371272799616908;
	this.createLoginButton = function() {
		Ti.Facebook.permissions = ['create_event', 'user_events'];
		var fb = Ti.Facebook.createLoginButton();
		return fb;
	};
	this.FB_CreateEvent = function(title, desc, starttime, endtime) {
		//var starttime = new Date(2012, 10, 16, 17, 0);
		//var endtime = new Date(2012, 10, 16, 19, 0);
		//var title = "Barry's Birthday Celebration";
		//var desc = "Barry will have a great party";
		var data = {
			start_time : String.format("%d-%02d-%02dT%02d:%02dZ", starttime.getUTCFullYear(), starttime.getUTCMonth(), starttime.getUTCDate(), starttime.getUTCHours(), starttime.getUTCMinutes()), // API expects a ISO8601 date
			end_time : String.format("%d-%02d-%02dT%02d:%02dZ", endtime.getUTCFullYear(), endtime.getUTCMonth(), endtime.getUTCDate(), endtime.getUTCHours(), endtime.getUTCMinutes()),
			description : desc,
			name : title
		};
		Ti.Facebook.requestWithGraphPath('me/events', data, 'POST', function(e) {
			alert(data);
			if (e.success) {
				alert("Success! Returned from FB: " + e.result);
			} else {
				if (e.error) {
					alert(e.error);
				} else {
					alert("Unknown result");
				}
			}
		});
	};

	this.FB_GetEvent = function(win) {
		Ti.Facebook.permissions = ['user_events'];
		Ti.Facebook.authorize();
		Ti.Facebook.requestWithGraphPath('me/events?fields=name,start_time,owner', {}, 'GET', function(e) {
			if (e.success) {
				var lstEvents = JSON.parse(e.result).data;
				var lstEventInfos = [];
				for (var i = 0; i < lstEvents.length; i++) {
					if ('owner' in lstEvents[i]) {
						var dicOwnerInfo = {};
						Ti.Facebook.requestWithGraphPath(lstEvents[i]['owner']['id'] + '?fields=name,picture', {}, 'GET', function(ownerE) {
							if (ownerE.success) {
								console.log(lstEvents[i]);
								dicOwnerInfo = JSON.parse(ownerE.result);
								lstEventInfos.push({
									name : lstEvents[i]['name'],
									startTime : lstEvents[i]['start_time'],
									ownerName : dicOwnerInfo['name'],
									picture : dicOwnerInfo['picture']['data']['url']
								});
								console.log(lstEventInfos);
							} else {
								if (ownerE.error) {
									alert(ownerE.error);
								} else {
									alert("Unknown result");
								}
							}
						});
					}
				};
				win.fireEvent('load', {
					data : lstEventInfos
				});
			} else {
				if (e.error) {
					alert(e.error);
				} else {
					alert("Unknown result");
				}
			}
		});
	};
}

module.exports = Facebook;
