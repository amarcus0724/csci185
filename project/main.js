function showMessage () {
    document.querySelector(".message").classList.add("show");
    setTimeout(hideMessage,1000);
}
function hideMessage () {
    document.querySelector(".message").classList.remove("show"); 
}