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

  },

  partial: function(fn, str1, str2) {

    return function(str3) {
      return fn(str1, str2, str3);
    };

  },

  useArguments: function() {


    //convert arguments to Array
    var args = Array.prototype.slice.call(arguments);

    //use the reduce function to compute total
    var total = args.reduce(function(a, b) {
            return a + b;
        }, 0);

        return total;

  },

  callIt: function(fn) {

    
  },

  partialUsingArguments: function(fn) {

   
  },

  curryIt: function(fn) {

  }
};
