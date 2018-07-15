// 观察者
// 给需要变化的元素增加一个观察者，当数据变化后，执行对应的方法
class Watcher {
  constructor (vm, expr, cb) {
    this.vm = vm
    this.expr = expr
    this.cb = cb

    // 获取旧值
    this.value = this.get()
  }
  getVmValue (vm, expr) {
    let exprs = expr.split('.')
    return exprs.reduce((prev, next) => {
      return prev[next]
    }, vm.$data)
  }

  get () {
    Dep.target = this
    let value = this.getVmValue(this.vm, this.expr)
    Dep.target = null
    return value
  }

  update () {
    let newValue = this.getVmValue(this.vm, this.expr)
    let oldValue = this.value

    // 新旧值不同, 调用callback
    if (newValue !== oldValue) {
      this.cb(newValue, oldValue)
    }
  }
}


