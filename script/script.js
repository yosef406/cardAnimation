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

    // console.log(`x: ${x}, y: ${y}`);
    // console.log(`clientX: ${event.clientX}, clientY: ${event.clientY}`);
    // console.log(`screenX: ${event.screenX}, screenY: ${event.screenY}`);
    // console.log(`pageX: ${event.pageX}, pageY: ${event.pageY}`);


    //! it is disabled because it is not a requirement 
    //* this section is to make sure the coordinates dont go overboard
    // x = x < 0 ? 0 : x;
    // y = y < 0 ? 0 : y;
    // x = x > cardRect.width ? cardRect.width : x;
    // y = y > cardRect.height ? cardRect.height : y;




    //* the amount of rotation around the x axis and y axis
    //* the division is to make sure that rotX and rotY ar max 15 and min -15
    var rotX = (y - yMidPoint) / (yMidPoint / 15);
    var rotY = (xMidPoint - x) / (xMidPoint / 15);

    card.style.transform = ` perspective(${cardRect.height}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1, 1, 1)`;
    // card.style = "transform: perspective(" + cardRect.height + "px) rotateX(" + rotX + "deg) rotateY(" + rotY + "deg) scale3d(1, 1, 1);";

    //! this for additional understanding of changing the style of an element
    // card.style.background = "red";
    // card.style.boxShadow = "20px 20px 20px blue";
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

