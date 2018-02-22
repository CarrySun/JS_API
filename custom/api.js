/*
* 随机生成十六进制颜色
* 随机生成ffffff以内16进制数
* while循环判断hex位数，少于6位前面加0凑够6位
* 返回'#'开头16进制颜色
*/

function randomColor() {
  var hex = Math.floor(Math.random() * 16777216).toString(16);
  console.log(hex);
  while (hex.length < 6) {
    hex = "0" + hex;
  }
  return `#${hex}`;
}
