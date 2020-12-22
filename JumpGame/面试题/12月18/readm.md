### 简述一下用户从输入url到页面展示过程中，中间发生了什么
 * 

<img src="https://img-blog.csdnimg.cn/20200602141907135.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1dVNTIyOTQ4NQ==,size_16,color_FFFFFF,t_70">

+ 游览器进程
     1. 用户如输入地址栏信息
     2. 处理输入信息
     3. 开始进行游览器导航
     4. 重定向
     5. 准备渲染进程
     6. 确认文档被提交
     7. 页面加载完成
+ 网络进程
    8. 发起url请求
    9. 读取响应头信息
    10. 读取响应体数据
+ 渲染进程
    11. 提交文档
    12. 页面解析和子资源加载


   