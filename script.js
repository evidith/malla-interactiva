const container = document.querySelector('.grid-container');

for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  container.appendChild(cell);
}
