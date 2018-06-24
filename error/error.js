window.onerror = function(msg, url, row, col, error){
  console.log('msg=', msg)
  console.log('url=', url)
  console.log('row=', row)
  console.log('col=', col)
  console.log(error)

  let stack = error.stack.replace(/\n/gi, '')            // 去掉换行，节省传输内容大小
    .replace(/\bat\b/gi, '@')       // chrome中是at，ff中是@
    .split('@')                     // 以@分割信息
    .slice(0, 10)                    // 最大堆栈长度（Error.stackTraceLimit = 10），所以只取前10条
    .map(v => v.replace(/^\s*|\s*$/g, ''))  //去除多余空格
    .join('~')                      // 手动添加分隔符，便于后期展示
    .replace(/\?[^:]+/gi, '');      // 去除js文件链接的多余参数(?x=1之类)
  let errorString = error.toString();
  if (stack.indexOf(msg) < 0) {
    stack = errorString + '~' + stack;
  }
  console.log(stack)
}

console.log(x)
