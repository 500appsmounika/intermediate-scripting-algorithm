function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2);
  
    return newArr.filter(item=>!(arr1.includes(item)&arr2.includes(item)));
  }
  function getOutput(){
 document.getElementById("output").textContent= diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  }