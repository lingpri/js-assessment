exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {

     return fn.apply(null, arr);

  },

  speak: function(fn, obj) {

    return fn.call(obj);

  },

  functionFunction: function(str) {

    return function(arg) {
      return str + ', ' + arg;
    };

  },

  makeClosures: function(arr, fn) {
   
    var ret = [];

    var makeFn = function(val) {
      return function() { return fn(val); };
    };

    for (var i = 0; i < arr.length; i++) {
      ret.push(makeFn(arr[i]));
    }
    return ret;

  },

  partial: function(fn, str1, str2) {

    return function(str3) {
      return fn(str1, str2, str3);
    };

  },

  useArguments: function(...args) {


      
    //use the reduce function to compute total
    var total = args.reduce(function(a, b) {
            return a + b;
        }, 0);

        return total;

  },

  callIt: function(fn,...args) {
   
    fn.apply(null, args); 
    
  },

  partialUsingArguments: function(fn,...args) {
   
    return function(...args1) {
      var moreArgs = args.concat(args1);
      return fn.apply(null, moreArgs);
    };

   
  },

  curryIt: function(fn) {

     /*var curryAdd = curry(add);

     var add5 = curryAdd(5);

     console.log(add5(6));*/

     //idea is to keep returning fucntions
     //until we hit the bottom of the chain
     //and return the value

     //this function is attuned to make the test pass
     //we may need to provide a more dynamic solution

     /*return function(a) {

         return function(b) {

             return function(c) {
                        
                return fn.call(undefined,a,b,c);
             };   

         };

     };*/

     return function curried(args) {

         var args1 = Array.prototype.slice.call(arguments);
         if(args1.length >= fn.length) {
             return fn.apply(undefined,args1);
         }else {
             return function(a) {
                var newArgs = [].concat(args1);
                newArgs.push(a);
                return curried.apply(undefined,newArgs);
             };
         }

     };





  }
};
