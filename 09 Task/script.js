function fearNotLetter(str) {
    let letters="abcdefghijklmnopqrstuvwxyz";
    let start=letters.indexOf(str[0]);
    let end=letters.indexOf(str[str.length-1]);
    let index=0;
    let missing='';
    for(let i=start;i<end;i++){
    
   if(letters[i]==str[index]){
     index++;
   }else{
    missing=letters[i];
    return missing;
   }
    }
  
   }
  
   function getOutput(){
  document.getElementById("output").innerText= fearNotLetter("abce");
  document.getElementById("output1").innerText= fearNotLetter("abcdefghijklmnopqrstuvwxyz");
  document.getElementById("output2").innerText= fearNotLetter("stvwx");

   }