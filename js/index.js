(function startRandom() {
  const cards = [...document.querySelectorAll('.memory-card')];
  cards.map(cardContent => {
    cardContent.dataset.name = cardContent.lastChild.previousSibling.alt;
  });
  cards.map(card => {
    const ramdomPos = Math.floor(Math.random() * 24);
    card.style.order = ramdomPos;
  });
})();
