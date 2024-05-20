const counterElement = document.getElementById('counter');

let count = 0;

const intervalId = setInterval(() => {
  count++;
  counterElement.textContent = count;

  if (count === 5) {
    console.log('종료');

    clearInterval(intervalId);
  }
}, 1000);
