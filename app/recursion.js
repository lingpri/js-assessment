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

  	if (n <= 0) {
      return 0;
    }
    if (n === 1 || n === 2) {
      return 1;
    }
    return this.fibonacci(n-1) + this.fibonacci(n-2);

  },

  validParentheses: function(n) {

    //incomplete
    //
  }
};
