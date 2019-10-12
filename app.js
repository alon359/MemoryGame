let cards = document.querySelectorAll('.memory-card');

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
    this.classList.toggle('flip');
    console.log(this);


}