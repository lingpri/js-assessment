exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  	console.log(arr);

  },

  fibonacci: function(n) {

  	if (n <= 0) {
      return 0;
    }
    if (n === 1 || n === 2) {
      return 1;
    }
    return this.fibonacci(n-1) + this.fibonacci(n-2);

  },

  validParentheses: function(n) {

  }
};
