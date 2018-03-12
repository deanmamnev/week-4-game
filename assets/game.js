// document.ready(function(){


// }


// )





// Variables bank
var totalscore = 0;
var wins = 0;
var losses = 0;
var randNum_comp = 1;


function randomchoice_comp() {
    randNum_comp = Math.floor(Math.random() * 120 + 19)
    console.log(randNum_comp)
    $("#random-number").text(randNum_comp)
}
randomchoice_comp();

//more variables...
var randNum_crystal1 = Math.floor(Math.random() * 12 + 1);
console.log("Crystal 1: ", randNum_crystal1);

var randNum_crystal2 = Math.floor(Math.random() * 12 + 1)
console.log("Crystal 2: ", randNum_crystal2);


var randNum_crystal3 = Math.floor(Math.random() * 12 + 1)
console.log("Crystal 3: ", randNum_crystal3);


var randNum_crystal4 = Math.floor(Math.random() * 12 + 1)
console.log("Crystal 4: ", randNum_crystal4);



console.log("Total Score: ", totalscore);


//Score Comparison
console.log("BUGTRACK " + totalscore + " " + randNum_comp);
if (totalscore == randNum_comp) {
    alert("Winner!")
    wins++;
    gamereset();

}

console.log("BUGTRACK " + totalscore + " " + randNum_comp);
if (totalscore > randNum_comp) {
    alert("Loser!")
    losses++;
    gamereset();
}


//button functions


// Button Click Functions
$("#crystal_1").on("click",
    function () {
        totalscore = totalscore + randNum_crystal1;
        console.log(totalscore);
        console.log("Crystal 1 works");
        // alert("Button works!");

        // 

        console.log("BUGTRACK " + totalscore + " " + randNum_comp);
        if (totalscore == randNum_comp) {
            alert("Winner!")
            wins++;
            gamereset();

        }

        console.log("BUGTRACK " + totalscore + " " + randNum_comp);
        if (totalscore > randNum_comp) {
            alert("Loser!")
            losses++;
            gamereset();
        }

        $("#total-number").text(totalscore);
        $("#wins").text(wins);
        $("#losses").text(losses);

    });
$("#crystal_2").on("click",
    function () {
        console.log("Crystal 2 works");
        totalscore = totalscore + randNum_crystal2;
        console.log(totalscore);
        // alert("Button works!");

        crystalbutton();
    });
$("#crystal_3").on("click",
    function () {
        totalscore = totalscore + randNum_crystal3;
        console.log(totalscore);
        console.log("Crystal 3 works");
        // alert("Button works!");
        crystalbutton();
    });
$("#crystal_4").on("click",
    function () {
        totalscore = totalscore + randNum_crystal4;
        console.log(totalscore);
        console.log("Crystal 4 works");
        // alert("Button works!");
        crystalbutton();
    });


$("#total-number").text(totalscore);
$("#wins").text(wins);
$("#losses").text(losses);

function gamereset() {
    totalscore = 0;
    randomchoice_comp();
    randNum_crystal1 = Math.floor(Math.random() * 12 + 1);
    randNum_crystal2 = Math.floor(Math.random() * 12 + 1);
    randNum_crystal3 = Math.floor(Math.random() * 12 + 1);
    randNum_crystal4 = Math.floor(Math.random() * 12 + 1);

}

//Reusable function for each button

function crystalbutton(){

    console.log("BUGTRACK " + totalscore + " " + randNum_comp);
        if (totalscore == randNum_comp) {
            alert("Winner!")
            wins++;
            gamereset();

        }

        console.log("BUGTRACK " + totalscore + " " + randNum_comp);
        if (totalscore > randNum_comp) {
            alert("Loser!")
            losses++;
            gamereset();
        }

    $("#total-number").text(totalscore);
$("#wins").text(wins);
$("#losses").text(losses);
    
}

//if my code makes you weep, I won't hold it against you.