async function fetchdata(){
    let response=await fetch("https://meowfacts.herokuapp.com/");
    let data=await response.json();
    let a=document.querySelector(".DYK");
    let facts=document.createElement("p");
    facts.style.width=
    facts.innerText=data.data[0];
    a.appendChild(facts);
    console.log(facts);

}
fetchdata()
