'use strict';

define(["phobos"], function(Phobos){

	return {

		onAppReady: function(data){
			console.log('Logger: onAppReady', data.message, counter++);
		},

		onUserOnline: function(data){
			console.log('Logger "User online" ' + data.user_id);
		},

		onUserOffline: function(data){
			console.log('Logger "User offline" ' + data.user_id);
		},

		subscribe: function(){
			onAppReadyEvent = Phobos.subscribe("onAppReady", this.onAppReady);
			Phobos.subscribe("onUserOnline", this.onUserOnline);
			Phobos.subscribe("onUserOffline", this.onUserOffline);
		},

		init: function(){
			this.subscribe();
		}

	}

});