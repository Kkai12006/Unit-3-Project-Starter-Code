/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening=document.querySelector(".story-opening");

let option1screen=document.querySelector(".option-one-screen");

let option2screen=document.querySelector(".option-two-screen");

let option1button=document.querySelector(".option-one");
let option2button=document.querySelector(".option-two");

option1button.onclick = function() {
    option1screen.style.display = "block";
    storyOpening.style.display = "none";
};
option2button.onclick = function() {
    option2screen.style.display = "block";
    storyOpening.style.display = "none";
};




/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){





};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


