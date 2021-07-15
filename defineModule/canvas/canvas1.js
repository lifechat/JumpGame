

(function(){
    var body = document.getElementsByTagName("body")[0]
    body.style.margin = 0;
    body.style.padding = 0;
    var canvas = document.querySelector("canvas");
    console.log(canvas);

    // canvas.setAttribute("height","400");
    // canvas.setAttribute("width","400");
    canvas.width = window.innerWidth;
    canvas.height= window.innerHeight;



    canvas.style.background = "skyblue";


    var ctx = canvas.getContext('2d');

   
    ctx.fillStyle = 'rgba(255,0,0,0.5)'

    ctx.fillRect(10,10,100,100);

    ctx.fillStyle = 'rgba(0,255,0,0.5)'

    ctx.fillRect(150,50,200,200);

    ctx.fillStyle = 'rgba(255,0,255,0.5)'
    
    ctx.fillRect(800,200,300,300)
    
    ctx.fillStyle = 'rgba(255,255,0,0.5)'

    ctx.fillRect(800,800,100,100)

    // line
    ctx.beginPath();//开始画线

    ctx.moveTo(0,canvas.height/2);
    ctx.lineTo(canvas.width,canvas.height/2);
    
    ctx.strokeStyle = "red";
    ctx.stroke();


    // 画一个实心圆
    ctx.fillStyle = "green";
    ctx.arc(canvas.width/2,canvas.height/2,400,Math.PI*2,false);
    ctx.stroke();
    ctx.fill();


    for(var i = 0;i<100;i++){
        var x = Math.random()*window.innerWidth;
        var y = Math.random()*window.innerHeight;

        ctx.beginPath();
        ctx.arc(x,y,40,0,Math.PI*2,false);
        ctx.strokeStyle = 'blue';
        ctx.stroke();
    }
})()