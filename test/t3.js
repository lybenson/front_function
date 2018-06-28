// 去除重复元素
// input: [1，2，4，4，3，3，1，5，3]
// output: [1，3，4]

function repeat1(arr){
	var result = [], map = {};
	arr.map(num => {
    if(map[num] === 1) result.push(num);
    map[num] = (map[num] || 0) + 1;
  })
	return result;
}

function repeat2 (arr) {
  return Array.from(new Set(arr.filter((x, i, self) => {
    return self.indexOf(x) !== i
  })))
}

let input = [1, 2, 4, 4, 3, 3, 1, 5, 3]

let output = repeat1(input)
console.log(output)
