

var maxHP = parseInt(localStorage.getItem('maxHP'))  || 10;
var yourHP = parseInt(localStorage.getItem('yourHP'))  || 6;
if (yourHP <=0){
    yourHP = maxHP;
}

console.log('yourhp is ' + yourHP +'and your maxhp is' + maxHP + 'heart bucket is ' + heartBucket);
console.log(typeof yourHP);

if (yourHP  < maxHP ){
    // console.log('yourhp is ' + yourHP +'and your maxhp is' + maxHP + 'heart bucket is ' + heartBucket);
    var heartBucket = yourHP;
    // console.log('success');

    yourHP = maxHP;

    console.log('yourhp is ' + yourHP +'and your maxhp is' + maxHP + 'heart bucket is ' + heartBucket);

    maxhpset();

    while (yourHP > heartBucket){
        console.log('success');
        yourHP--;
        hearts(yourHP);

    }
} else {
    maxhpset();
}

// If the user has more points than the currently stored high score then
// if (user.points > highScore) {
//     // Set the high score to the users' current points
//     highScore = parseInt(user.points);
//     // Store the high score
//     localStorage.setItem('highScore', highScore);
// }

// highScore = 5;
//
// localStorage.setItem('highScore', highScore);

// Return the high score
// console.log(localStorage.getItem('highScore'));



function heartGet() {
    maxHP = parseInt(localStorage.getItem('maxHP'));
    yourHP = parseInt(localStorage.getItem('yourHP'));
    maxHP();
    hearts(yourHP);
}

function heartEnd() {
    localStorage.setItem('yourHP', yourHP);
    localStorage.setItem('maxHP', maxHP);
    console.log(localStorage.getItem('yourHP') + 'your hp');
    console.log(localStorage.getItem('maxHP') + 'your max');
}


function hearts(hp) {

    switch (hp) {
        case 0:
            $('#heart1').attr('src', 'img/hearts-1.png.png');
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
    console.log('hi from max hp');
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