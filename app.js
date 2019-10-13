let cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
    this.classList.add('flip');

    if (hasFlippedCard === false) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

        console.log(firstCard.dataset.framwork);

        //After 2 cards choosen
        if (firstCard.dataset.framwork ===
            secondCard.dataset.framwork) {
            firstCard.removeEventListener('')
        }

    }



}
