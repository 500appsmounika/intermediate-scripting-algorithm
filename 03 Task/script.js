function destroyer(arr) {
  
    let a;
     [,...a]=arguments;
   
       return arr.filter(item=>!(a.includes(item)));
   }
   function getOutput(){
   document.getElementById("output").textContent=destroyer([1, 2, 3, 1, 2, 3], 2, 3);
   }