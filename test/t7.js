var foo = function bar() {return 12}
// typeof foo
console.log(typeof bar) // undefined

let x = '123456789'

let reg1 = /\d{3}/g
let reg2 = /\d(?=(?:\d{3})+\b)/g

let res = x.replace(reg2, '$&,')
console.log(res)
console.log(Number(x).toLocaleString())
