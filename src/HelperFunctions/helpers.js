export const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log(lines[i]);
      console.log(squares[a]);

      const itemA = document.querySelector(`.item${lines[i][0] + 1}`);
      const itemB = document.querySelector(`.item${lines[i][1] + 1}`);
      const itemC = document.querySelector(`.item${lines[i][2] + 1}`);
      const myArray = [itemA, itemB, itemC];
      winHighlight(myArray);
      return squares[a];
    }
  }
  return null;
};

export const winHighlight = items => {
  let intervalFlag = true;
  let highligtInterval = setInterval(function() {
    if (intervalFlag) {
      items.map(item => (item.style.background = '#4B77BE'));
      intervalFlag = false;
    } else {
      items.map(item => (item.style.background = '#3FC380'));
      intervalFlag = true;
    }
  }, 100);

  const restartButton = document.querySelector('.button--restart');
  restartButton.addEventListener('click', function() {
    items.map(item => (item.style.background = '#4B77BE'));
    clearInterval(highligtInterval);
  });
};
