let promptName = document.getElementById("myName")
promptName.textContent = prompt("İsminizi girin")
function showTime() {
    let now = new Date();
    let hoursnow = (now.getHours().toString().length==2) ? now.getHours() : "0"+now.getHours();
    let minutesnow = (now.getMinutes().toString().length==2) ? now.getMinutes() : "0"+now.getMinutes();
    let secondsnow = (now.getSeconds().toString().length==2) ? now.getSeconds() : "0"+now.getSeconds();

    document.getElementById('myClock').innerHTML = hoursnow + ":" + minutesnow + ":" +
        secondsnow;
    setTimeout(showTime, 10);
}
showTime()