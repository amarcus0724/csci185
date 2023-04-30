function showMessage () {
    document.querySelector(".message").classList.add("show");
    setTimeout(hideMessage,500);
}
function hideMessage () {
    document.querySelector(".message").classList.remove("show"); 
}
let score = 0;
function addPoint () {
    // document.querySelector(".plants").
    score += 1;
    if (score == 6) {
    console.log('you win')
    window.location.href='hidden.html' 
    }
}




