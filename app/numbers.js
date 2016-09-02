exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {



  	//shift the bit to the right most digit and &ing with 1
  	//returns the value at bit

  	 return (num >> bit-1) & 1;

  },

  base10: function(str) {

  	return parseInt(str, 2);

  },

  convertToBinary: function(num) {

  	//return num .toString(2);

    let temp = "";
    let arr = [];
  	

    /*while(num > 0){

        temp = num%2 + temp;
        num = num/2;

    }

    return temp;*/

  	//its a 8 bit , hence starting with 7
  	//

  	for (var i = 7; i >=0; i--) {
      arr.push( num & (1 << i) ? 1 : 0 );
    }

    return arr.join('');

  },

  multiply: function(a, b) {

  	  return Number((a*b).toFixed(4));

  }
};


/**
Notes to self

Test a Bit is set
-----------------
Mask-n == flags & Mask-n - Bit is set
else Bit is not set



set a Bit in position n
-----------------------

flags = flags|Mask3


clear a bit 
----------- 
flags = flags & ~Mask-n


Toggle a bit at position n
-------------------------
flags = flags xor Maskn



*/
