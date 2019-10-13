let cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lock = false;

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
    if (lock) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (hasFlippedCard === false) {
        hasFlippedCard = true;
        firstCard = this;
        return
    }
        hasFlippedCard = false;
        secondCard = this;
        //After 2 cards chosen
      checkForMatch();
    }
    
    function disableCard() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    }

    function unFlipCard() {
        lock = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            reset();
        },1100)
    }
    
    function checkForMatch() {
        let isMuch = firstCard.dataset.framwork === secondCard.dataset.framwork;

        isMuch ? disableCard() : unFlipCard();
    }
    
    function reset() {
        [hasFlippedCard, lock] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
    
    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random()*12);
            card.style.order = randomPos.toString();
        })
    })();

