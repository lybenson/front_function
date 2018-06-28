// -> 表示其前后的两次输出之间有 1 秒的时间间隔
// , 表示其前后的两次输出之间的时间间隔可以忽略

// 5->5,5,5,5,5
// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//       // console.log(new Date, i);
//   }, 1000);
// }
// console.log(new Date, i);


// 5->0,1,2,3,4
// for (var i = 0; i < 5; i++) {
//   (function(j) {
//     setTimeout(function() {
//       // console.log(new Date, j);
//     }, 1000);
//   })(i)
// }
// console.log(new Date, i);

// 0 -> 1 -> 2 -> 3 -> 4 -> 5
// const tasks = []
// const task = (i) => new Promise(resolve => {
//   setTimeout(() => {
//     console.log(new Date, i)
//     resolve();
//   }, 1000 * i);
// })
// for (var i = 0; i < 5; i++) {
//   tasks.push(task(i))
// }
// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(new Date, i)
//   }, 1000);
// })

// const tasks = []
// const task = (i) => new Promise(resolve => {
//   setTimeout(() => {
//     console.log(new Date, i)
//     resolve();
//   }, 1000 * i);
// })
// for (var i = 0; i < 5; i++) {
//   tasks.push(task(i))
// }
// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(new Date, i)
//   }, 1000);
// })

const sleep = (timeountMS) => new Promise((resolve) => {
  setTimeout(resolve, timeountMS);
});

(async () => {  // 声明即执行的 async 函数表达式
  for (var i = 0; i < 5; i++) {
      await sleep(1000);
      console.log(new Date, i);
  }
  await sleep(1000);
  console.log(new Date, i);
})();

