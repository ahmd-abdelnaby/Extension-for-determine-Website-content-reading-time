chrome.runtime.onMessage.addListener(gotMsg);
function gotMsg(message, sender, sendResponse) {
    if (message.status == "in") {
        var textContent = document.getElementsByTagName('body')[0].textContent;
        calTime(textContent);
    }
}

function calTime(textContent) {
    var Allwords = textContent.split(/[\s,\n!]+/);
    console.log(Allwords);

    var length = Allwords.length;
    var time = (length * 20) / 60;
   
    if (time <= 60) {
        time = time.toFixed(2);
        alert(time + ' Seconds');
    }
    else {
        time=time / 60;
        time = time.toFixed(2);

        alert(time + ' Minutes');

    }
}