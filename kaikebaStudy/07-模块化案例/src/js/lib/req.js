require.config({
    baseUrl:"js",
    path:{
        jquery:"lib/jquery-3.3.1"
    }
})

require(["jquery"],function($){
    console.log("首页")

    $("body").append("您好");
})