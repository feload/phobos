'use strict';

require.config({
	baseUrl: "scripts",
	paths: {
	    "phobos": "phobos/phobos",
	    "users": "modules/users",
	    "logger": "utils/logger"
	}
});

require(["phobos", "users","logger"],

function(Phobos, Users, Logger){

	Users.init();
	Logger.init();

});