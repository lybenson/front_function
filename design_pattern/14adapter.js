// 适配器模式
// 解决两个软件实体间接口不兼容的问题。使用适配器模式之后，原本由于接口不兼容而不能工作的两个软件实体可以一起工作



var googleMap = {
  show:function () {
    console.log('starting render google map')
  }
};
var baiduMap = {
  show:function () {
    console.log('starting render baidu map')
  }
};
var renderMap = function (map) {
  if(map.show instanceof Function){  //是否是Function的实例
    map.show()
  }
};
renderMap(googleMap)  // entry : starting render google map
renderMap(baiduMap)   // entry : starting render baidu map


// 若 baiduMap 提供的显示地图的方法不叫show而叫display,上面的方式就会失败，通过增加适配器来处理
baiduMap.display = function () {
  console.log('starting render baidu map')
}

var baiduAdapter = {
  show: function () {
     return baiduMap.display()
  }
}
renderMap(baiduAdapter)
