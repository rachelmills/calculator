var myArray = [4, 94, 5, 6];

function my_Max(myArrayOfNumbers) {
    return Math.max.apply(null, myArrayOfNumbers);
}

function vowel_count(word) {
    var numLetters = word.length;
    var numVowels = 0;
    while(numLetters--) {
         if (isVowel(word[numLetters])) {
          numVowels++
        }
     }
    return numVowels;
}
    
function isVowel(c) {
    return c.match(/[aeiouAEIOU]/);
}

function reverse(str) {
   var s = '';
   for (var i = str.length - 1; i >= 0; i--) {
       s += str[i];
   }
   return s;
}

var keysPressed;

//alert(my_Max(myArray));
//alert(vowel_count("abcemfkafjadsiou"));
alert(reverse("rachel"));