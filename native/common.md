`typeof();`检测数据类型  
`String();`转换成字符串
`parseInt();`解析出一个 string 或 number 的整数部分  
`parseFloat();`解析出一个 string 的浮点数部分  
`Number();`把一个 string 解析为 number  
`Blooean();`转换成布尔类型""（NaN，undefined，null，0 返回 false）  
`isNaN();`判断是否为 NaN  
`isFinite();`指明所提供的数字是否是有限的（NaN 、负无穷或正无穷返回 false）

> 编码解码

`decodeURI();`对 encodeURI() 函数编码过的 URI 进行解码  
`decodeURIComponent();`可对 encodeURIComponent() 函数编码的 URI 进行解码  
`encodeURI();`把字符串作为 URI 进行编码  
`encodeURIComponent();`可把字符串作为 URI 组件进行编码

> String

`.toLowerCase();`把字符串转换为小写  
`.toUpperCase();`把字符串转换为大写  
`.charAt();`返回指定位置的字符  
`.charCodeAt();`返回指定位置的字符的 Unicode 编码  
`.fromCharCode();`接受一个指定的 Unicode 值，然后返回一个字符串  
`.indexOf();`返回某个指定的字符串值在字符串中首次出现的位置  
`.lastIndexOf();`返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索  
`.slice();`提取字符串的某个部分，并以新的字符串返回被提取的部分  
`.substring();`提取字符串中介于两个指定下标之间的字符  
`.substr();`在字符串中抽取从 start 下标开始的指定数目的字符  
`.split();`把一个字符串分割成字符串数组  
`.concat();`连接两个或多个字符串  
`.replace();`在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串  
`.match();`在字符串内检索指定的值，或找到一个或多个正则表达式的匹配  
`.search();`检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串

> Array

`.join("连接符");` 把数组中的所有元素放入一个字符串  
`.concat();`连接两个或多个数组  
`.slice();`提取字符串的某个部分，并以新的字符串返回被提取的部分  
`.splice();`从数组中添加/删除项目，然后返回被删除的项目  
`.reverse();`颠倒数组中元素的顺序  
`.sort();`对数组的元素进行排序  
`.push();`向数组的末尾添加一个或多个元素，并返回新的长度  
`.pop();`删除并返回数组的最后一个元素  
`.unshift();`向数组的开头添加一个或更多元素，并返回新的长度  
`.shift();`把数组的第一个元素从其中删除，并返回第一个元素的值

> Number

`.abs();`返回数的绝对值  
`.ceil();`对一个数进行上舍入  
`.floor();`对一个数进行下舍入  
`.max();`返回两个指定的数中带有较大的值的那个数  
`.min();`返回指定的数字中带有最低值的数字  
`.pow();`返回 x 的 y 次幂的值  
`.random();`返回介于 0 ~ 1 之间的一个随机数（parseInt(Math.random()\*(max-min+1)+min);）  
`.round();`把一个数字舍入为最接近的整数
`.toFixed();`保留 x 为小数  
`.toString("进制");`把一个 Number 对象转换为一个字符串，并返回结果

> Date

`Date();`返回当天的日期和时间  
`.getDate();`返回月份的某一天  
`.getDay();`返回表示星期的某一天的数字  
`.getMonth();`返回表示月份的数字  
`.getFullYear();`返回一个表示年份的 4 位数字  
`.getHours();`返回时间的小时字段  
`.getMinutes();`返回时间的分钟字段  
`.getSeconds();`返回时间的秒  
`.getMilliseconds();`返回时间的毫秒  
`.getTime();`返回距 1970 年 1 月 1 日之间的毫秒数  
`.setDate();`设置一个月的某一天  
`.setMonth();`设置月份  
`.setFullYear();`设置年份  
`.setHours();`设置指定时间的小时字段  
`.setMinutes();`设置指定时间的分钟字段  
`.setSeconds();`设置指定时间的秒字段  
`.setMilliseconds()；`设置指定时间的毫秒字段  
`.toLocaleString();`根据本地时间把 Date 对象转换为字符串，并返回结果  
`.toLocaleTimeString();`根据本地时间把 Date 对象的时间部分转换为字符串，并返回结果  
`.toLocaleDateString();`根据本地时间把 Date 对象的日期部分转换为字符串，并返回结果

> RegExp

`.test();`检测一个字符串是否匹配某个模式  
`.exec();`检索字符串中的正则表达式的匹配[/b][b]
