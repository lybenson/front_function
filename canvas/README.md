## API
以左上角为坐标原点
#### 绘制矩形
fillRect(x, y, width, height) 绘制一个填充的矩形
strokeRect(x, y, width, height) 绘制一个矩形的边框
clearRect(x, y, width, height) 清除指定矩形区域，让清除部分完全透明
rect(x, y, width, height) 绘制一个左上角坐标为（x,y），宽高为width以及height的矩形,需要调用绘制的方法

#### 绘制路径
beginPath() 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径
closePath() 闭合路径之后图形绘制命令又重新指向到上下文中 
stroke() 通过线条来绘制图形轮廓
fill() 通过填充路径的内容区域生成实心的图形
moveTo(x, y) 将笔触移动到指定的坐标上

#### 线
lineTo(x, y) 绘制一条从当前位置到指定坐标的直线

#### 圆弧
arc(x, y, radius, startAngle, endAngle, anticlockwise) 画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。
arcTo(x1, y1, x2, y2, radius) 根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点

#### 贝塞尔曲线
quadraticCurveTo(cp1x, cp1y, x, y) 绘制贝塞尔曲线，cp1x,cp1y为控制点，x,y为结束点
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) 绘制二次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点

#### Path2D对象
Path2D 用来缓存或记录绘画命令，这样能快速地回顾路径
new Path2D();     // 空的Path对象
new Path2D(path); // 克隆Path对象
new Path2D(d);    // 从SVG建立Path对象

Path2D.addPath(path [, transform])​ 添加了一条路径到当前路径(可能添加了一个变换矩阵)

先移动到点 (M10 10) 然后再水平移动80个单位 (h 80)，然后下移80个单位 (v 80)，接着左移80个单位 (h -80)，再回到起点处 (z)
var p = new Path2D("M10 10 h 80 v 80 h -80 Z"); //svg

#### 颜色
fillStyle = color 设置图形的填充颜色
strokeStyle = color 设置图形轮廓的颜色
globalAlpha = transparencyValue 图形的透明度,范围是0-1

#### 线的属性
lineWidth = value 设置线条宽度
lineCap = type 设置线条末端样式
lineJoin = type 设定线条与线条间接合处的样式
miterLimit = value 限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度
getLineDash() 返回一个包含当前虚线样式，长度为非负偶数的数组。
setLineDash(segments) 设置当前虚线样式
lineDashOffset = value 设置虚线样式的起始偏移量

#### 渐变
createLinearGradient(x1, y1, x2, y2) 渐变的起点 (x1,y1) 与终点 (x2,y2)。
createRadialGradient(x1, y1, r1, x2, y2, r2) 定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆
gradient.addColorStop(position, color) position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置, color 参数必须是一个有效的 CSS 颜色值

#### 阴影
shadowOffsetX = float 阴影在x轴方向上的偏移
shadowOffsetY = float 阴影在y轴方向上的偏移
shadowBlur = float 阴影的模糊程度
shadowColor = color 阴影颜色效果，默认是全透明的黑色

#### 绘制文本
fillText(text, x, y [, maxWidth]) 在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的
strokeText(text, x, y [, maxWidth]) 在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的

#### 文本样式
font = value 文本字体，默认的字体是 10px sans-serif。
textAlign = value 文本对齐选项.
textBaseline = value 基线对齐选项. 可选的值包括：top, hanging, middle, alphabetic(alphabetic。), ideographic, bottom
direction = value 文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。

measureText() 返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性

#### 使用图片
drawImage(image, x, y) 其中image是image或者canvas对象，x 和 y 是其在目标 canvas 里的起始坐标
drawImage(image, x, y, width, height) width 和 height 控制图片大小
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) 切片

#### 状态的保存与恢复
save() 保存 canvas 状态的
restore() 恢复 canvas 状态
Canvas状态存储在栈中，每当save()方法被调用后，当前的状态就被推送到栈中保存，每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复

