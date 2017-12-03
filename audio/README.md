### Web Audio API

### 音频属性
#### 采样频率
采样频率是指每秒采样多少次，采样频率越高,声音的质量也就越好,声音的还原也就越真实，但同时它占的资源比较多
#### 采样位数
即采样值或取样值，它是用来衡量声音波动变化的一个参数，也可以说是声卡的分辨率。它的数值越大，分辨率也就越高，所发出声音的能力越强
#### 通道数
即声音的通道的数目。常有单声道和立体声之分
单声道的声音只能使用一个喇叭发声(有的也处理成两个喇叭输出同一个声道的声音)
立体声可以使两个喇叭都发声(一般左右声道有分工)
#### 比特率
每秒的传输速率
比特率 = 采样频率 * 采样位数 * 通道数
#### 波特率
在数字通信中常常用时间间隔相同的符号来表示数字。这样的时间间隔内的信号称为码元，这个间隔称为码元长度
波特率：是码元传输速率单位，他说明单位时间传输了多少个码元


### AudioContext
Web Audio API以AudioContext为主，衍生出表示音源、中间处理、最终输出等的AudioNode
对于音源、中间处理与最终输出等，根据细分出的不同内容，都有对应的继承自AudioNode的对象，并且AudioNode具有与其他AudioNode对象相连接的connect方法(下面有更详细的解释)

AudioContext是一个专门用于音频处理的接口，并且工作原理是将AudioContext创建出来的各种节点(AudioNode)相互连接，音频数据流经这些节点并作出相应处理
其实AudioContext就相当于一个工厂,它不仅能够创建各种类型的音频节点,还规范了音频节点跟节点之间的连接式，规范了音频流在节点之间的传达方式

```javascript
// 实例化一个音频上下文对象
var audioCtx = new AudioContext();
// 创建音源节点
var sourceNode = audioCtx.createBufferSource();
// 创建分析节点
var analyserNode = audioCtx.createAnalyser();
// 创建增益节点
var gainNode = audioCtx.createGain();
```
AudioNode是AudioContext的基石，它可以是音频音源模块，音频播放设备模块，也可以是中间音频处理模块.
简单解释：可以想象一下家庭卡拉OK设备，DVD机就充当音频音源模块（当然一台DVD还是会包含很多对音频的处理模块的，暂且忽略），音响就充当音频播放设备模块，而家庭卡拉OK还会有一台混响器（主要用于把你的声音与背景音乐合成最终输出到音响上），这台混响器则可以充当音频处理模块，然后各个模块最终还是需要电线连接起来，最终才接在音响上。

最简单的音频上下文，音源节点直接连接到了播放设备节点上，这样你就可以播放一首你想要的音乐了 `SourceNode->DestinationNode`

音源节点：用于产生或引入一段音频信号
```javascript
// 音频原始数据节点，可通过ajax、input方式引入音频格式文件
AudioBufferSourceNode
// 音频媒体标签节点，可通过关联<audio>标签
MediaElementAudioSourceNode
// 实时音频流节点，可通过getUserMedia获取实时输入的音频流数据
MediaStreamAudioSourceNode
// 波形产生器节点，可产生自定义的波形/频率的音频信号
OscillatorNode
```
分析节点：主要用于对频谱数据的读取，以便可是实现一些可视化的交互
```javascript
// 音频信号分析节点
AnalyserNode
// js处理节点，该节点因性能问题，目前处于废弃状态，后续逐步由`AudioWorkerNode`代替
ScriptProcessorNode
// 能实现与`ScriptProcessorNode`一样的功能，不过音频处理代码会放到单独的一个外部文件由浏览器端引入，而该文件的执行也由浏览器端新开独立进行去执行，不会影响主线程
AudioWorkerNode
```
音频处理节点：该类节点大都是具有某种效果的处理能力，可以对输入的音频信号进行一些处理
```
// 增益节点
GainNode
// 滤波器节点
BiquadFilterNode
// 延时节点
DelayNode
...
```
播放设备节点：主要用于播放最终处理完的音频信号
```javascript
// 实时音频流播放设备节点
MediaStreamAudioDestinationNode
AudioDestinationNode
```

