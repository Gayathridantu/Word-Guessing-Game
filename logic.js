const words=["happy","sad","love","hate","good","bad"];
let random=Math.floor(Math.random()*words.length);
let selected=words[random];
console.log(selected);
let display="";
for(let i=0;i<selected.length;i++){
    display+='_ '
}
const displayword=document.querySelector("#display");
displayword.textContent=display;

list=[];
function guess(){
    let guess=document.querySelector("#input-ele");
    //let letter=guess.value.toLowerCase();
    //guess.value="";
    list.push(guess.value)
    let ud="";
    let guessed=true;
    for(let i=0;i<selected.length;i++){
         if(list.includes(selected[i])){
             ud+=selected[i]+" ";
         }
         else{
             guessed=false;
             ud+="_ "
         }
    }
    displayword.textContent=ud; 
    if(guessed){
        alert("Congratualation u guessed it correct");
    }
 }