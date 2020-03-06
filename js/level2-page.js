"use strict";

// variables
let i = 0;
let startTxt = ["Man, that guy was weird...", "I know he went this way because I can hear him.", " Wait that sounds too loud to be him..."];
let endTxt = ["                    Now that's over let's see where to go","",""];
let endTxt1 = "                   I'll choose that way I guess";
let txtElement = $("#body_text")[0];
let txtElement1 = $("#body_text1")[0];
// console.log(txtElement);
let currProb = 0;
let lyonelAttack = 3;
let lyonelLife = 0;
let life = 50;
let chooseFunctions = [
    {
        problem: "What would the following function produce:",
        function: "function add(x:5,y:10) { return x + y }",
        options:{
            path1:"5",
            path2:"510",
            path3:"15",
            path4:"50"
        },
        Answer:3
    },
    {
        problem: "What would the following function produce:",
        function:"function valueOf(num: false) { return typeof num }",
        options:{
            path1:"boolean",
            path2:"number",
            path3:"string",
            path4:"object"
        },
        Answer:1
    },
    {
        problem: "What would the following function produce:",
        function:"function isEqual(x:0, y:!!false){ return x === y}",
        options:{
            path1:"True",
            path2:"undefined",
            path3:"'False'",
            path4:"False"
        },
        Answer:4
    }
    // {
    //     problem: "",
    //     function: "",
    //     options:{
    //         path1:"",
    //         path2:"",
    //         path3:"",
    //         path4:""
    //     }
    // }
    //
];
let lyonelPattern = [
    {attack:"img/lyonelAttack.gif",normal:"img/lyonelMarch.gif",transition:"img/lyonel2.gif",time:1500},
    {attack:"img/lyonel2-attack.gif",normal:"img/lyonel2-march.gif",transition:"img/lyonel1.gif",time:2300},
    {attack:"img/lyonel1-attack.gif",normal:"img/lyonel1-march.gif",transition:"img/lyonel-defeat.gif",time:2000}
];

//creates typewriter effect
function typeWriter(string, element) {
    let speed = 50; /* The speed/duration of the effect in milliseconds */
    // let txt = string;
    let txt = "";
    txt += string;
    // console.log(string);
    if (i < txt.length) {
        element.innerHTML += txt.charAt(i);
        i+=1;
        setTimeout(function () {
            typeWriter(string,element);
        }, speed);
    }
}

//Gets array and runs it through typewriter in intervals
function superTypeWriter(textArray, element) {
    textArray.forEach(function (item, j) {
        var time = j * 3000;
        setTimeout(function () {
            i = 0;
            typeWriter(item, element)
        }, time)
    })
}

superTypeWriter(startTxt,txtElement);

// Show Continue Btn after text appears
setTimeout(function () {
    let btn = $("#continue-btn");
    // console.log(btn);
    btn.fadeIn("slow");
}, 8100);

// On click fade out btn and text and fade in enemies
$('#continue-btn').click(function () {
    let btn = $("#continue-btn");
    let TA1 = $("#TA1");
    let TA2 = $("#TA2");

    //switch text and fade button out
    TA1.fadeOut('fast');
    $("#button").remove();
    TA2.fadeIn('fast');
    txtElement.innerHTML = "";

    //fade enemies in
    $('#lyonel').attr("src",lyonelPattern[lyonelLife].normal).fadeIn('slow');

    // Add problem 1 info to screen
    currentProblem(currProb);
});

// Function to add current problem content to screen
function currentProblem(num){
    let question = chooseFunctions[num];
    let probArea = $("#prob_text");
    let funcArea = $("#func_text");
    let op1 = $("#op1-text");
    let op2 = $("#op2-text");
    let op3 = $("#op3-text");
    let op4 = $("#op4-text");
    // console.log(op3);
    //remove any information in problem area
    // probArea.empty();
    // op1.empty();
    // op2.empty();
    // op3.empty();
    // op4.empty();
    setTimeout(function () {
         //adds problem to text area
        probArea.html(question.problem);
        funcArea.html(question.function);
        op1.html(question.options.path1);
        op2.html(question.options.path2);
        op3.html(question.options.path3);
        op4.html(question.options.path4);
    },1000);
}

// Btn values
let userPick;
$("#btn1").click(function () {
    userPick = 1;
    // console.log("clicked");
    isRight(userPick);
    userPick = 0;
});
$("#btn2").click(function () {
    userPick = 2;
    // console.log("clicked");
    isRight(userPick);
    userPick = 0;
});
$("#btn3").click(function () {
    userPick = 3;
    // console.log("clicked");
    isRight(userPick);
    userPick = 0;
});
$("#btn4").click(function () {
    userPick = 4;
    // console.log("clicked");
    isRight(userPick);
    userPick = 0;
});

// Function to process user pick and determine if right answer to continue
function isRight(userPick) {
    if (userPick !== chooseFunctions[currProb].Answer){
        // console.log("wrong");
        $("button").attr('disabled');
        // Show attack gif
        $("#lyonel").attr('src', lyonelPattern[lyonelLife].attack);
        // Switch back to normal gif
        setTimeout(function(){$("#lyonel").attr('src',lyonelPattern[lyonelLife].normal)},1500);
        // Reduce life according to number of enemies
        // yourHP -= lyonelAttack;
        // hearts(yourHP);
        life -= lyonelAttack;
        // console.log(life);

         // check if game over
        if (life <= 0){
            // Fade out screen
            $("#body-container").fadeOut(5000);
            // lead to Wake-Up Page
            $(".gameover").fadeIn(5000).click(function () {
                $("body").load('outro-page.html');
            });
        }
    } else {
        // console.log("right");

        //check to see if lyonel is defeated
        if (lyonelLife === 2){
            // Show defeat animation
            $("#lyonel").attr('src',lyonelPattern[lyonelLife].transition);
            // Transition back to story
            setTimeout(function(){
                $("#lyonel").fadeOut(lyonelPattern[2].time);
                $("#TA2").fadeOut('fast');
                $("#TA1").fadeIn('fast');
                $("#body-container").append("<div class=\"row d-flex justify-content-center p-3 bg-secondary\" id=\"button\">" +
                    "<div class=\"col-12 w-100 bg-secondary d-flex justify-content-around\">" +
                    "</div>" + "</div>");
                superTypeWriter(endTxt,txtElement);
                setTimeout(function () {
                    typeWriter(endTxt1,txtElement1);
                },3000);
                setTimeout(function () {
                    // heartEnd();
                    $("#button div").append('<button type="button" class="nes-btn mb-1 hide-me" id="continue-btn">Continue</button>');
                    let btn = $("#continue-btn");
                    // console.log(btn);
                    btn.fadeIn("slow");
                }, 6000);
            },1100)

        } else {
            // Show defeat a enemy and reduce number
            $("#lyonel").attr('src', lyonelPattern[lyonelLife].transition);
            setTimeout(function(){
                //Switch gifs used
                lyonelLife++;
                // reduce attack power
                lyonelAttack--;
                $("#lyonel").attr('src',lyonelPattern[lyonelLife].normal)},lyonelPattern[lyonelLife].time);
            // Switch problems
            currProb++;
            // Add new problems
            currentProblem(currProb);
        }
    }
}