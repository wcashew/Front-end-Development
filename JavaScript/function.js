
function sayHello() {
    console.log("Hello");
    console.log(World);
}

// 带参数的函数
function addNum(num1, num2) {
    return num1 + num2;
}
var result = addNum(10, 20);

// 函数作用域中的变量
function add() {
    var sum = 1 + 2; // 局部变量，add() 函数内使用
    console.log(sum);
}
console.log(sum); // 错误，无法调用函数中的变量

// 声明提前
console.log(a); // 不会出错，输出 undefined
var a = 100; // var 声明的变量会提前到第一个 console.log() 前，但赋值依然在这里
console.log(a);

// 按值传递
var n = 100; // 全局变量
function fun(n) { // 参数变量也是局部变量
    n -= 3; // 修改局部变量
    console.log(n); // 输出局部变量
}
fun(n); // 按值传递，输出 97
console.log(n); // 输出全局变量n 100
