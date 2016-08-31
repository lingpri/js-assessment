exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

  	var p = new Promise(function(resolve, reject) {  
	   if (value) {
	      resolve(value);  // fulfilled successfully
	   }
	   else {
	      reject(value);  // error, rejected
	   }
	});

	return p;

  },

  manipulateRemoteData: function(url) {

  	return new Promise(function(resolve, reject) {
      
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.responseType = "json";
      // When the request loads, check whether it was successful
      request.onload = function() {
        if (request.status === 200) {
        // If successful, resolve the promise by passing back the request response
           var obj = request.response;
           var people = obj.people.map(function(person) {
           return person.name;
      	 });
           resolve(people.sort());
        } else {
        // If it fails, reject the promise with a error message
          reject(Error('Unable to load JSON Data' + request.statusText));
        }
      };
      request.onerror = function() {
      // Also deal with the case when the entire request fails to begin with
      // This is probably a network error, so reject the promise with an appropriate message
          reject(Error('There was a network error.'));
      };
      // Send the request
      request.send();
    });

  	

  }
};
