function opt () {
  console.log(arguments.toString())
  console.log(Object.prototype.toString.call(arguments))
  console.log(arguments)
  console.log(arguments[0])
  console.log(arguments.length)
  console.log(arguments.callee)
}

var x = () => {
  console.log(arguments[0])
}

opt(10, 100, 1000)
// x(190, 100, 200)

// arguments对象是所有（非箭头）函数中都可用的局部变量，其类型为Arguments
// arguments[index] 获取参数值
// arguments.length 获取参数个数
// arguments.callee 当前执行的函数

/**
 * arguments转换为数组的方法:
 * 1. Array.from(arguments)
 * 2. Array.prototype.slice.call(arguments)
 * 3. [].slice.call(arguments)
 */ 
