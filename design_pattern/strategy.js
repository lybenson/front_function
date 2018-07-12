// 策略模式
// 定义一系列的算法，把他们一个个封装起来，并且使他们可以相互替换
// 策略模式的目的就是将算法的实现和算法的使用分离开来


/*策略类*/
var levelOBJ = {
  "A": function(money) {
      return money * 4;
  },
  "B" : function(money) {
      return money * 3;
  },
  "C" : function(money) {
      return money * 2;
  } 
};
/*环境类*/
var calculateBouns = function(level,money) {
  return levelOBJ[level](money);
};
console.log(calculateBouns('A',10000)); // 40000
