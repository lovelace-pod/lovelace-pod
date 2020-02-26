"use strict";

    setTimeout(function () {
        let main = document.getElementById('mainContainer');
        let makeKirby = document.createElement("img");
        makeKirby.setAttribute('class', "position-absolute");
        makeKirby.setAttribute('id',"Kirby");
        makeKirby.setAttribute('src', "img/kirby.gif");
        main.appendChild(makeKirby);
    }, 5000);

    setTimeout(function () {
        let main = document.getElementById("Kirby");
        main.remove();
    },19500);

