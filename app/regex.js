exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {

    return (/\d/).test(str);

  },

  containsRepeatingLetter: function(str) {

    return (/([A-Za-z])\1/).test(str);

  },

  endsWithVowel: function(str) {

    //https://regex101.com/
    return (/[aeiou]$/i).test(str);


  },

  captureThreeNumbers: function(str) {

    var matches = (/\d{3}/).exec(str);
    return matches ? matches[0] : false;

  },

  matchesPattern: function(str) {

    return (/^\d{3}-\d{3}-\d{4}$/).test(str);

  },

  isUSD: function(str) {

     return(/^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?$/).test(str);

  }
};
