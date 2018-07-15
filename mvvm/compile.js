class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    if (this.el) {
      // 将真实dom放入内存fragment，避免频繁操作dom影响性能
      let fragment = this.node2fragment(this.el)
      // 编译提取元素节点(v-model) 和文本节点({{...}})
      this.compile(fragment)
      // 将编译好的元素放入页面
      this.el.appendChild(fragment)
    }
  }
  // 辅助方法
  isElementNode (node) {
    return node.nodeType === 1
  }
  isDirective (name) {
    return name.includes('v-')
  }

  // 核心方法
  node2fragment (el) {
    let fragment = document.createDocumentFragment()
    let firstChild
    while (firstChild = el.firstChild) {
      // 文档中的节点添加到文档片段中，就会从文档树中移除该节点
      fragment.appendChild(firstChild)
    }
    return fragment
  }
  compile (fragment) {
    // 递归获取
    let childNodes = fragment.childNodes
    Array.from(childNodes).forEach(node => {
      // 是否是元素节点, 若是元素节点, 则递归
      if (this.isElementNode(node)) {
        this.compile(node)
        this.compileElement(node)
      } else { // 文本节点
        this.compileText(node)
      }
    })
  }

  // 编译元素节点，处理v-model
  compileElement (node) {
    let attrs = node.attributes
    Array.from(attrs).forEach(attr => {
      // 判读属性名是否包含v-指令, 包含则获取对应的值放到节点中
      let attrName = attr.name
      if (this.isDirective(attrName)) {
        let expr = attr.value
        let [,type] = attrName.split('-')
        CompileUtil[type](node, this.vm, expr)
      }
    })
  }

  // 编译文本节点, 处理{{...}}
  compileText (node) {
    let expr = node.textContent

    // 匹配{{...}}
    let reg = /\{\{[^\}]+\}\}/g
    if (reg.test(expr)) { // 存在匹配的内容
      CompileUtil['text'](node, this.vm, expr)
    }
  }
}

CompileUtil = {
  // 获取data值，对象的属性 a.b.c
  getVmValue (vm, expr) {
    let exprs = expr.split('.')
    return exprs.reduce((prev, next) => {
      return prev[next]
    }, vm.$data)
  },

  // 文本节点处理
  text (node, vm, expr) {
    let updateFun = this.update['textUpdate']

    // replace多参数, 第一个参数表示匹配的整体，arg2表示第一个子表达式(正则表达式括号内的匹配内容)，arg3表示第二个子表达式...倒数第二个参数表示匹配的位置，最后一个参数是 stringObject 本身
    let value = expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
      // 添加观察者, 数据变化时 调用watch的cb
      // new Watcher(vm, expr, (newValue, oldValue) => {
      //   updateFun && updateFun(node, this.getVmValue(vm, arguments[1]))
      // })
      return this.getVmValue(vm, arguments[1])
    })
    updateFun && updateFun(node, value)
  },

  // v-model绑定的元素处理
  model (node, vm, expr) {
    let updateFun = this.update['modelUpdate']

    // 添加观察者, 数据变化时 调用watch的cb
    new Watcher(vm, expr, (newValue, oldValue) => {
      updateFun && updateFun(node, this.getVmValue(vm, expr))
    })

    node.addEventListener('input', (e) => {
      let newValue = e.target.value
      this.setVmValue(vm, expr, newValue)
    })

    updateFun && updateFun(node, this.getVmValue(vm, expr))
  },

  setVmValue (vm, expr, value) {
    let exprs = expr.split('.')
    console.log(exprs)
    return exprs.reduce((prev, next, currentIndex) => {
      if (currentIndex === expr.length - 1) {
        return prev[next] = value
      }
      return prev[next]
    }, vm.$data)
  },
  update: {
    // 文本更新
    textUpdate (node, value) {
      node.textContent = value
    },
    // 输入框更新
    modelUpdate (node, value) {
      node.value = value
    }
  }
}
