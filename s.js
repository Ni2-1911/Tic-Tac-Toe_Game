document.getElementById('butt').addEventListener
('click' , ()=>{
    let P1 = document.getElementById("player1").value;
    let P2 = document.getElementById("player1").value;
    if(P1=""){
        P1 = "Player 1";
    }

    if(P2=""){
        P2 = "Player 2";
    }
    document.getElementById("status").innerHTML = P1;
});
