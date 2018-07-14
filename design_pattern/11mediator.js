// 中介者模式
// 通过一个中介者对象，其他所有的相关对象都通过该中介者对象来通信，而不是相互引用，当其中的一个对象发生改变时，只需要通知中介者对象即可。通过中介者模式可以解除对象与对象之间的紧耦合关系
// 如有对象A, B, C, D; A 与 B, C存在一定的关系，当A发生变化时, 需要通知中介者对象即可，中介者来处理即可

// 中介者模式适用的场景：例如购物车需求，存在商品选择表单、颜色选择表单、购买数量表单等等，都会触发change事件，那么可以通过中介者来转发处理这些事件，实现各个事件间的解耦，仅仅维护中介者对象即可


var goods = {   //手机库存
  'red|32G': 3,
  'red|64G': 1,
  'blue|32G': 7,
  'blue|32G': 6,
};
//中介者
var mediator = (function() {
  var colorSelect = document.getElementById('colorSelect');
  var memorySelect = document.getElementById('memorySelect');
  var numSelect = document.getElementById('numSelect');
  return {
    changed: function(obj) {
      switch(obj){
        case colorSelect:
          //TODO
          break;
        case memorySelect:
          //TODO
          break;
        case numSelect:
          //TODO
          break;
      }
    }
  }
})();
// 监听dom元素的onchange事件
colorSelect.onchange = function() {
  mediator.changed(this);
};
memorySelect.onchange = function() {
  mediator.changed(this);
};
numSelect.onchange = function() {
  mediator.changed(this);
};
