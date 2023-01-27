function pairElement(str) {
    let obj={
      "A":"T",
       "T":"A",
       "C":"G",
       "G":"C"  
    }
    return str.split("").map(item=>[item,obj[item]]);
  }
  function getOutput(){
  document.getElementById("output").textContent=pairElement("GCG");
  }