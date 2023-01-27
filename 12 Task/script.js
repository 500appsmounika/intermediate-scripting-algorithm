function sumFibs(num) {
    let first=1;
    let second=1;
    let sum=1;
    let d;
    while(second<=num){
    if(!(second%2==0)){
    sum+=second;
    }
    d=second;
    second=first+second;
    first=d;
    }
    return sum;
    }
    function getOutput(){
    document.getElementById("output").innerText=sumFibs(4);
}