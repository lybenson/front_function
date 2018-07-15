class Vue {
  constructor (options) {
    this.$el = options.el
    this.$data = options.data

    // 是否存在模板
    if (this.$el) {
      // 数据劫持
      new Observer(this.$data)
      // 用数据和元素进行编译
      new Compile(this.$el, this)
    }
  }
}
