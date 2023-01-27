function steamrollArray(arr) {
    let arr1=[];
    arr.map(item=>{
          if(Array.isArray(item)){
        arr1=arr1.concat(steamrollArray(item));
             }else{
               arr1.push(item);
                  }
        
          })
  
    return arr1;
  }
  function getOutput(){
 document.getElementById("output").innerText= steamrollArray([1, [2], [3, [[4]]]]);
 document.getElementById("output1").innerText=  steamrollArray([1, {}, [3, [[4]]]]);
  }