function dropElements(arr, func) {
  let arr1=[];let count=0;
  arr.map(item=>{
    let value=func(item);
    if(value){
      count++;}
      if(count>0){
      arr1.push(item);
       return arr1;
      }
    
});
 return arr1;
 
}
  function getOutput(){
  document.getElementById("output").textContent=dropElements([1, 2, 3], function(n) {return n < 3; });
  document.getElementById("output1").textContent=dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
  document.getElementById("output2").textContent=dropElements([0, 1, 0, 1], function(n) {return n === 1});
  }

