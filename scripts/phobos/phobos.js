'use strict';

/**
 *
 *  Phobos
 *
 */

define([], function(){

	var events = {};

	return {

		/**
		 * Subscribe an event.
		 * @param  {string} event   i.e. "onEvent"
		 * @param  {function} handler
		 * @return {object} unsubscriber object.
		 */
		subscribe: function(event, handler){

			if(!events[event]) events[event] = [];

			var eventId = events[event].push(handler) - 1;

			return {
				eventId: eventId,
				event: event,
				unsubscribe: function(){
					delete events[this.event][this.eventId];
				}
			};

		},

		/**
		 * Emit an event with a message.
		 * @param  {string} event i.e. "onEvent"
		 * @param  {object} data to be sent.
		 * @return {void}
		 */
		emit: function(event, data){
			for(var idx in events[event]){
				events[event][idx].call(null, data);
			}
		}

	}

});