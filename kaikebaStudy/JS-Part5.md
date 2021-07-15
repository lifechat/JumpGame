# 模块化(切记：学习思想)
##  如果不用模块化编写代码，那么会具有一下问题：
+ 代码杂乱无章，没有条理性，不便与维护，不便于复用
+ 很多代码重复，逻辑重复
+ 全局变量污染
+ 不方便保护私有数据(闭包)

## 模块化的基本实现:闭包的自调用函数

``` js
    //日期控件
    let DatePicker = (function(){
        return {
            init(){

            }
        }
    }) ();

    //Header
    //  tabbar
    //  login

    //Content
    //  sidebar
    //  table

    //Footer