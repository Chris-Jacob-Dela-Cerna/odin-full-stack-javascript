


function initialize(prefix, suffix) {
  return function concat(word) {
    return prefix + word + suffix;
  }
}

const mis_ing = initialize("mis", "ing");

console.log(mis_ing("understand"));
console.log(mis_ing("direct"));
console.log(mis_ing("lead"));
console.log(mis_ing("represent"));
console.log(mis_ing("trust"));