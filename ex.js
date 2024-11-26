//example for closure pakage
function example(){
    function add(a, b){
        let c = a+b;//remember to use the "let" to avoid 
        return c;
    }
    return {add};
}
const tr1 = example();
console.log(tr1.add(3,4));

//what if I want to define more than one function
function example2(){
    function divided(a,b){
        let c = a/b;
        return c;
    }
    function times(a, b){
        let c = a * b;
        return c;
    }
    return{
        divided,
        times
    }
}
const tr2 = example2();
console.log(tr2.divided(12,3));
console.log(tr2.times(5,8));
//a better way if I don't want to "const variables = function()"
const e3 =(function() {
    function divided(a, b) {
        let c = a / b; 
        return c;
    }
    function times(a, b) {
        let c = a * b; 
        return c;
    }
    function add(a, b) {
        let c = a + b; 
        return c;
    }
    return{ 
        divided,
        times,
        add
    };
})();

console.log(e3.add(7, 8));
//but in html, do this(from https://github.com/qianguyihao/Web/blob/master/04-JavaScript%E5%9F%BA%E7%A1%80/26-%E9%97%AD%E5%8C%85.md)
/*
(function () {
    //私有数据
    var msg = 'Qinguyihao Haha'

    //操作私有数据的函数
    function doSomething() {
        console.log('doSomething() ' + msg.toUpperCase())
    }

    function doOtherthing() {
        console.log('doOtherthing() ' + msg.toLowerCase())
    }

    //外部函数是即使运行的匿名函数，我们可以把两个方法直接传给window对象
    window.myModule = {
        doSomething1: doSomething,
        doOtherthing2: doOtherthing
    }
})()
*/