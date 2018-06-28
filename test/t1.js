// 给String对象添加render(obj)方法
// 实现将字符串中的特定字符串替换为obj的对应属性
// 如:
// var greeting = 'My name is ${name}, age ${age}, I am a ${job.name}'
// var employee = {
//   name: 'lybenson',
//   age: 24,
//   job: {
//     name: 'programmer',
//     level: 'senior'
//   }
// }
// var result = greeting.render(employee)
// // My name is lybenson, 24, I am a programmer
// console.log(result) 


// 解决方法 1:
// String.prototype.render = function(obj) {
//   return this.replace(/\$\{(\w+|\w+\.\w+)\}/g, match => {
//     var keys = match.replace('${', '').replace('}', '').split('.')
//     return keys.reduce((acc, cv) => acc[cv], obj)
//   })
// }

// 解决方法 2:
// String.prototype.render = function (obj) {
//   with(obj) {
//     return eval('`' + this + '`')
//   }
// }

var employee = {
  name: 'lybenson',
  age: 24,
  job: {
    name: 'programmer',
    level: 'senior'
  }
}
var greeting = 'My name is ${name}, age ${age}, I am a ${job.name}'
var result = greeting.render(employee)
console.log(result)
