let promptName = document.getElementById("myName")
promptName.textContent = prompt("İsminizi girin")
function showTime() {
    let now = new Date();
    document.getElementById('myClock').innerHTML = now.getHours()+":"+now.getMinutes()+":"+
    now.getSeconds();
    setTimeout(showTime, 10);
}
showTime()