function truthCheck(collection, pre) {
 
    return collection.every(item=> item[pre]);;
  }
  function getOutput(){
  document.getElementById("output").innerText=truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
  document.getElementById("output1").innerText=truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name") ;
  }
  
  
