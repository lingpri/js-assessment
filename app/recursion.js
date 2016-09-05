exports = typeof window === 'undefined' ? global : window;



exports.recursionAnswers = {

  listFiles: function(data, dirName) {

    //the data is a object literal

    let listOfFiles = [];
    let dirs =[];

     
  (function traverse(dir) {
          
      let file = "";
      let files = dir.files;

      //needed for tracking the subdirectory
      //just so we know that we are 
      //dealing with the children
      //if its an xml data, the hierarchy is
      //already established
      dirs.push(dir.dir);
            
      for (let i = 0;i < files.length; i++) {
        file = files[i];
        if (file && typeof file === 'object') {
          traverse(files[i]);
         } else {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        }
      }
      dirs.pop();
     
  })(data);
  return listOfFiles;
 

  },

  permute: function(arr) {
  	// https://en.wikipedia.org/wiki/Heap%27s_algorithm
    cmb = Combinatorics.permutation(arr); 
    return cmb.toArray();
  },

  fibonacci: function(n) {

   // 1, 1, 2, 3, 5, 8

  	if (n <= 0) {
      return 0;
    }
    if (n === 1 || n === 2) {
      return 1;
    }
    return this.fibonacci(n-1) + this.fibonacci(n-2);

  },

  validParentheses: function(n) {

    //http://stackoverflow.com/questions/3172179/valid-permutation-of-parenthesis
    //https://blogs.msdn.microsoft.com/ericlippert/2010/04/22/every-tree-there-is/

    //1,1,2,5,14,42

    //catalan  numbers

   // (2n)!/(n+1)!n! = 720/24*6 = 5

   //there should be five different ways that a paranthesis can be generated for n=3



   var printParen = function (open, close) {
      var result = [];
      var temp = [];
      var i=0;
      // terminal case
      if (close === 0) { return ['']; }

      //more left parenthesis left for printing
      if (open > 0) {
        temp= printParen(open - 1, close);
        temp.forEach((el) => result.push('('.concat(el)));
      }
      if (close > open) { //more right paren for printing
        temp = printParen(open, close - 1);
        temp.forEach((el) => result.push(')'.concat(el)));
      }
      //console.log(result);
      return result;
    };
    
    return printParen(n, n);
  }

   

 

 
};
