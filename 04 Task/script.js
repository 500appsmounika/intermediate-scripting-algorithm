function whatIsInAName(collection, source) {
    let key=Object.keys(source);
    let arr=collection.filter(item=>key.every(item1=>item.hasOwnProperty(item1)&&item[item1]==source[item1]));
    console.log(arr);
    return arr;
    
    }
    let div=document.getElementById("output");
    function getOutput(){
  let obj= whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
   for(let item of obj){
    for(let value of Object.entries(item)){
    let p=document.createElement("p")
    p.innerText=value;
    div.appendChild(p);
    }
   }   
}
