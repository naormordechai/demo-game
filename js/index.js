let cancelUp;
let cancelDown;
let cancelRight;
let cancelLeft;
const playerEl = document.querySelector('.player');
const board = document.querySelector('.board');

let locationPlayer = {
    top: 100,
    left: 100
}

const initLocation = () => {
    playerEl.style.top = locationPlayer.top + 'px'
    playerEl.style.left = locationPlayer.left + 'px'
}
initLocation()  

// THIS THE BUG!!!  
// document.body.innerHTML += '<div>123</div>';
const moveDown = () => {
    if (locationPlayer.top >= 400) return
    locationPlayer.top = locationPlayer.top + 10;
    playerEl.style.top = locationPlayer.top + 'px'
}

const moveLeft = () => {
    if (locationPlayer.left <= 30) return
    locationPlayer.left = locationPlayer.left - 10;
    playerEl.style.left = locationPlayer.left + 'px'
}

const moveUp = () => {
    if (locationPlayer.top <= 30) return;
    locationPlayer.top = locationPlayer.top - 10;
    playerEl.style.top = locationPlayer.top + 'px'
}

const moveRight = () => {
    if (locationPlayer.left >= 500) return
    locationPlayer.left = locationPlayer.left + 10;
    playerEl.style.left = locationPlayer.left + 'px'
}

const clearIntervals = (a, b, c, d) => {
    clearInterval(a)
    clearInterval(b)
    clearInterval(c)
    clearInterval(d)
}

const moveSquare = (e) => {
    switch (e.keyCode) {
        case 38:
            clearIntervals(cancelDown, cancelLeft, cancelRight, cancelUp);
            cancelUp = setInterval(() => {
                moveUp()
            }, 15)
            break;
        case 40:
            clearIntervals(cancelUp, cancelLeft, cancelRight, cancelDown);
            cancelDown = setInterval(() => {
                moveDown()
            }, 15)
            break;
        case 39:
            clearIntervals(cancelUp, cancelLeft, cancelDown, cancelRight);
            cancelRight = setInterval(() => {
                moveRight()
            }, 15)
            break;
        case 37:
            clearIntervals(cancelUp, cancelDown, cancelRight, cancelLeft);
            cancelLeft = setInterval(() => {
                moveLeft()
            }, 15)
        default:
            break;
    }
};