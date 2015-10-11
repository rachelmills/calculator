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

function resetCalculator(action) {
  if (action != null) {
    highlightKeyPressed(action);
  }
  firstNumber = 0;
  keysPressed=[];
  document.getElementById("resultbox").value = "";
  }

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b != 0) {
        return a/b;
    }
    else alert("cannot divide by zero");
}


function clickNumber(num) {
  highlightKeyPressed(num);

  if (keysPressed.length > 2) {
    calculate();
    return;
  }
  console.log(num);
  if (keysPressed.length == 0) {
    firstNumber = num;
    keysPressed.push(num);
  } else if (keysPressed.length == 2) {
    keysPressed.push(num);
  }
}

function clickAction(action) {
  highlightKeyPressed(action);
  if (keysPressed.length > 2) {
    calculate();
    return;
  }
  console.log(action);
  if (keysPressed.length == 1) {
    keysPressed.push(action);
  }
}

function calculate() {
  highlightKeyPressed("=");
  var firstNumber = keysPressed[0];
  var action = keysPressed[1];
  var secondNumber = keysPressed[2]
  var result;
  switch(action) {
    case "+": result = add(firstNumber, secondNumber);break;
    case "-": result = subtract(firstNumber, secondNumber);break;
    case "*": result = multiply(firstNumber, secondNumber);break;
    case "/": result = divide(firstNumber, secondNumber);break;
  }
  document.getElementById("resultbox").value = result;
}

function setKeyColour(num, colour) {
    document.getElementById(num).style.backgroundColor = colour;
}

function highlightKeyPressed(keyPressed) {
  document.getElementById(keyPressed).onkeypress = setKeyColour(keyPressed, "red");
  document.getElementById(keyPressed).onkeypress = setTimeout(function() {setKeyColour(keyPressed, "white")}, 100);
}

//alert(my_Max(myArray));
//alert(vowel_count("abcemfkafjadsiou"));
//alert(reverse("rachel"));