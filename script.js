//0 rock   1 scissor  2 paper

function humanChoice(choice){
    let text_human = document.getElementById("score_human");
    let text_pc = document.getElementById("score_pc");
    let pc_img = document.getElementById("pc_img");
    let result = document.getElementById("result");


    let a = document.getElementById("score_human").textContent;
    let score_human = parseInt(a);
    let b = document.getElementById("score_pc").textContent
    let score_pc = parseInt(b);



    let hum = choice;
    let mac = parseInt(Math.random()*3);
    pc_img.src = mac + ".png";

    let win = "";
    if(hum == mac){
        win = "tie";
        result.textContent = "It's a tie!";
    }
    else{
        switch(hum){
            case 0:
                mac == 1 ? win = "win" : win = "lose";
                break;
            case 1:
                mac == 2 ? win = "win" : win = "lose";
                break;
            case 2:
                mac == 0 ? win = "win" : win = "lose";
                break;
        }
    }

    if(win == "win"){
        score_human++;
        text_human.textContent = score_human.toString();
        result.textContent = "You win!";
    }
    if(win == "lose"){
        score_pc++;
        text_pc.textContent = score_pc.toString();
        result.textContent = "You lose!";
    }
}
