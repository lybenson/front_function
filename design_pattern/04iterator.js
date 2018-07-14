// 迭代器模式
// 提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示

var each = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(arr[i], i, arr[i])
  }
}

each([1, 2, 3], function (i, n) {
  console.log([i, n])
})
