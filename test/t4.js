var test = (function(a){
  this.a = a;
  return function(b){
      return this.a + b;
  }
}(function(a,b){
  return a;
}(1,2)));
console.log(test(1));

function x(){}(xczxc)
