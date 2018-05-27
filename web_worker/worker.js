// 子线程代码
onmessage = function (e) {
  console.log(e.data);
  postMessage("2222")
};
