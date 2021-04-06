var midden = document.querySelector("#midden");
var dagindicatie = document.querySelector("#dagindicatie");

function serverGet() {
    function showResponse() {
        console.log(this.responseText);
        if (this.responseText > 100) {
            midden.style.backgroundImage = "url('img/day.jpg')";
            document.getElementById("dagindicatie").innerHTML="dag"
        } else {
            midden.style.backgroundImage = "url('img/night.jpg')";
            document.getElementById("dagindicatie").innerHTML = "nacht"
        }
    }

    var server = new XMLHttpRequest();
    server.onload = showResponse;
    server.open("GET", "http://cmd.camp:12345/get/DjfWydrH");
    server.send();
}

var timer = setInterval(serverGet, 2000);

// -----------------------------------------------
var button = document.querySelector("#button");



function serverSend() {
    var willekeurigGetal = Math.floor(Math.random() * 100);

    console.log("sending/somthing");
    var server = new XMLHttpRequest();
    server.open("GET", "http://cmd.camp:12345/send/m6K9BstJ/" + willekeurigGetal)
    server.send();
}
button.onclick = serverSend;