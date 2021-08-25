  function a(n,arr) {
    if(n === 0) {
      return [];
    }
    else {
      if(n >= arr[0]) {
        var t = n - arr[0];
        return [arr[0]].concat(a(t,arr));
      }
      else {
        arr.shift();
        return a(n,arr);
      } 
    }
  }
console.log(a(5,[2,1]));