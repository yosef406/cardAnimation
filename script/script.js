/**
 * @param cardRect this holds the dimensions for the original card top, bottom, left, right, width, height ...
 */
var cardRect;

/**
 * the animation of the card works every time the mouse moves on the element 
 * 
 * @param {*} event 
 */
function cardHoverMove(event) {
    //? what is event and why does it get deprecated if removed ...
    //? ... from the functions parameters and does it work if it is removed
    //? it does keep working if the name is changed to param

    //* card = <div class="card">
    //* card.style = CSS2Properties
    // var card = event.target;
    var card = this;

    //* saves the middle point in the X and Y directions 
    var xMidPoint = cardRect.width / 2;
    var yMidPoint = cardRect.height / 2;

    /**
     * @param x is where the mouse is on the card x coordinates
     * @param y is where the mouse is on the card y coordinates
     */
    var x = event.pageX - cardRect.left;
    var y = event.pageY - cardRect.top;

    //* the amount of rotation around the x axis and y axis
    //* the division is to make sure that rotX and rotY ar max 15 and min -15
    var rotX = (y - yMidPoint) / (yMidPoint / 15);
    var rotY = (xMidPoint - x) / (xMidPoint / 15);

    card.style.transform = ` perspective(${cardRect.height}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1, 1, 1)`;
}

/**
 * works as a resetter for the card
 * @param {*} event 
 */
function cardLeave() {
    this.style.transform = "";
}

/**
 * sets the parameter cardRect so that it does not change while the animation is working
 * @param {*} event 
 */
function cardEnter() {
    cardRect = this.getBoundingClientRect();
}


//* setting the functions to work on the cards
//* this mimics <div class="card" onmousemove="cardHoverMove(event)"></div> 
var cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mousemove", cardHoverMove);
    cards[i].addEventListener("mouseleave", cardLeave);
    cards[i].addEventListener("mouseenter", cardEnter);
}

