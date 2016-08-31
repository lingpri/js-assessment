exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

  	var td;
    function print() {
      console.log(start); 
      
       start = start + 1;

      if (start <= end) {
        td = setTimeout(print, 100);

      }
    }

    print();

    return {
      cancel: function () {
      	if(td)
          clearTimeout(td);
      	
      }
    };

  }
};
