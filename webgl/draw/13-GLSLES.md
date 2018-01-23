
GLSL ES编程语言是在OpenGL着色器语言(GLSL)的基础上, 删除和简化一部分功能后形成的

gl_Position
gl_FragColor

基本类型：
float
int
bool

类型转换：
int(float)
int(bool)
float(int)
float(int)
bool(int)
bool(float)

矢量和矩阵类型：
1. 矢量
vev2 vec3 vec4  具有2、3、4个浮点数元素的矢量
ivec2 ivec3 ivec4 具有2、3、4个整型数元素的矢量
bvec2 bvec3 bvec4 具有2、3、4个布尔值元素的矢量
创建矢量: 
vec3 v3 = vec3(1.0, 2.0, 3.0)
vec2 v2 = vec2(v3) 使用v3的前两个元素
vec4 v4 = vec4(1.0) v4设为(1.0, 1.0, 1.0, 1.0)

访问元素: 使用点运算符或[]运算符. 任何矢量的x, r, s 分量都会返回第1个分量. y、g
t 分量都会返回第2个分量
float f = v3.x = v3.r = v3.s;
vec v2 = v3.yz v2取v3的yz分量

2. 矩阵
mat2 mat3 mat4 2x2、3x3、4x4的浮点数元素的矩阵(分别具有4, 9, 16个元素)
创建矩阵: 
mat4 m4 = mat4(1.0, 2.0, 3.0, 4.0,
               5.0, 6.0, 7.0, 8.0,
               9.0, 10.0, 11.0, 12.0,
               13.0, 14.0, 15.0, 16.0);
访问矩阵:
float m23 = m4[1][2]; 访问第2列中的第3个元素 7.0
float m32 = m4[2].y; 访问第3列中的第2个元素 10.0

结构体: 自定义类型
struct light {
  vec4 color;
  vec3 position;
}
light l1, l2;

数组：只支持一维数组
float floatArray[4];
vec4 vec4Array[2];

取样器(纹理)：
类型：sampler2D |  samplerCube 只能是uniform变量

条件控制 if和if-else

循环 for

函数： 返回类型 函数名(参数) {... return 返回值;}

内置函数
- 角度函数 radians(角度转弧度) degrees(弧度转角度)
- 三角函数 sin con tan asin acos atan
- 指数函数 pwd sqrt ... 
- 通用函数 abs min max mod ...
- 几何函数 length(矢量长度) distance(两点间距) ...
- 矩阵函数 matrixCmpMult(逐元素乘法)
- 矢量函数 equal(逐元素相等) ...
- 纹理查询函数 texture2D(在二维纹理中获取纹素)


const变量：值不能被改变
attribute变量：只能出现在顶点着色器, 用来表示逐顶点的信息
uniform变量：全局变量, 可用在顶点和片元着色器中
varying变量: 全局变量, 用来从顶点着色器向片元着色器传递数据

精度限定字：
目的是帮助着色器提高运行效率, 削减内存开支。用来表示每种数据具有的精度。高精度需要更大的开销。
WebGL支持三种精度：
- hignp 高精度
- mediump 中精度
- lowp 低精度
使用：
precision mediump float; 所有浮点数默认为中精度
precision highp int; 所有整型数默认为高精度

预处理指令：
用来在编译前对代码预处理

```
#ifdef GL_ES
precision mediump float;
#endif
```
检查是否已定义GL_ES宏, 如果是, 则执行#ifdef和#endif之间的代码
