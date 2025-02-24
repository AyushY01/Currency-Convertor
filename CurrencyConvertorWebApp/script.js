const data=new Map();

//hashmap
//USD TO OTHER CURRENCY RATE
const fromUSD=new Map();
fromUSD.set("INR",83.0);
fromUSD.set("EUR",0.95);
fromUSD.set("GBP",0.79);

//INR TO OTHER CURRENCY RATE
const fromINR=new Map();
fromINR.set("USD",0.012);
fromINR.set("EUR",0.011);
fromINR.set("GBP",0.00095);

//EUR TO OTHER CURRENCY RATE
const fromEUR=new Map()
fromEUR.set("INR",88.0);
fromEUR.set("USD",1.05);
fromEUR.set("GBP",0.85);

//adding data to main map
data.set("USD",fromUSD);
data.set("INR",fromINR);
data.set("EUR",fromEUR);

function convertCurrency(){
let input1=document.getElementById("FirstCurrency").value;
let input2=document.getElementById("SecondCurrency").value;
let amount=parseFloat(document.getElementById("Amount").value);

let afterExchange=data.get(input1)?.get(input2);
let answer=document.getElementById("conversion");
if(input1!==" " && input2!==" "){
     answer.value=`${amount*afterExchange} ${input2}`;
    
}else{
    answer.value="Invalid Input";
}
console.log(input1,input2,amount,answer);
};





