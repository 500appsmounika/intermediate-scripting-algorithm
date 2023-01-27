function smallestCommons(arr) {
    let min=arr[0]<arr[1]?arr[0]:arr[1];
    let max=arr[0]>arr[1]?arr[0]:arr[1];
    let temp=1;
    for(let i=min;i<=max-1;i++){
      let a=temp;
      let b=i+1;
      let max1=a>b?a:b;
      while(true){
    if(max1%a==0&&max1%b==0){break;}
    max1++;
    }
    temp=max1;
      
    }
    return temp;
    }
    function getOutput(){
    document.getElementById("output").innerText=smallestCommons([1,5]);
    document.getElementById("output1").innerText=smallestCommons([2, 10]);
    }