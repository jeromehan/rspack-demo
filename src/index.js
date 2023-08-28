import { answer } from './answer';
const CountUp = require('countup.js');
console.log(CountUp);
function render() {
  document.getElementById(
    'root'
  ).innerHTML = `the answer to the universe is ${answer}`;
}
render();
let options = {
  startVal: 20, // 开始的数字  一般设置0开始
  decimalPlaces: 2, // number类型 小数位，整数自动添.00
  duration: 5, // number类型 动画延迟秒数，默认值是2
  useGrouping: true, // boolean类型  是否开启逗号，默认true(1,000)false(1000)
  useEasing: true,  // booleanl类型 动画缓动效果(ease),默认true
  smartEasingThreshold: 500, // numberl类型 大于这个数值的值开启平滑缓动
  smartEasingAmount: 300, // numberl类型
  separator: ',',// string 类型 分割用的符号
  decimal: '.', // string 类型  小数分割符合
  prefix: '￥', // sttring 类型  数字开头添加固定字符
  suffix: '元', // sttring类型 数字末尾添加固定字符
  numerals: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']  // Array类型 替换从0到9对应的字，也就是自定数字字符了,数组存储
}


var countUp = new CountUp('root', 2000, options);
if (!countUp.error) {
  // 事件
  countUp.start(); // 启动
  countUp.pauseResume(); // 暂停或者恢复  如果在运行状态触发该方法则暂定，暂定状态再触发则恢复。
  countUp.reset(); // 重置
  countUp.update(989); // 更新最终值
} else {
  console.error(countUp.error);
}

