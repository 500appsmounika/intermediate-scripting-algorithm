function addTogether(...args) {
    const length = args.length; 
    if(typeof args[0] == "number") {
        if(typeof args[1] == "number") {
      return args[0]+args[1];
     }; 
     }
    if(length === 1) { 
      if(typeof args[0] !== "number") {
        return undefined; 
                }
      return function(y) {
        console.log(y)
        if(typeof y !== "number") {
          return undefined; 
        }
        return args[0] + y;
      }
    }
    
  }
  function getOutput(){
  document.getElementById("output").innerText=addTogether(2,3);
  document.getElementById("output1").innerText=console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
  document.getElementById("output2").innerText=console.log(addTogether(2, "3"));
  }