function start(){
    A=document.getElementById("player1").value;
    B=document.getElementById("player2").value;
    console.log(A,B);
    document.getElementById("start").style.display="block";
    document.getElementById("start_old").style.display="none";
    document.getElementById("gme_htm").href=`./game.html?player1=${A}&player2=${B}`;
}

urlString=document.URL;
let paramString = urlString.split('?')[1];
let queryString = new URLSearchParams(paramString);

B=[];
for(let pair of queryString.entries()) {
 B.push(pair[1]);
    // console.log("Key is:" + pair[0]);
    // console.log("Value is:" + pair[1]);
}

console.log(B[0],B[1])
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

function fun(charr,p){console.log("fun",p);
    sum=0;  
    for( i=0;i<p.length;i++)
    {
        sum+=p[i];
    }
    for( i=0;i<p.length;i++)
    {
        if((sum-p[i]) ==15){return(1);}
    } return(2);
};
function fun2(charr,p)
{   console.log("fun2",p);
       var  summ=[...p];let k=p.length;let i=0;
        while(k-- > 0)
        {   
            let z=summ[i];
            const index=summ.indexOf(z);
            summ.pop();i++; 
            console.log("xxxx",summ,z,i);
            if(fun(charr,[...summ]) ==1)
                {return(1);}
            summ=[...p]
            summ.unshift(z);
            summ.pop()
           
        }   
    
    return(2);
}

window.onclick = e => {
    p=[]
    target_num=e.target.innerText;
    if(target_num=="X" || target_num=="O" ){return;}
    var x = e.target.parentNode.id;
    if(x!="container"){exit(0);}
    e.target.innerText=char;
    console.log(matrixx[target_num])
    a[char]+=matrixx[target_num];
    if(char=="X"){
    x_x.push(matrixx[target_num]);
    }
    else{
        o_o.push(matrixx[target_num]);
    }
    if(char=='X'?1:0){
        var  p=[...x_x];}
    else{ var p=[...o_o];}
    console.log(typeof p,p);
     console.log(a[char],char,x_x.length,o_o.length,fun("X",[...p]));
    if(p.length==3){
      if(p[0]+p[1]+p[2]==15){     
        alert(`${(char=='X')?B[0]:B[1]} wins` );
    document.getElementById("game_finish").style.display="block";
    exit(0);}}
    if(char=='X'?1:0){
        var  p=[...x_x];
    }
    else{var p=[...o_o];}
    if( (char=='X'?x_x.length:o_o.length)==4){
        if(fun(char,[...p])==1)
        {
            alert(`${(char=='X')?B[0]:B[1]} wins`);
            document.getElementById("game_finish").style.display="block";
            exit(0);
        }
    }
    else if(p.length==5)
    {console.log("AAA");
        if(fun2(char,[...p])==1)
        {
            alert(`${(char=='X')?B[0]:B[1]} wins`);
            document.getElementById("game_finish").style.display="block";
            exit(0);
        }

    }
  
    char=(char=="X")?"O":"X";  
};
