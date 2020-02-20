(function () {
    "use strict";


    setTimeout(function () {
        var main = document.getElementById('mainContainer');
        let makeKirby = document.createElement("img");
        makeKirby.setAttribute('class', "position-absolute");
        makeKirby.setAttribute('id',"Kirby");
        makeKirby.setAttribute('src', "img/kirby.gif");
        main.appendChild(makeKirby);
    }, 5000);

    setTimeout(function () {
        var main = document.getElementById("Kirby");
        main.remove();
    },18800);








})();
