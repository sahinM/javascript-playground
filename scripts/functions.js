/**
 * Is a basic function returning a reversed string.
 * @param {Should be a simple string} word
 * @returns the reversed string.
 */
function reverse(word) {
  let result = "";
  if (typeof word === "string") {
    for (var i = word.length; i > 0; i--) {
      result += word.substring(i - 1, i);
    }
    console.log(result);
  } else {
    throw Error("Argument must be a string!");
  }
  return result;
}

/**
 * Is a  IIFE (Immediately Invoked Function Expression) which is a function expression which is immediately invoked as soon as it is declared.
 */
(function () {
  word = "Immediately Invoked Function Expression";
  let result = "";
  if (typeof word === "string") {
    for (var i = word.length; i > 0; i--) {
      result += word.substring(i - 1, i);
    }
    console.log(result);
  } else {
    throw Error("Argument must be a string!");
  }
  return result;
})();

/**
 * Is an arrow function expression returning a reversed string.
 * @param {Should be a simple string} word
 * @returns the reversed string.
 */
let reverse2 = (word) => {
  let result = "";
  if (typeof word === "string") {
    for (var i = word.length; i > 0; i--) {
      result += word.substring(i - 1, i);
    }
    console.log(result);
  } else {
    throw Error("Argument must be a string!");
  }
  return result;
};

reverse("I am a basic function");
reverse2("I am an Arrow Function");

/**
 * using map function on some names using the implemented reverse function above.
 */
const names = ["Müso", "Yasemin", "Hans"];

var nameBtn = function () {
  let name = prompt("Please type in your name");
  document.getElementById("nameTextField").value = name;
};

var alertBtn = function () {
  let alertMsg = "This is an alert message!";
  alert(alertMsg);
};

var confirmBtn = function () {
  let confirmMsg = "Confirm or Cancel";
  confirm(confirmMsg);
};
