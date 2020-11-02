/*
 * 设置画布
 */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = 750;
var height = 1200;
canvas.width = width;
canvas.height = height;
//贴图
var platforms = [];
z1 = document.getElementById("z1"),
    z2 = document.getElementById("z2"),
    cloud1 = document.getElementById("cloud1"),
    base1 = document.getElementById("base1"),
    music1 = document.getElementById("music1"),
    music2 = document.getElementById("music2"),
    video1 = document.getElementById("video1"),
    player = undefined,

    //主要参数
    platformCount = 3,
    position = 0,
    gravity = 0.3,
    animloop = undefined,
    flag = 0,
    menuloop = undefined,
    broken = 0,
    cloud_v = 1,
    score = 0,
    i = 0,
    firstRun = true,
    restart = 0
    /****
     * requestAnimFrame定时刷新,
     * 与setTimeout和setInterval不同的是
     * requestAnimationFrame不需要设置时间间隔。这有什么好处呢？
     * 为什么requestAnimationFrame被称为神器呢？
     */
window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60)
        }
})();
//地板对象
function Base() {
    this.height = 20;
    this.width = width;
    this.cx = 0;
    this.cy = 0;
    this.cwidth = 40;
    this.cheight = 20;
    this.x = 0;
    this.y = height - this.height;
    //绘制对象
    this.draw = function() {
        try {
            ctx.drawImage(base1, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height)
        } catch (e) {}
    }
}
var base = new Base(); //获取Base的实例对象
function Player() {
    this.vy = 11;
    this.vx = 0;
    this.isMoving = 0;
    this.isDead = false;
    this.width = 180;
    this.height = 310;
    this.cx = 20;
    this.cy = 0;
    this.cwidth = 90;
    this.cheight = 155;
    this.x = width / 2 - this.width / 2;
    this.y = height;
    this.draw = function() {
        try {
            if (this.vy > 0) {
                ctx.drawImage(z2, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height);
            } else {
                ctx.drawImage(z1, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height)
            }
        } catch (error) {}
    }
    this.jump = function() {
        if ($('.music_btn').hasClass('music_btn_type1')) {
            music2.play();
        } else {

        }
        this.vy = -18;
    }
}

player = new Player();
//阶梯对象
function Platform() {
    this.width = 220;
    this.height = 60;
    this.x = Math.random() * (width - this.width);
    this.y = position
    position += (height / platformCount);
    this.flag = 0
    this.state = 0;
    this.cx = 0;
    this.cy = 0
    this.cwidth = 220;
    this.cheight = 60;
    this.draw = function() {
            try {
                ctx.drawImage(cloud1, this.cx, this.cy, this.cwidth, this.cheight, this.x, this.y, this.width, this.height)
            } catch (error) {

            }
        }
        // 分数达到目标值，增加难度
    if (score > 3000) {
        this.types = [1, 2, 3]
    } else if (score > 1000) {
        this.types = [1, 2];
    } else {
        this.types = [1]
    }
    this.type = this.types[Math.floor(Math.random() * this.types.length)]
    this.moved = 0;
    if (score > 1000) {
        cloud_v = parseInt(String(score).slice(0, -3))
    }
    this.vx = Math.round(Math.random() * cloud_v) + 1;
}
for (var i = 0; i < platformCount; i++) {
    platforms.push(new Platform());
}
//init初始化game
function init() {
    var jumpCount = 0;
    firstRun = false;
    music1.play();

}
//重置
function reset() {
    hideGoMenu();
    showScore();
    player.isDead = false;
    flag = 0;
    position = 0;
    score = 0;
    base = new Base();
    player = new Player();
    platforms = [];
    for (var i = 0; i < platformCount.length; i++) {
        platforms.push(new Platform())
    }
}
//跳跃计算
function playerJump() {
    player.y += player.vy;
    player.vy += gravity
    if (player.vy > 0 && (player.x + 15 < 260) && (player.x + player.width - 15 > 155) && (player.y + player.height > 475) && (player.y + player.height < 500)) {
        player.jump();
    }
    player.x += player.vx;
    player.vx = player.isMoving;

    if ((player.y + player.height) > base.y && base.y < height) {
        player.jump();
    }
    if (player.x > width) {
        player.x = 0 - player.width;
    } else {
        if (player.x < 0 - player.width) {
            player.x = width;
        }
    }
    player.draw();
}
//音乐控制按钮
$(".music_btn").on('click', function(e) {
        if ($(".music_btn").hasClass("music_btn_type1")) {
            music1.pause();
            $(".music_btn").css("animation", "spin 1s linear");
            $('.music_btn').removeClass('music_btn_type1');
            $('.music_btn').addClass('music_btn_type2');
        } else {
            music1.play();
            $('.music_btn').css("animation", 'spin 2s infinite linear');
            $('.music_btn').removeClass('music_btn_type2');
            $('.music_btn').addClass('music_btn_type1');
        }
    })
    //隐藏得分
function hideGoMenu() {
    var menu = document.getElementById("gameOverMenu");
    menu.style.zIndex = -1;
    menu.style.visibility = "hidden";
}
//显示得分
function showScore() {
    var menu = document.getElementById("scoreBoard")
    menu.style.zIndex = 1
}
//隐藏得分
function hideScore() {
    var menu = document.getElementById("scoreBoard")
    menu.style.zIndex = -1
}
//跳转准备
function get_award() {
    location.reload();
}