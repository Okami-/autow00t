function click(e) {
    chrome.tabs.executeScript(null,
        {code:"document.body.style.color='" + e.target.id + "'"});
    chrome.tabs.executeScript(null,
        {code:"$('#woot').trigger('click');"})
    window.close();
}

document.addEventListener('DOMContentLoaded', function() {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});