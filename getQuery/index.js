// function getQueryString (name) {
//   // console.log(window.location)
//   // console.log(window.location.search) // ?num=100
//   var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
//   if (result == null || result.length < 1) {
//       return ""
//   }
//   // console.log(result)
//   return result
// }

// let url = 'http://www.baidu.com/?uid=1000'

// console.log(getQueryString('num'))

// var str = 'For more information, see Chapter 32.4.5.1'
// var re = /see chapter \d+(\.\d)*/i
// var found = str.match(re)
// console.log(found)

// var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// var regexp = /[A-E]/gi;
// var matches_array = str.match(regexp)

// console.log(matches_array)


// var re = /(\w+)\s(\w+)/;
// var str = "John Smith".replace(re, '$2, $1');
// console.log(str)

// ^, $ 匹配字符的开头和结尾
// 最多保留2位小数的数字: /^([1-9]\d*|0)(\.\d{1,2})?$/
// 电话号码: /(\+86)?1\d{10}/
// 身份证: /^(\d{15}|\d{17}([xX]|\d))$/


// var regex = /^((\d)(\d(\d)))\1\2\3\4$/;
// var string = "1231231233";
// console.log( regex.test(string) ); // true
// console.log( RegExp.$1 ); // 123
// console.log( RegExp.$2 ); // 1
// console.log( RegExp.$3 ); // 23
// console.log( RegExp.$4 ); // 3

// console.log('iOS'.replace(/([A-Z])/g, '-$1').toLowerCase());

// function getParamName(attr) {

//   let match = new RegExp(`[?&]${attr}=([^&]*)`) //分组运算符是为了把结果存到exec函数返回的结果里
//    .exec(window.location.search)
//   //["?name=jawil", "jawil", index: 0, input: "?name=jawil&age=23"]
//   return match && decodeURIComponent(match[1].replace(/\+/g, ' ')) // url中+号表示空格,要替换掉
// }
// console.log(getParamName('num'))  // "jawil"

// http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled
// {
//   user: 'anonymous',
//   id: [123, 456],     // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
//   city: '北京',        // 中文
//   enabled: true,      // 未指定值的 key 约定值为 true
// }


function para (search) {
  if (typeof search !== 'string') return {}

  let search = search.substr(1)

  let ret = {}

  // a: 匹配的子串
  // b, c: 第n个括号匹配的字符串
  search.replace(/(\w+)(=([^&]*))*/ig, function (a, b, c) {
    ret[b] = unescape(c);
  })
  console.log(ret)
}
let search = '?num=100&n=http://www.baidu.com' || window.location.search
para()
