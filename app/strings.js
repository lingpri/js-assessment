exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {

  reduceString: function(str, amount) {
  
   let a = str.split("");
   let letterCount = (function(){
   let r = /([A-z])\1*/g,
        f = function(itm){
        return [itm.charAt(0), itm.length];
        };
       return function letterCount(str){
        return str.match(r).map(f);
       };
    }());

   let actual = letterCount(str);

  
   const initialArray= [];
   let reducedStr = "";

   arr = actual.reduce((ret, iteratee,i,ar) => {
  		          
            var j = 0; 
            if(iteratee[1] == 1) {
            	ret.push(iteratee[0]);
            }
            else {
	   	        while(j<amount ) {
 	                 ret.push(iteratee[0]);
	                 j++;
	            }
        	}


            // this return value will be passed in as the 'ret' argument
            // to the next call of this function, and this function will have
            // every element passed into it at some point.
            return ret; 
    }, initialArray);

   reducedStr = arr.join("");
   return reducedStr;

 },

  
  wordWrap: function(str, cols) {

  	/*var arr = str.split(",");
  	return str.split(" ").join("\n");*/

  	let formatedString = '',
    wordsArray = [];
    wordsArray = str.split(' ');

    formatedString = wordsArray[0];

    for (let i = 1; i < wordsArray.length; i++) {
        if (formatedString.length + wordsArray[i].length > cols) {
                formatedString += '\n' + wordsArray[i];
        } else {
            formatedString += ' ' + wordsArray[i];
        }
       
    }
    return formatedString;
  	
  },

  reverseString: function(str) {

	  let reversedStr = '';
	  for (let i = str.length - 1; i >= 0; i--)
	    reversedStr += str[i];
	  	return reversedStr;
	  }
};
