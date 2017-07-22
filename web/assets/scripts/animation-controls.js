


// init global vars
var displayArea;
var Mottolist = [   `Experience Local Classes`,
                    `Find Your Passion`,
                    'Make New Friends',
                    `Find Fun Classes Near You!`,
                    `Revolutionize Your Hobbies`,
                    'Make $ Sharing your Passion'
                    ];

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
