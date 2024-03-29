const cards = [...document.querySelectorAll('.memory-card')];

let [firstCard, secondCard] = [null, null];
let [flippedCard, lockBoard] = [false, false];

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip-card');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

const checkForMatch = () => {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
};

const disableCards = () => {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  setTimeout(() => {
    firstCard.classList.add('disabled-card');
    secondCard.classList.add('disabled-card');
    setTimeout(checkForWin, 500);
    resetBoard();
  }, 150);
};

const checkForWin = () => {
  if (cards.every(card => card.classList.contains('disabled-card'))) {
    alert('You win!');
  }
};

const unflipCards = () => {
  setTimeout(() => {
    firstCard.classList.remove('flip-card');
    secondCard.classList.remove('flip-card');

    resetBoard();
  }, 1000);
};

const resetBoard = () => {
  [flippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
};

cards.map(card => card.addEventListener('click', flipCard));
