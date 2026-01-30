function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;

}

function handleMouseLeave(){
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}


function addEventListenersToCards() {
    const cardsElements = document.querySelectorAll('.s-card');
    console.log(cardsElements);

    for(let index = 0; index < cardsElements.length; index++) {
        const card = cardsElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
}
}
document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);