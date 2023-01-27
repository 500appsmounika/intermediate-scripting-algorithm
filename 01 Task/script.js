function sumAll(arr) {
    let a=arr[0]<arr[1]?arr[0]:arr[1];
    let b=arr[0]>arr[1]?arr[0]:arr[1];
    let sum=0;
    for(let i=a;i<=b;i++){
  sum+=i;
    }
    return sum;
  }
  function getOutput(){
  document.getElementById("output").innerText=sumAll([1, 4]);
  }