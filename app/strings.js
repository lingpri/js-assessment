exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  	
 },



  
  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

	  let reversedStr = '';
	  for (let i = str.length - 1; i >= 0; i--)
	    reversedStr += str[i];
	  	return reversedStr;
	  }
};
