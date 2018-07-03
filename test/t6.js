let el = document.getElementById('app')

let rect1 = el.getBoundingClientRect()
let rect2 = el.getClientRects()
console.log(rect1) // DOMRect {x: 8, y: -20, width: 300, height: 300, top: -20, …}
console.log(rect2) // DOMRectList {0: DOMRect, length: 1}


let el2 = document.getElementById('text')

let rect11 = el2.getBoundingClientRect()
let rect21 = el2.getClientRects()
console.log(rect11) // DOMRect {x: 8, y: -20, width: 300, height: 300, top: -20, …}
console.log(rect21) // DOMRectList {0: DOMRect, length: 1}


// getBoundingClientRect用于获取某个元素相对于视窗的位置集合
// getBoundingClientRect 和 getClientRects: 对于 块级元素 来说，这两个其实没有什么区别的，关键是对于 内联元素 这两个有明显的区别。简单的说就是 内联元素 不在一行的时候每行都会产生一个矩形范围，而 getBoundingClientRect 并不会