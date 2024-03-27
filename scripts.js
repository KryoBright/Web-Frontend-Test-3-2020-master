var page = 1;
var i = 0;
var p = 1
while (p < 4) {
    i = 0;
    while (i < 12) {
        var curCard = "<div class=card style=padding:5px><button type=button class=btn style=background-color:white data-toggle=modal data-target=#exampleModal2 id=servp"+p+"i"+i+"><h5 class=card-title>";
        if (Math.random() > 0.5) {
            curCard += "Remind yourself that";
        }
        else {
            curCard += "Too bad that";
        }
        curCard += "</h5><p class=card-text>";
        if (Math.random() > 0.5) {
            curCard += "Overconfidence is a slow and insidious killer";
        }
        else {
            curCard += "All this makes sence";
        }
        curCard += "</p></button></div>";
        document.getElementById("cl2p" + p).innerHTML += curCard;
        document.getElementById("servp" + p + "i" + i).className+=" btn-block"
    /*    document.getElementById("servp" + p + "i" + i).addEventListener("click", function () {
            document.getElementById("exampleModal2").modal();
        })*/
        i++;
    }
    p++;
}
p = 1;
i = 0;
while (p < 4) {
    i = 0;
    while (i < 5) {
        var curCard = "<div class=container style=padding:5px id=cardp" + p + "i" + i + "><div class=card style=padding:5px><img class=card-img src=img/" + Math.ceil(Math.random() * 10) + ".jpg /><h5 class=card-title>";
        if (Math.random() > 0.5) {
            curCard += "Remind yourself that";
        }
        else {
            curCard += "Too bad that";
        }
        curCard += "</h5><p class=card-text>";
        if (Math.random() > 0.5) {
            curCard += "Overconfidence is a slow and insidious killer";
        }
        else {
            curCard += "All this makes sence";
        }

        curCard += "</p><button type=button class=btn data-toggle=modal data-target=#exampleModal1 id=btnp"+p+"i"+i+">Read more</button></div></div>";
        document.getElementById("cl1p"+p).innerHTML += curCard;
        document.getElementById("btnp" + p + "i" + i).className += " btn-primary";
        i++;
    }
    p++;
}

function pageChng(n) {
    if (n == 1) {
        document.getElementById("page1").className = "container-fluid";
        document.getElementById("page2").className += " d-none";
        document.getElementById("page3").className += " d-none";
    }

    if (n == 2) {
        document.getElementById("page2").className = "container-fluid";
        document.getElementById("page1").className += " d-none";
        document.getElementById("page3").className += " d-none";
    }

    if (n == 3) {
        document.getElementById("page3").className = "container-fluid";
        document.getElementById("page2").className += " d-none";
        document.getElementById("page1").className += " d-none";
    }
}

document.getElementById("pg1up").addEventListener("click", function () { event.preventDefault(); pageChng(1); });
document.getElementById("pg2up").addEventListener("click", function () { event.preventDefault(); pageChng(2); });
document.getElementById("pg3up").addEventListener("click", function () { event.preventDefault(); pageChng(3); });
document.getElementById("pg1down").addEventListener("click", function () { event.preventDefault(); pageChng(1); });
document.getElementById("pg2down").addEventListener("click", function () { event.preventDefault(); pageChng(2); });
document.getElementById("pg3down").addEventListener("click", function () { event.preventDefault(); pageChng(3); });

function someFunc(t, u) {
    return t+t*u;
}