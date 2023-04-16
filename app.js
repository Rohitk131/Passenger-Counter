//document.getElementById("count").innerText=5;
let count=0;
let countEl = document.getElementById("count")
function increment(){
    count++;
    countEl.innerText = count;
}
let newString = "";
let savEL = document.getElementById("tally");
function save(){
    console.log(count);
    newString = newString + count + "-";
    savEL.innerText = newString;
    countEl.innerText = 0;
    count = 0;

}

function clearr(){
    savEL.innerText = " ";
    newString = ""
    countEl.innerText = 0;
    count = 0;
}


 


