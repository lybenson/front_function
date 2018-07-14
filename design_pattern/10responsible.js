// 职责链模式
// 使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。

// 500 order
var order500 = function (orderType,pay,stock) {
  if(orderType === 1 && pay === true){
    console.log('500 rmb deposit, get 100 coupon ')
  } else {
    return 'nextSuccessor'  // unknow the next node but always pass to next.
  }
};
  
var order200 = function (orderType,pay,stock) {
  if(orderType === 2 && pay === true){
    console.log('200 rmb deposit , get 50 coupon')
  } else{
    return 'nextSuccessor'; 
  }
};

var orderNormal = function (orderType,pay,stock) {
  if(stock > 0){
    console.log('normal buy no coupon')
  } else{
    console.log('the stock lack')
  }
};


var Chain = function (fn) {
  this.fn = fn;
  this.successor = null;
}
Chain.prototype.setNextSuccessor = function (successor) {
  return this.successor = successor;
}
Chain.prototype.passRequest = function () {
  var ret = this.fn.apply(this.arguments);
  if(ret === 'nextSuccessor'){
    return this.successor && this.successor.passRequest.apply(this.successor,arguments)
  }
  return ret;
}

//现在我们把3个订单函数分别包装成职责链的节点
var chainOrder500 = new Chain(order500);
var chainOrder200 = new Chain(order200);
var chainOrderNormal = new Chain(orderNormal);

//最后把请求传递给第一个节点
chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

//最后把请求传递给第一个节点
//test
chainOrder500.passRequest(1,true,500);
chainOrder500.passRequest(2,true,500);

//通过改进，我们可以自由灵活的增加移除和链中的节点顺序，假如我们又想支持300元定金购买，那我们就在改链中增加一个节点即可：
var order300 = function () {
  // todo
};
chainOrder300 = new Chain(chainOrder300)
chainOrder500.setNextSuccessor(chainOrder300)
chainOrder300.setNextSuccessor(chainOrder200)

  
