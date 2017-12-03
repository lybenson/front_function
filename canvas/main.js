function draw() {
  var canvas = document.getElementById('tutorial');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // 绘制矩形
    // ctx.fillStyle = "rgb(200,0,0)";
    // ctx.fillRect(10, 10, 55, 50);

    // 路径绘制
    // ctx.beginPath();
    // ctx.arc(75, 75, 75, 0, 360);
    // ctx.moveTo(75, 10);
    // ctx.lineTo(10, 75);
    // ctx.lineTo(140, 75);
    // ctx.fill();

    // 贝尔赛曲线
    // ctx.beginPath();
    // ctx.moveTo(75, 25);
    // ctx.quadraticCurveTo(25, 25, 25, 62.5);
    // ctx.quadraticCurveTo(25, 100, 50, 100);
    // ctx.quadraticCurveTo(50, 120, 30, 125);
    // ctx.quadraticCurveTo(60, 120, 65, 100);
    // ctx.quadraticCurveTo(125, 100, 125, 62.5);
    // ctx.quadraticCurveTo(125, 25, 75, 25);
    // ctx.stroke();

    //二次曲线
    // ctx.beginPath();
    // ctx.moveTo(75, 40);
    // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    // ctx.fill();

    // Path2D
    // var rectangle = new Path2D();
    // rectangle.rect(10, 10, 50, 50);
    // var circle = new Path2D();
    // circle.moveTo(125, 35);
    // circle.arc(100, 35, 25, 0, 2 * Math.PI);
    // ctx.stroke(rectangle);
    // ctx.fill(circle);

    // var p = new Path2D("M10 10 h 80 v 80 h -80 Z");
    // ctx.stroke(p);


    // 画背景
    // ctx.fillStyle = '#FD0';
    // ctx.fillRect(0, 0, 75, 75);
    // ctx.fillStyle = '#6C0';
    // ctx.fillRect(75, 0, 75, 75);
    // ctx.fillStyle = '#09F';
    // ctx.fillRect(0, 75, 75, 75);
    // ctx.fillStyle = '#F30';
    // ctx.fillRect(75, 75, 75, 75);
    // ctx.fillStyle = '#FFF';
    // // 设置透明度值
    // ctx.globalAlpha = 0.2;
    // // 画半透明圆
    // for (var i = 0; i < 7; i++) {
    //   ctx.beginPath();
    //   ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    //   ctx.fill();
    // }


    //渐变色
    // var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
    // lingrad.addColorStop(0, '#00ABEB');
    // lingrad.addColorStop(0.5, '#fff');
    // //lingrad.addColorStop(0.5, '#26C000');
    // //lingrad.addColorStop(1, '#fff');

    // var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
    // lingrad2.addColorStop(0.5, '#000');
    // lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

    // // assign gradients to fill and stroke styles
    // ctx.fillStyle = lingrad;
    // ctx.strokeStyle = lingrad2;

    // // draw shapes
    // ctx.fillRect(10, 10, 130, 130);
    // ctx.strokeRect(50, 50, 50, 50);



    // ctx.font = "48px serif";
    // ctx.fillText("Hello world", 10, 50);
    // ctx.strokeText("Hello world", 10, 50);

    //文本属性
    // var text = ctx.measureText("foo"); // TextMetrics object
    // text.width; // 16;


    // 绘制图片
    // var img = new Image();   // 创建一个<img>元素
    // img.src = 'myImage.png'; // 设置图片源地址
    // img.onload = function () {
    //   ctx.drawImage(img, 0, 0);
    // }


    // ctx.fillRect(0, 0, 150, 150);   // 使用默认设置绘制一个矩形
    // ctx.save();                  // 保存默认状态

    // ctx.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
    // ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形

    // ctx.save();                  // 保存当前状态
    // ctx.fillStyle = '#FFF'       // 再次改变颜色配置
    // ctx.globalAlpha = 0.5;
    // ctx.fillRect(30, 30, 90, 90);   // 使用新的配置绘制一个矩形

    // ctx.restore();               // 重新加载之前的颜色状态
    // ctx.fillRect(45, 45, 60, 60);   // 使用上一次的配置绘制一个矩形

    // ctx.restore();               // 加载默认颜色配置
    // ctx.fillRect(60, 60, 30, 30);   // 使用加载的配置绘制一个矩形





  } else {
    alert('your brower is not support canvas');
  }
};

