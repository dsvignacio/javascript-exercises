const sumAll = function(...args) {
  args.sort();
  
  for (const arg in args) {
    if ((args[arg] < 0) || !(Number.isInteger(args[arg]))) {
      return "ERROR";
    }
  }

  let total = 0;
  for (let i = args[0]; i <= args[1]; i++) {
    total += i;
  }
  return total;

};

// Do not edit below this line
module.exports = sumAll;
