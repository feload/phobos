'use strict';

define(["phobos"], function(Phobos){

	var onAppReadyEvent;

	return {

		onAppReady: function(data){
			console.log('users: onAppReady "'+data.message+'"');
			onAppReadyEvent.unsubscribe();
		},

		subscribe: function(){
			onAppReadyEvent = Phobos.subscribe("onAppReady", this.onAppReady);
		},

		getOnline: function(){
			Phobos.emit("onUserOnline", { user_id: '123' });
		},

		init: function(){
			this.subscribe();
		}

	}

});