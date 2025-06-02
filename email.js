var shown = false;
function showHideEmail() {
    if (shown) {
        document.getElementById('email').innerHTML = "Show my email";
        shown = false;
    } else {
        var myemail = "<a href='mailto:ullahs3" + "@" + "udayton.edu'>ullahs3" + "@" + "udayton.edu</a>";
        document.getElementById('email').innerHTML = myemail;
        shown = true;
    }
}
