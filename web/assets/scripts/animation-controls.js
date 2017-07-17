


// init global vars
var Mottolist = [];

function init(){
    // populate Mottolist
    Mottolist = (document.getElementsByClassName("motto"))
    
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function mottoIn(index){
    Mottolist[index].classList.remove("hidden");
    Mottolist[index].classList.add("entering");
    Mottolist[index].classList.remove("leaving");
    
}

function mottoOut(index){
    Mottolist[index].classList.remove("entering");
    Mottolist[index].classList.add("leaving");
}

async function cycleMottos(){
    var index = 0;
    while(true){
        await sleep(4000);
        mottoOut(index);
        index += 1;
        if (index == Mottolist.length){
            index = 0;
        }
        await sleep(500);
        mottoIn(index);
    }
};


window.onload = function(){
    
    init();
    cycleMottos();
};
