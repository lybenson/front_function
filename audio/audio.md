
> 声音是振动产生的声波，通过介质（空气或固体、液体）传播并能被人或动物听觉器官所感知的波动现象

### 音频简介
我们知道，视频由一张张的图片组成，每秒钟播放多少张图片叫做视频的帧率。
同视频的帧率类似，音频也有一个频率，称做采样率
先看看wiki上对频率的解释：
> 频率（英语：Frequency）是单位时间内某事件重复发生的次数，在物理学中通常以符号 f 或 v 表示。采用国际单位制，其单位为赫兹（英语：Hertz，简写为Hz）。设 t 时间内某事件重复发生 n 次，则此事件发生的频率为 f=n/t

对于音频而言，其频率就表示每秒声波波形(正弦波)重复的次数。也解释为每秒从连续信号中提取并组成离散信号的采样个数

注：声波是声音的传播形式

音频的描述常见于：44100HZ 16bit stereo 或者 22050HZ 8bit mono 等等.
44100HZ 16bit stereo：表示每秒钟有44100次采样，采样数据用 16 位(2字节)记录, 双声道(立体声);
22050HZ 8bit  mono: 表示每秒钟有 22050 次采样, 采样数据用 8 位(1字节)记录, 单声道;

根据音频文件的大小、采样率和采样大小计算音频文件的播放长度：
假设音频文件描述为：22050HZ 16bit stereo，大小为 424644 字节
每秒的传输速率(位速/比特率/取样率) = 22050 * 16 * 2 = 705600(bit/s) = 88200(字节/秒)
播放时间 = 424644 / 88200 = 4.8秒
> 比特率 = 采样频率 * 采样位数 * 通道数   
> 采样频率表示的是每秒获取的样本个数为22050，每个样本的大小为16位，所以每秒获取的样本大小为 22050 * 16 且由于是立体声双通道，所以最后的结果就是 22050 * 16 * 2


### 关键字解释
#### 频域
频域(frequency domain)是描述信号在频率方面特性时用到的一种坐标系。具体可以看[http://blog.jobbole.com/70549/](http://blog.jobbole.com/70549/)

### PCM和WAV
PCM（Pulse Code Modulation----脉码调制录音)。所谓PCM录音就是将声音等模拟信号变成符号化的脉冲列，再予以记录。PCM信号是由[1]、[0]等符号构成的数字信号，而未经过任何压缩处理。与模拟信号比，它不易受传送系统的杂波及失真的影响。动态范围宽，可得到音质相当好的影响效果。
WAV是一种无损的音频文件格式，WAV符合 PIFF(Resource Interchange File Format)规范。所有的WAV都有一个文件头，这个文件头音频流的编码参数。WAV对音频流的编码没有硬性规定，除了PCM之外，还有几乎所有支持ACM规范的编码都可以为WAV的音频流进行编码。

简单来说：WAV是一种无损的音频文件格式，PCM是没有压缩的编码方式。

WAV可以使用多种音频编码来压缩其音频流，不过我们常见的都是音频流被PCM编码处理的WAV，但这不表示WAV只能使用PCM编码，MP3编码同样也可以运用在WAV中，和AVI一样，只要安装好了相应的Decode，就可以欣赏这些WAV了。在Windows平台下，基于PCM编码的WAV是被支持得最好的音频格式，所有音频软件都能完美支持，由于本身可以达到较高的音质的要求，因此，WAV也是音乐编辑创作的首选格式，适合保存音乐素材。因此，基于PCM编码的WAV被作为了一种中介的格式，常常使用在其他编码的相互转换之中，例如MP3转换成WMA。
