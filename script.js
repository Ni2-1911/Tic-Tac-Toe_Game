matrixx=[0,4,3,8,9,5,1,2,7,6];
a ={
    "X":0,
    "O":0,
};
x_x=[];
o_o=[];
char ="X";

items=document.getElementsByClassName("item");
function new_game(){
    document.getElementById("game_finish").style.display="none";
    for(i=0;i<items.length;i++){
        items[i].innerText=i+1;
    }
    x_x.length=0;
    o_o.length=0;
   
};

function fun(charr){
    sum=0;
    if(charr=="X"){
    for( i=0;i<x_x.length;i++)
    {
        sum+=x_x[i];
    }
    for( i=0;i<x_x.length;i++)
    {
        if((sum-x_x[i]) ==15){return(1);}
    }
}
else{
    for( i=0;i<o_o.length;i++)
    {
        sum+=o_o[i];
    }
    for( i=0;i<o_o.length;i++)
    {
        if((sum-o_o[i]) ==15){return(1);}
    }
}
return(2);
}
window.onclick = e => {
    target_num=e.target.innerText;
    var x = e.target.parentNode.id;
    if(x!="container"){exit(0);}
    e.target.innerText=char;
    a[char]+=matrixx[target_num];
    if(char=="X"){
    x_x.push(matrixx[target_num])}

    else{
        o_o.push(matrixx[target_num]);
    }
    if(a[char]==15){alert("%s wins",char);
    document.getElementById("game_finish").style.display="block";
    exit(0);}
    if(a[char]>15){
        if(fun(char)==1)
        {
            alert("Player wins");
            document.getElementById("game_finish").style.display="block";
            exit(0);
        }
    }
    char=(char=="X")?"O":"X";  
};