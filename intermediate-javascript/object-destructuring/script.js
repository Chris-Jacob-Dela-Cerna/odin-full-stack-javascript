

const { increment, decrement, value, changeBy } = (
  function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }

    return {
      increment() {
        changeBy(1);
      },
      decrement() {
        changeBy(-1);
      },
      value() {
        return privateCounter;
      },
      changeBy
    }
  }
)();

console.log(value()); // 0.

increment();
increment();
console.log(value()); // 2.

decrement();
console.log(value()); // 1.

changeBy(2);
console.log(value()); // 1.