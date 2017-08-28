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

      const winField1 = document.querySelector(`.item--${lines[i][0]}`); //
      const winField2 = document.querySelector(`.item--${lines[i][1]}`);
      const winField3 = document.querySelector(`.item--${lines[i][2]}`);

      const winArray = [winField1, winField2, winField3];
      winHighlight(winArray);
      return squares[a];
    }
  }
  return null;
};

export const winHighlight = winFields => {
  let colorChangeBool = true;
  let highligtInterval = setInterval(function() {
    if (colorChangeBool) {
      winFields.map(winField => (winField.style.background = '#4B77BE'));
      colorChangeBool = false;
    } else {
      winFields.map(winField => (winField.style.background = '#3FC380'));
      colorChangeBool = true;
    }
  }, 100);

  const restartButton = document.querySelector('.button--restart');
  restartButton.addEventListener('click', function() {
    winFields.map(winField => (winField.style.background = '#4B77BE'));
    clearInterval(highligtInterval);
  });
};
