var shown = false;
function showHideEmail() {
    if (shown) {
        document.getElementById('email').innerHTML = "Show my email";
        shown = false;
    } else {
        var myemail = "<a href='mailto:saifullahl5210" + "@" + "gmail.com'>saifullahl5210" + "@" + "gmail.com</a>";
        document.getElementById('email').innerHTML = myemail;
        shown = true;
    }
}
