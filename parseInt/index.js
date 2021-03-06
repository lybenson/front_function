function _parseInt (string, radix) {

  // 不是string和number类型返回
  if (typeof string !== "string" && typeof string !== "number") return NaN

  // 字面量方式创建 RegExp
  let reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/
  // console.log(reg.constructor)

  // radix不是number
  if (radix && (typeof radix !== "number" || reg.test(radix) || radix > 36 || radix < 2)) return NaN

  string = String(string)
  let rexp = (radix == 10) ? /(-?)([0]?)([0-9]+)/ : /(-?)([0]?[Xx]?)([0-9a-fA-F]+)/
  let a = string.match(rexp)
  let sign = a[1]
  let rawRadix = a[2]
  let rawNum = a[3]
  let result = 0
  let strArr = rawNum.split('')
  let len = strArr.length
  let numArr = []

  if (a && !radix) {
      if ( rawRadix.toUpperCase() === "0X") {
          radix = 16;
      } else if (rawRadix === "0") {
          radix = 8;
      } else {
          radix = 10;
      }
  }
  for (let i = 0; i < len; i++){
      let num;
      let charCode = strArr[i].toUpperCase().charCodeAt(0);
      if(radix <=36 && radix >= 11) {
          if (charCode >= 65 && charCode <= 90) {
              num = charCode - 55;
          } else {
              num = charCode - 48;
          }
      }  else {
          num = charCode - 48;
      }
      if (num < radix) {
          numArr.push(num);
      } else {
          return NaN
      };
  }
  if(numArr.length > 0) {
    numArr.forEach(function(item, j){
        result += item * Math.pow(radix, numArr.length-j-1);
    })
  }
  if(sign === "-"){
    result = -result;
  }
  return result
}

// 以下例子均返回15:
console.log(_parseInt("F", 16));
console.log(_parseInt("17", 8));
console.log(_parseInt("15", 10));
console.log(_parseInt(15.99, 10));
console.log(_parseInt("FXX123", 16));
console.log(_parseInt("1111", 2));
console.log(_parseInt("15*3", 10));
console.log(_parseInt("12", 13));

// 以下例子均返回 NaN:
console.log(_parseInt("Hello", 8)); // Not a number at all
console.log(_parseInt("546", 2));   // Digits are not valid for binary representations

// 以下例子均返回 -15：
console.log(_parseInt("-F", 16));
console.log(_parseInt("-0F", 16));
console.log(_parseInt("-0XF", 16));
console.log(_parseInt(-15.1, 10));
console.log(_parseInt(" -17", 8));
console.log(_parseInt(" -15", 10));
console.log(_parseInt("-1111", 2));
console.log(_parseInt("-15e1", 10));
console.log(_parseInt("-12", 13));
// 下例中也全部返回 17，因为输入的 string 参数以 "0x" 开头时作为十六进制数字解释，而第二个参数假如经过 Number 函数转换后为 0 或 NaN，则将会忽略。
console.log(_parseInt("0x11", 16));
console.log(_parseInt("0x11", 0));
console.log(_parseInt("0x11"));

// 下面的例子返回 224
console.log(_parseInt("0e0",16));
