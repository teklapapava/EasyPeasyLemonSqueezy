const ngButton = document.getElementById("btn1");
const rollBtn = document.getElementById("btn2");
const holdBtn = document.getElementById("btn3");
const frstPlyScr = document.getElementById("frstPlyScr");
const ScPlyScore = document.getElementById("ScPlyScore");
const frstPlyCur = document.getElementById("frstPlyCur");
const ScdPlyCur = document.getElementById("ScdPlyCur");
const dice = document.querySelectorAll(".dice");
const gameBord = document.querySelector(".gameBord");
const ply1 = document.getElementById("player1");
const ply2 = document.getElementById("player2");

let crrScrFrsPly = 0;
let crrScrSecPly = 0;

let lstScrFrsPly = 0;
let lstScrSecPly = 0;


let score = 0

let player = 1;


rollBtn.addEventListener("click", ()=>{

    if(lstScrFrsPly >= 100 || lstScrSecPly >= 100)  return;

    dice.forEach((dice) => (dice.style.display = "none"));

    const random = Math.floor(Math.random() * 6);
    dice[random].style.display = "flex";

     score = random + 1;

    if(score === 1){
            switchPlayer();
            crrScrFrsPly = 0;
            frstPlyCur.innerHTML = crrScrFrsPly;

            crrScrSecPly = 0;
            ScdPlyCur.innerHTML = crrScrSecPly;
        }


    if(player === 1){
        crrScrFrsPly += score;
        frstPlyCur.innerHTML = crrScrFrsPly;
        if(score === 1){
            crrScrFrsPly = 0;
            frstPlyCur.innerHTML = crrScrFrsPly;
        }
    }else{
        crrScrSecPly += score;
        ScdPlyCur.innerHTML = crrScrSecPly;
        if(score === 1){
            crrScrSecPly = 0;
            ScdPlyCur.innerHTML = crrScrSecPly;
        }
    }
});


holdBtn.addEventListener("click", hold);

function hold(){
    if(player === 1){
        lstScrFrsPly += crrScrFrsPly;
        frstPlyScr.innerHTML = lstScrFrsPly;

        crrScrFrsPly = 0;
        frstPlyCur.innerHTML = crrScrFrsPly;
    }else{
        lstScrSecPly += crrScrSecPly;
        ScPlyScore.innerHTML = lstScrSecPly;

        crrScrSecPly = 0;
        ScdPlyCur.innerHTML = crrScrSecPly;

        if(score === 1){
             crrScrFrsPly = 0;
            frstPlyCur.innerHTML = crrScrFrsPly;
        }
    }
    winner();
    if(lstScrFrsPly < 100 && lstScrSecPly < 100)  switchPlayer(); 
}




function switchPlayer(){

    if(lstScrFrsPly >= 100 || lstScrSecPly >= 100)  return;

    if(player === 1){
        player = 2;
        ply1.classList.remove("active");
        ply2.classList.add("active");
        ply1.style.backgroundColor = "rgb(165, 112, 112)";
        ply2.style.backgroundColor = "rgb(110, 82, 77)";
    }else{
        player = 1;
        ply2.classList.remove("active");
        ply1.classList.add("active");
        ply2.style.backgroundColor = "rgb(165, 112, 112)";
        ply1.style.backgroundColor = "rgb(110, 82, 77)";
    }
}

function winner(){
    if(lstScrFrsPly >= 100){
        ply1.style.backgroundColor = "rgb(75, 139, 75)"
        ply2.style.backgroundColor = "#151515"
        rollBtn.disabled = true;
        holdBtn.disabled = true;
    }else if(lstScrSecPly >= 100){
         ply2.style.backgroundColor = "rgb(75, 139, 75)";
         ply1.style.backgroundColor = "#151515";
         rollBtn.disabled = true;
         holdBtn.disabled = true;
    }

}


function forrestart(){

    crrScrFrsPly = 0;
    frstPlyCur.innerHTML = 0;

    crrScrSecPly =  0;
    ScdPlyCur.innerHTML = 0;

    lstScrFrsPly = 0;
    frstPlyScr.innerHTML = 0;
    
    lstScrSecPly = 0;
    ScPlyScore.innerHTML = 0;

    rollBtn.disabled = false;
    holdBtn.disabled = false;

    player = 1;

    ply1.style.backgroundColor = "rgb(110, 82, 77)";
    ply2.style.backgroundColor = "rgb(165, 112, 112)";

    dice.forEach((dice) => (dice.style.display = "none"));
}


ngButton.addEventListener("click", forrestart);










































