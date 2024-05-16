document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');

  container.addEventListener('click', (e) => {
    if ((e.target.classList, contains('box'))) {
      e.target.classList.add('cilcked');
    }
  });
});

function getSquare(number) {
  return number * number;
}

const result = getSquare(5);
console.log(result);
