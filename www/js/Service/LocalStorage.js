'use strict';
angular.module('chatvn.service')

.factory('LocalStorageService', function(

) {

	return {
	    set: function(key, value) {
	      window.localStorage.setItem(key, value);
	    },
	    get: function(key) {
	      return window.localStorage.getItem(key) || undefined;
	    },
	    setObject: function(key, value) {
	    	alert(JSON.stringify(value));
	    	window.localStorage.setItem(key, JSON.stringify(value));
	    },
	    getObject: function(key) {
	    	alert(key);
	    	JSON.stringify(window.localStorage);
	    	var result = window.localStorage.getItem(key);
	    	if (result) {
	    		return JSON.parse(result);
	    	}
	      	return undefined;
	    },
	    clear: function() {
	    	window.localStorage.clear();
	    }

	};

});