	function sumPrimes(num) {
    	    let count=0;let sum=0;
        for(let x=2;x<=num;x++){
            count=0;
    	      for(let y=1;y<=x;y++){
    	        if(x%y==0){
    	          count++;
    	            }
    	        }
                if(count==2){
                  
    	           sum+=x;
    	      }
    	    } 
    	   return sum;
    	  }
  function getOutput(){
  document.getElementById("output").textContent=sumPrimes(10);
  document.getElementById("output1").textContent=sumPrimes(977);
}