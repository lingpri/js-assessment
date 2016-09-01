exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  
   /* let count = 0;
    let result = ""; 
  	
    for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
      if (count < amount) {
        result += str[i];
      }
    } else {
      count = 0;
      result += str[i];
    } 
  }

  console.log(result);
  return result;*/

   var a = str.split("");

   console.log("original array:"+a+"amount:"+amount);

   


   /*var unique = a.filter(function(item, i, ar){ 

   	    console.log("ar.indexOf(item):"+aCount.get(item));

   	    return ar.indexOf(item) == i ; 
   	});*/

   /*	var calculateCount = function(arr,search) {

	   	var count = arr.reduce(function(n, val) {
	    	return n + (val === search);
		}, 0);

		return count;

   };*/

   var letterCount = (function(){
   var r = /([A-z])\1*/g,
        f = function(itm){
        return [itm.charAt(0), itm.length];
        };
       return function letterCount(str){
        return str.match(r).map(f);
       };
    }());

   var actual = letterCount(str);

  
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

  },

  reverseString: function(str) {

	  let reversedStr = '';
	  for (let i = str.length - 1; i >= 0; i--)
	    reversedStr += str[i];
	  	return reversedStr;
	  }
};
