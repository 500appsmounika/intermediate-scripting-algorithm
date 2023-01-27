
function uniteUnique(...arr) {
    let arr1=[];
      arr.filter(item=>{
            item.map(v=>
          {
            if (!arr1.includes(v))
                  arr1.push(v);
         })}
     );    
  return arr1;   
    
}

  function getOutput(){
  document.getElementById("output").textContent=uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  }