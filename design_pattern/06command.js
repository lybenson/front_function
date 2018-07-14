// 命令模式
// 有时候需要向某些对象发送请求，但是并不知道请求的接受者是谁，也不知道被请求的操作是什么。此时需要用一种松耦合的方式来设计程序，使得请求的发送者和接受者能够消除彼此之间的耦合关系。


// 命令对象, 接收者, 发送者


// 命令类
var Command = function( receiver ){
  this.receiver = receiver;
  this.execute = () => {
    this.receiver.action();
  }
}

// 接收者(可以定义多个)
var Receiver = function() {
  this.action = () => {
    console.log('执行命令')
  }
}


// 发送者
var Sender = function() {
  this.send = (command) => {
    command.execute()
  }
}

var command = new Command(new Receiver())
var sender = new Sender()
sender.send(command)

// 创建命令传入接收者
// 创建发送者
// 执行发送者发送方法并传入命令
// 接收者, 发送者彼此解耦