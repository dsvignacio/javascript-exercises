const reverseString = function(word) {
  let reversed = "";
  for (let i = -1; i > -(word.length); i--) {
    reversed += word[i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