### 分析节点AnalyserNode
属性：
fftSize: 用于确定频域的 FFT (快速傅里叶变换) 的大小, 默认为2048
frequencyBinCount: 值为fftSize的一半. 这通常等于将要用于可视化的数据值的数量.
方法：
AnalyserNode.getFloatFrequencyData() //将当前频域数据拷贝进Float32Array数组
AnalyserNode.getByteFrequencyData() //将当前频域数据拷贝进Uint8Array数组
AnalyserNode.getFloatTimeDomainData() //将当前波形，或者时域数据拷贝进Float32Array数组
AnalyserNode.getByteTimeDomainData() //将当前波形，或者时域数据拷贝进 Uint8Array数组
```
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = new AudioContext(); //实例化AudioContext对象

# 属性
audioContext.currentTime; //只读,返回运行的时间,一旦创建AudioContext就会从0开始计时,无法停止、暂停或者重置
audioContext.destination; //只读,返回AudioDestinationNode对象,表示当前AudioContext中所有节点的最终节点，一般表示音频渲染设备
audioContext.listener; //只读,返回AudioListener对象，用于3D音频空间化
audioContext.sampleRate; //只读,返回采样率,同一个AudioContext中的所有节点采样率相同，所以不支持采样率转换。
audioContext.state; //只读,返回AudioContext当前状态.
audioContext.mozAudioChannelType; //只读,返回一个 Firefox OS 设备上将会播放的音频声道.

# 方法
audioContext.resume(); //重新启动一个已被暂停的音频环境
audioContext.suspend(); //暂停音频内容的进度.
audioContext.close(); //关闭一个音频环境, 释放任何正在使用系统资源的音频.
audioContext.createBuffer(); //创建一个空的AudioBuffer 对象, 并且能够通过 AudioBufferSourceNode来进行数据填充和播放.
audioContext.createConstantSource(); //创建一个ConstantSourceNode 对象, 它持续输出一个连续的单声道
audioContext.createBufferSource(); //创建一个 AudioBufferSourceNode 对象, 他可以通过AudioBuffer对象来播放和处理包含在内的音频数据
audioContext.createMediaElementSource(); //创建一个MediaElementAudioSourceNode接口来关联HTMLMediaElement. 这可以用来播放和处理来自<video>或<audio> 元素的音频.
audioContext.createMediaStreamSource(); //创建一个MediaStreamAudioSourceNode接口来关联可能来自本地计算机麦克风或其他来源的音频流MediaStream.
audioContext.createMediaStreamDestination(); //创建一个MediaStreamAudioDestinationNode接口来关联可能储存在本地或已发送至其他计算机的MediaStream音频.
audioContext.createScriptProcessor(); //创建一个可以通过JavaScript直接处理音频的ScriptProcessorNode.
audioContext.createStereoPanner(); //创建一个使用立体声的音频源StereoPannerNode.
audioContext.createAnalyser(); //创建一个AnalyserNode，它可以用来显示音频时间和频率的数据
audioContext.createBiquadFilter(); //创建一个BiquadFilterNode，它代表代表一个双二阶滤波器，可以设置几种不同且常见滤波器类型：高通、低通、带通等
audioContext.createChannelMerger(); //创建一个ChannelMergerNode，它被用于从多个音频流信道结合成一个单一的音频流
audioContext.createChannelSplitter(); //创建一个ChannelSplitterNode，它用于访问的音频流的单独的通道并分别对他们进行处理
audioContext.createConvolver(); //创建一个ConvolverNode，它可用于混合效果，比如说混响效果
audioContext.createDelay(); //创建一个DelayNode，它可以通过一定量的延迟传入音频信号，它也被用做创建一个反馈回路
audioContext.createDynamicsCompressor(); //创建一个DynamicsCompressorNode, 它可用于声学的音频信号的压缩
audioContext.createGain(); //创建一个GainNode,它可以控制音频的总音量
audioContext.createIIRFilter(); //创建一个IIRFilterNode，它可以将一个二阶滤波器配置为多种不同的通用滤波器类型
audioContext.createOscillator(); //创建一个OscillatorNode, 它表示一个周期性波形，基本上来说创造了一个音调
audioContext.createPanner(); //创建一个PannerNode, 它为音源创建一个3D音源环境
audioContext.createPeriodicWave(); //创建一个PeriodicWave, 创建一个用来定义 OscillatorNode 的周期波形
audioContext.createWaveShaper(); //创建一个 WaveShaperNode, 它被用于创建非线性失真效果
audioContext.createAudioWorker(); //创建一个AudioWorkerNode, 它可以通过使用woker来产生，处理，或直接分析音频. 
audioContext.decodeAudioData(); //从ArrayBuffer对象中异步解码音频文件

```

### 兼容性
