let homeScore = document.getElementById("t1score")
let homeCount = 0;

function homeOne() {
    homeCount += 1;
    homeScore.innerText = homeCount;
}

function homeTwo() {
    homeCount += 2;
    homeScore.innerText = homeCount;
}

function homeThree() {
    homeCount += 3;
    homeScore.innerText = homeCount;
}

let guestScore = document.getElementById("t2score")
let guestCount = 0;

function guestOne() {
    guestCount += 1;
    guestScore.innerText = guestCount;
}

function guestTwo() {
    guestCount += 2;
    guestScore.innerText = guestCount;
}

function guestThree() {
    guestCount += 3;
    guestScore.innerText = guestCount;
}
function resetBtn() {
    homeCount = 0
    guestCount = 0;
    guestScore.innerText = guestCount;
    homeScore.innerText = homeCount;
}