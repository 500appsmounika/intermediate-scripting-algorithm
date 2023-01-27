function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
   let arr1=arr.map(item=>{
      let earth=earthRadius+item.avgAlt;
      let orbitalPeriod=Math.round(2*Math.PI*Math.sqrt(Math.pow(earth,3)/GM));
      delete item.avgAlt;
       
    item.orbitalPeriod=orbitalPeriod;
      return item;
   }
    );
  
    return arr1;
  }
let div =  document.getElementById("output");
function getOutput(){
let obj = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
for(let item of obj){
   
    for (let value of Object.entries(item)) {
    
        let p = document.createElement("p")
       p.innerText = value;
       div.appendChild(p);
      }
}
}
