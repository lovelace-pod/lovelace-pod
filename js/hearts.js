var maxHP = parseInt(localStorage.getItem('maxHP'))  || 10;
var yourHP = parseInt(localStorage.getItem('yourHP'))  || 6;

if (yourHP <=0){
    yourHP = maxHP;
}

if (yourHP  < maxHP ){
    var heartBucket = yourHP;
    yourHP = maxHP;

    maxhpset();

    while (yourHP > heartBucket){
        yourHP--;
        hearts(yourHP);
    }
} else {
    maxhpset();
}

function heartGet() {
    maxHP = parseInt(localStorage.getItem('maxHP'));
    yourHP = parseInt(localStorage.getItem('yourHP'));
    maxhpset();
    hearts(yourHP);
}

function heartEnd() {
    localStorage.setItem('yourHP', yourHP);
    localStorage.setItem('maxHP', maxHP);
}

function hearts(hp) {
    switch (hp) {
        case 0:
            $('#heart1').attr('src', 'img/hearts-1.png.png');
            roar.play();
            setTimeout(function () {
                maintrack.pause();
                location.replace("outro-page.html");
            }, 2000);

            break;
        case 1:
            $('#heart1').attr('src', 'img/hearts-2.png.png');
            break;
        case 2:
            $('#heart2').attr('src', 'img/hearts-1.png.png');
            break;
        case 3:
            $('#heart2').attr('src', 'img/hearts-2.png.png');
            break;
        case 4:
            $('#heart3').attr('src', 'img/hearts-1.png.png');
            break;
        case 5:
            $('#heart3').attr('src', 'img/hearts-2.png.png');
            break;
        case 6:
            $('#heart4').attr('src', 'img/hearts-1.png.png');
            break;
        case 7:
            $('#heart4').attr('src', 'img/hearts-2.png.png');
            break;
        case 8:
            $('#heart5').attr('src', 'img/hearts-1.png.png');
            break;
        case 9:
            $('#heart5').attr('src', 'img/hearts-2.png.png');
            break;
    }
}

function maxhpset() {
    if (maxHP == 10){
        $('#heart1').attr('src', 'img/hearts-3.png.png');
        $('#heart2').attr('src', 'img/hearts-3.png.png');
        $('#heart3').attr('src', 'img/hearts-3.png.png');
        $('#heart4').attr('src', 'img/hearts-3.png.png');
        $('#heart5').attr('src', 'img/hearts-3.png.png');
    } else if (maxHP == 8){
        $('#heart1').attr('src', 'img/hearts-3.png.png');
        $('#heart2').attr('src', 'img/hearts-3.png.png');
        $('#heart3').attr('src', 'img/hearts-3.png.png');
        $('#heart4').attr('src', 'img/hearts-3.png.png');
    } else {
        $('#heart1').attr('src', 'img/hearts-3.png.png');
        $('#heart2').attr('src', 'img/hearts-3.png.png');
        $('#heart3').attr('src', 'img/hearts-3.png.png');
    }
}