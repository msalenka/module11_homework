function getNumbers(from, to) {
  let current = from;

  let intervalId = setInterval(function() {
    console.log (current);
    if (current === to) {
      clearInterval(intervalId);
    }
    current++;
  }, 1000);
}

getNumbers(5, 20);
