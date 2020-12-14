# BFC详解

## 一、何为BFC
  BFC（Block Formatting Context）格式化上下文，是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。
## 形成BFC的条件
 1. 浮动元素，float 除 none 以外的值；
 2. 定位元素，position（absolute，fixed）； 
 3. display 为以下其中之一的值 inline-block，table-cell，table-caption； 
 4. overflow 除了 visible 以外的值（hidden，auto，scroll）；
    
### 