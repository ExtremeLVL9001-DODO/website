


// init global vars
var displayArea;
var Mottolist = [   `Experience Local Classes`,
                    `Find Your Passion`,
                    `You Want It? We've Got It`,
                    `Yolo Right?`,
                    'Volunteer As Tribute!',
                    `Find Hot Single Classes Near You!`,
                    `Take The Red Pill Neo!`,
                    `Don't Worry, We Won't Bite`,
                    `Just Keep Trying Till You Run Out of Cake`,
                    `Are YOU Bad enough to Rescue the President?`,
                    `Revolutionize Your Hobbies`
                    ];
var SignupMsg = "Thank You For Helping Us";

function init(){
    // find scrolling-text div
    displayArea = document.getElementById("changing-motto")
    
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
        cycleOut(displayArea)
        await sleep(5000);;
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