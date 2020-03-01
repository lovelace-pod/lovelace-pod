"use strict";

// variables
let i = 0;
let startTxt = ["Man, that guy was weird...", "I know he went this way because I can hear him.", " Wait that sounds too loud to be him..."];
let txtElement = $("#body_text")[0];
// console.log(txtElement);

//creates typewriter effect
function typeWriter(string, element) {
    let speed = 50; /* The speed/duration of the effect in milliseconds */
    // let txt = string;
    let txt = "";
    txt += string;
    console.log(string);
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
    btn.text("Continue");
    btn.fadeIn("slow");
}, 8100);

// On click fade out btn and text and fade in enemies
$('#continue-btn').click(function () {
    let btn = $("#continue-btn");
    let txt = $("#body_text");
    let opt2 = $("#option2-btn");
    let opt3 = $("#option3-btn");
    let opt4 = $("#option4-btn");
    let problem1 = chooseFunctions[0].problem;
    //fade text and button out
    txt.empty();
    $(this).fadeOut("slow");
    //fade enemies in
    $('#lyonel').fadeIn('slow');
    // after 1 seconds fade in problem text and all buttons
    setTimeout(function () {
        //changes continue button text
        btn.text("Option 1");
        //fade in buttons
        btn.fadeIn("slow");
        opt2.fadeIn("slow");
        opt3.fadeIn("slow");
        opt4.fadeIn("slow");

        typeWriter(problem1,txtElement);
    }, 1000)
});

// shows Lyonels attacking
$('#lyonel').hover(function () {
    $(this).attr("src", "img/lyonelAttack.gif")
}, function () {
    $(this).attr("src", "img/lyonelMarch.gif")
});

let chooseFunctions = [
    {
        problem: "                                             Which of the following functions would take two strings as arguments and returns the number of times the first string (the single character) is found in the second string.",
        options:{
            path1:"",
            path2:"",
            path3:"function charCount(myChar, str) {\n" +
                "    let total = 0;\n" +
                "    for (let i =0; i < str.length; i++){\n" +
                "        if (str.charAt(i) === myChar){\n" +
                "            total += 1\n" +
                "        }\n" +
                "    }\n" +
                "    return total\n" +
                "}\n",
            path4:""
        }
    },
    {
        problem: "                                            Which of the following functions would take a string and returns the word count. The string will be a sentence.",
        options:{
            path1:"function countWords(str) {\n" +
                "    let array = str.split(\" \");\n" +
                "    return array.length;\n" +
                "}",
            path2:"",
            path3:"",
            path4:""
        }
    },
    {
        problem: "                                           Which of the following functions would take an array with objects and returns the sum of all elements budget property. Example of an element would be: {name: \"John\",  age: 21, budget: 23000}",
        options:{
            path1:"",
            path2:"",
            path3:"",
            path4:"function getBudgets(array) {\n" +
                "    let total = 0;\n" +
                "    array.forEach(function (item) {\n" +
                "        total += item.budget\n" +
                "    });\n" +
                "    return total\n" +
                "}"
        }
    }
    // {
    //     objective: "",
    //     problem: "",
    //     options:{
    //         path1:"",
    //         path2:"",
    //         path3:"",
    //         path4:""
    //     }
    // }
    //
];

// checks for the above problems

// First problem
// console.log(charCount('b', 'big fat bubble'));  //4
// console.log(charCount('c', 'Chamber of secrets'));  //1
// console.log(charCount('f', 'frank and his friends have offered five foxes for sale'));  //7
// console.log(charCount('a', 'Adam and Eve bit the apple and found a snake')); //6
// console.log(charCount('7', '10795426697'));  //2

// Second problem
// console.log(countWords("It's high noon")); //3
// console.log(countWords("Is this easy mode")); //4
// console.log(countWords("What an easy task, right")); //5
// console.log(countWords("This is a test")); //4
// console.log(countWords("Just an example here move along")); //6
// console.log(countWords("How are you today?")); //4

// Third problem
// console.log(getBudgets([{name: "John", age: 21, budget: 23000}, {name: "Steve", age: 32, budget: 40000}, {name: "Martin", age: 16, budget: 2700}]));  //65700
// console.log(getBudgets([{name: "John", age: 21, budget: 29000}, {name: "Steve", age: 32, budget: 32000}, {name: "Martin", age: 16, budget: 1600}]));  //62600
// console.log(getBudgets([{name: "John", age: 21, budget: 19401}, {name: "Steve", age: 32, budget: 12321}, {name: "Martin", age: 16, budget: 1204}]));  //32926
// console.log(getBudgets([{name: "John", age: 21, budget: 10234}, {name: "Steve", age: 32, budget: 21754}, {name: "Martin", age: 16, budget: 4935}]));  //36923


