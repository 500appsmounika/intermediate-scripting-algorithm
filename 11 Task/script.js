function convertHTML(str) {
    let user={
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":'&apos;'
    }
      let str1=str.split("");
      let value=str1.map(item => user[item] || item).join("");
        return value;
  }
  function getOutput(){
document.getElementById("output").innerText=convertHTML("Dolce & Gabbana");
  }