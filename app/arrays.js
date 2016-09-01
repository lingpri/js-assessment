exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {

     return arr.indexOf(item);

  },

  sum: function(arr) {

    return arr.reduce(function(a, b) {
            return a + b;
        }, 0);

        

  },

  remove: function(arr, item) {

     //Non functional solution 
      /* const ret = [];

        for (let i = 0, len = arr.length; i < len; i++) {
          if (arr[i] !== item) {
            ret.push(arr[i]);
          }
        }
        return ret;*/

       
        const initialArray= [];

        arr = arr.reduce((ret, iteratee) => {
            // if condition is our filter
            if (iteratee !== item) {
                // what happens inside the filter is the map
                ret.push(iteratee); 
            }
            // this return value will be passed in as the 'ret' argument
            // to the next call of this function, and this function will have
            // every element passed into it at some point.
            return ret; 
        }, initialArray);
        
       return arr;

  },

  removeWithoutCopy: function(arr, item) {

    let i, len;

        for (i=0, len = arr.length; i < len; i++) {
          if (arr[i] === item) {
            arr.splice(i, 1);
            i = i - 1;
            len = len - 1;
          }
        }

        return arr;


  },

  append: function(arr, item) {

     arr.push(item);
     return arr;


  },

  truncate: function(arr) {

     arr.pop();
     return arr;

  },

  prepend: function(arr, item) {

    arr.unshift(item);
    return arr;

  },

  curtail: function(arr) {

     arr.shift();
     return arr;

  },

  concat: function(arr1, arr2) {

      return arr1.concat(arr2);

  },

  insert: function(arr, item, index) {

     arr.splice(index, 0, item);
     return arr;

  },

  count: function(arr, item) {

    return arr.reduce(function(n, val) {
            return n + (val === item);
        }, 0);

       
  },

  duplicates: function(arr) {

     var duplicates = arr.reduce(function(acc, el, i, arr) {
            //console.log(i);
            //console.log(acc.indexOf(el)); 
            if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
      }, []);

      return duplicates;

  },

  square: function(arr) {

     return arr.map(function (x) {
            return x*x;
      });

  },

  findAllOccurrences: function(arr, target) {

    const initialArray= [];

    arr = arr.reduce((ret, iteratee,i) => {
            // if condition is our filter
            if (iteratee === target) {
                // what happens inside the filter is the map
                ret.push(i); 
            }
            // this return value will be passed in as the 'ret' argument
            // to the next call of this function, and this function will have
            // every element passed into it at some point.
            return ret; 
     }, initialArray);
        
    return arr;

  }
};