#### 变形
translate(x, y) 移动 canvas 和它的原点
rotate(angle) 以原点(0, 0)为中心选择canvas
scale(x, y) 缩放canvas
transform(m11, m12, m21, m22, dx, dy) m11表示水平方向的缩放,m12表示水平方向的偏移,m21表示垂直方向上的偏移,m22表示垂直方向上的缩放,dx和dy分别表示在水平和垂直方向的位移
setTransform(m11, m12, m21, m22, dx, dy) 矩阵重置为单位矩阵，然后用相同的参数调用 transform 方法
resetTransform() 相当于调用ctx.setTransform(1, 0, 0, 1, 0, 0);

#### 动画
动画的步骤：
* 清空canvas
* 保存canvas状态
* 绘制动画图形
* 恢复canvas状态

更新画布
setInterval(function, delay) 每隔一段时间定时执行function
setTimeout(function, delay) 延迟delay毫秒执行function
requestAnimationFrame(callback) 告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画

#### 像素操作
##### ImageData对象
ImageData对象中存储着canvas对象真实的像素数据，它
包含以下几个只读属性:
* width 图片宽度,单位是像素
* height 图片高度,单位是像素
* data Uint8ClampedArray类型的一维数组，包含着RGBA格式的整型数据，范围在0至255之间
若从行50,纵200像素的位置读取像素数据则表示为：
component = imageData.data[((50*(imageData.width*4)) + (200*4)) + 2];
像素数组的大小：
var numBytes = imageData.data.length

##### 创建ImageData对象
```
// 创建了一个新的具体特定尺寸的ImageData对象。所有像素被预设为透明黑
var myImageData = ctx.createImageData(width, height);
// 创建一个被anotherImageData对象指定的相同像素的ImageData对象
var myImageData = ctx.createImageData(anotherImageData);
// 得到场景像素数据,画布的四个角落分别表示为(left, top), (left + width, top), (left, top + height), 以及(left + width, top + height)四个点
var myImageData = ctx.getImageData(left, top, width, height);
```

##### 写入像素数据
//dx和dy参数表示你希望在场景内左上角绘制的像素数据所得到的设备坐标
ctx.putImageData(myImageData, dx, dy);

改变canvas上图片的像素值：
遍历所有像素改变他们的数值，然后我们将被修改的像素数组通过putImageData()放回到画布中去
```
var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
img.onload = function() {
  draw(this);
};
function draw(img) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
  var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
  var data = imageData.data;
    
  var invert = function() {
    for (var i = 0; i < data.length; i += 4) {
      data[i]     = 225 - data[i];     // red
      data[i + 1] = 225 - data[i + 1]; // green
      data[i + 2] = 225 - data[i + 2]; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var grayscale = function() {
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i +1] + data[i +2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var invertbtn = document.getElementById('invertbtn');
  invertbtn.addEventListener('click', invert);
  var grayscalebtn = document.getElementById('grayscalebtn');
  grayscalebtn.addEventListener('click', grayscale);
}
```
##### 保存图片
canvas.toDataURL('image/png') 默认设定。创建一个PNG图片
canvas.toDataURL('image/jpeg', quality) 创建一个JPG图片。你可以有选择地提供从0到1的品质量，1表示最好品质，0基本不被辨析但有比较小的文件大小。
canvas.toBlob(callback, type, encoderOptions) 这个创建了一个在画布中的代表图片的Blob对像

#### 点击区域额无障碍访问
<canvas> 标签只是一个位图，它并不提供任何已经绘制在上面的对象的信息。 canvas的内容不能像语义化的HTML一样暴露给一些协助工具。一般来说，你应该避免在交互型的网站或者App上使用canvas
##### 内容兼容
 <canvas>标签里的内容被可以对一些不支持canvas的浏览器提供兼容
 ```
<canvas>
   <h2>Shapes</h2> 
</canvas>
 ```

##### 点击区域
addHitRegion() //在canvas上添加一个点击区域
removeHitRegion() //从canvas上移除指定id的点击区域
clearHitRegions() //移除canvas上的所有点击区域

```
var ctx = canvas.getContext("2d");
ctx.arc(70, 80, 10, 0, 2 * Math.PI, false);
ctx.fill();
ctx.addHitRegion({id: "circle"});

canvas.addEventListener("mousemove", function(event){
  if(event.region) {
    alert("hit region: " + event.region);
  }
});
```
















