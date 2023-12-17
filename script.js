let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const usersc=document.querySelector("#userscore");
const compsc=document.querySelector("#computerscore");

const score=(userwin)=>{
    if(userwin){
        userscore++;
    usersc.innerText=userscore;
    }
    else{
        compscore++;
        compsc.innerText=compscore;
    }
}

const compgen=()=>{
    const options=["rock","paper","scissors"]
   const genscore= Math.floor(Math.random()*3);
   return options[genscore];
}

const draw=()=>{
msg.innerText="draw! play again";
msg.style.backgroundColor="black";
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin)
    {
       msg.innerText=`you won! ${userchoice} beats ${compchoice}`;
       msg.style.backgroundColor="green";
    }
    else{
        msg.innerText=`computer won! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const play=(userchoice)=>{
    const compchoice=compgen();
    if(userchoice==compchoice)
    draw();
    else
    {
        let userwin=true;
        if(userchoice=="rock")
        {
           userwin=compchoice=="paper"?false:true;
        }
        else if(userchoice=="paper")
        {
            userwin=compchoice=="scissors"?false:true;
        }
        else
        {
        userwin=compchoice=="rock"?false:true;
        }
    showwinner(userwin,userchoice,compchoice);
    score(userwin);
    }
};

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
  const userchoice=choice.getAttribute("id");
  play(userchoice);
  });
});