


// init global vars
var displayArea;
// mottolist deprecated. Instead loading from DJANGO (mottos passed in via context and an inline script)
// var Mottolist = [   `Experience Local Classes`,
//                     `Find Your Passion`,
//                     'Make New Friends',
//                     `Find Fun Classes Near You!`,
//                     `Revolutionize Your Hobbies`,
//                     'Make $ Sharing your Passion'
//                     ];
var SignupMsg = "Thank You For Helping Us";

function init(){
    // find scrolling-text div
    displayArea = document.getElementById("changing-motto")
    Mottolist = shuffleArray(Mottolist)
    
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * thanks to StackOverflow user CoreDumpError - June 31 2017
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function cycleIn(node){
    node.classList.remove("entering");
    node.classList.add("leaving");
}

function cycleOut(node){
    node.classList.remove("leaving");
    node.classList.add("entering");
}

async function cycleMottos(){
    var index = 0;
    while(true){
        cycleIn(displayArea);
        index += 1;
        if (index == Mottolist.length){
            index = 0;
        }
        await sleep(500);
        displayArea.innerHTML = Mottolist[index];
        cycleOut(displayArea);
        await sleep(5000);
    }
};


window.onload = function(){
    
    init();
    cycleMottos();
};

// SIGNUP ANIMATIONS
async function signupError(errorString,errorHighlight){
    var errorParent = document.getElementById("signup");
    
    if (errorHighlight == -1){ // -1 is successful send, delete errormessage
        var oldError = document.getElementById("errorOutput");
        errorParent.removeChild(oldError);
        return
    }
    
    // set focus to error portion
    errorParent.childNodes[((errorHighlight * 2) + 1)].focus();
    
    
    var oldError = document.getElementById("errorOutput");
    if (oldError != null){ //previous error exists
        oldError.classList.remove("errorIn");
        oldError.classList.add("errorOut");
        await sleep(300);
        oldError.innerHTML = errorString;
        oldError.classList.remove("errorOut");
        oldError.classList.add("errorIn");
    }
    else{
    // first error, so create new node
    var errorOutput = document.createElement("p");
    errorOutput.innerHTML = errorString;
    errorOutput.classList.add("text");
    errorOutput.classList.add("errorIn");
    errorOutput.setAttribute("id","errorOutput");
    
    errorParent.appendChild(errorOutput);
    }
};

async function signupSuccess(){
    var signupForm = document.getElementById("signup");
    signupForm.classList.add("formOut");
    await sleep(1100);
    signupForm.innerHTML = SignupMsg;
    signupForm.classList.remove("formOut")
    signupForm.classList.add("formText")
    signupForm.classList.add("formIn")
};