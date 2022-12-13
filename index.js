function getTime() {
    date = new Date(Date.now())
    hour = date.getHours()
    if (hour != 12) hour %= 12;
    return hour + ":" + date.getMinutes()
}

function getTimeWithSeconds() {
    date = new Date(Date.now())
    hour = date.getHours()
    if (hour != 12) hour %= 12;
    return hour + ":" + date.getMinutes() + ":" + date.getSeconds()
}

textWrapper = document.getElementsByClassName("angel-wrapper")[0]
textRef = document.getElementsByClassName("angel-text")[0]

idx = 0

setText()
setInterval(setText, 1000)

function setText() {
    time = getTime()
    if (! (time in angel_text)) {
        textWrapper.classList.add('default');
        textRef.innerHTML = getTimeWithSeconds();
        return;
    }

    if (idx == angel_text.length) {
        idx = 0;
    }

    textWrapper.classList.remove('default');
    angel = angel_text[time]
    textWrapper.style.background = angel['background']
    textWrapper.style.color = angel['color']
    
    textRef.innerHTML = angel['text'];
}