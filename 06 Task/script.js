function translatePigLatin(str) {
    let vowel=['a','e','i','o','u'];
    let consonant='';
    for(let i=0;i<str.length;i++){
     if(vowel.some(item=>item==str[i])){break;}
        else{consonant+=str[i];}}
    if(consonant==''){
   return str.concat("way");
    }else {
      return str.slice(consonant.length)+consonant+"ay";
    }
    }
  
 function getOutput(){
  document.getElementById("output").textContent=translatePigLatin("consonant");
  
  }