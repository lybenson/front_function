// 数组的方法

// reduce
/**
 * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 * reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值, 返回值为上一次的结果
 * 
 * total: 必需, 初始值, 或者上一次计算结束后的返回值
 * currentValue: 必需。当前元素
 * currentIndex: 当前索引
 * arr: 数组
 * initialValue: 传递给函数的初始值
 * 
 * reduceRight: 从数组最后一项开始遍历
 */

var items = [10, 120, 1000];

var total = items.reduce((sum, item, index) => sum + item, 0);
console.log(total)



// sort
/**
 * array.sort(function (v1, v2))
 * 对数组的元素进行排序
 * 根据返回值排序, 小于0 升序; 大于0 降序
 */


// reverse
/**
 * 颠倒数组中元素的顺序
 */


// map
/**
 * array.map(function(currentValue,index,arr), thisValue)
 * map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
 * currentValue: 当前元素的值
 * index 索引
 * arr 原数组
 */


// filter
/**
 * array.filter(function(currentValue,index,arr), thisValue)
 * 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素, 不会改变原数组, 返回true 表示符合条件
 * currentValue
 * index
 * arr
 * thisValue 对象作为该执行回调时使用，传递给函数，用作 "this" 的值.如果省略了 thisValue ，"this" 的值为 "undefined"
 */
var items = [10, 120, 1000];

var result = items.filter((v, i) =>  v < 1000);
console.log(result)


// every
/**
 * array.every(function(currentValue,index,arr), thisValue)
 * 检测数组所有元素是否都符合指定条件， 都符合返回true
 * 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
 */

// some
/**
 * array.some(function(currentValue,index,arr),thisValue)
 * 检测数组中的元素是否满足指定条件
 * 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测
 * 
 */