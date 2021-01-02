
/* var let 用于声明变量
   var 声明的范围是函数作用域
   let 声明的范围是块作用域
   const 用于声明常量 声明时必须赋值
   let const 是 ECMAScript 6 新增加 */
var name = "XZ.PP";
let bookNum = 0;
const firstName = "Wang";

/* 数据类型包括：原始类型（基本类型）和引用类型
   原始类型有：number string boolean null undefined */
// number 类型
var num1 = 123;
var num2 = 0123;
var num3 = 0x123;
var num4 = 3.1415;

// string 类型
var bookeName = "平凡的世界"
"张".charCodeAt.toString(16) // 查看字符“张”的十六制 汉字起始字符为：\u4e00 结束字符为：\u9fa5

// boolean 类型
var result1 = true;
var result2 = false;

// null 声明对象未赋值
// undefined 声明变量未赋值；访问对象不存在的属性


// 类型转换
// toString() 方法 将任意类型的数据转换为 string 类型
var roomNum = 15;
roomNum.toString();

/* parseInt() 函数可以获取数据的整数部分
   从左至右依次转换，碰到第一个非整数字符则停止转换。
   如果第一个字符就是非整数字符，则结果为 NaN parseFloat() 同理*/
var float = 3.1415;
var floatParseInt = parseInt(float);

// Number() 将字符串解析为 number 如果包含非法字符则返回 NaN
var strToNum = Number("111122223333");

// 自增与自减
i++; // 相当于 i = i + 1
i--; // 相当于 i = i - 1

i = 1;
j = i++; // i 为 2，j 为 1。先将 i 的结果赋值给 j 再进行自增运算

a = 1;
b = ++a; // a 和 b 的值都为 2。先进行自增运算，再将 a 的值赋给 b

// isNaN() 函数判断数据是否为数字。是数字类型则返回 false;不是数字类型则返回 true

// 三目运算
var age = 20;
var msg = age > 18? "成年人": "未成年人"; // 如果表达式1为true，则执行表达式2并返回结果。如果表达式1为false，则执行表达式3并返回结果。


