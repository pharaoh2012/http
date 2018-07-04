var serverip=null;
var zoom=3;
var q=20;
(function(){
    var s = localStorage.getItem("setting");
    if(s) {
        s = JSON.parse(s);
        zoom = s.zoom;
        q = s.q;
    }
})()
var c=document.getElementById("imgCanvas");
var ctx=c.getContext("2d");
var $imgCountDiv = $("#imgCountDiv");
var moreButton= document.getElementById('moreButton');

var imgTimeCount=0;
var imgTimeId = 0;

$.get("https://wd4728059645djfskw.wilddogio.com/app/ip.json",function(ip){
    serverip = ip;
    loadImage();
    console.info(ip);
});

function getServerUrl() {
    return "http://"+serverip+":17701/";
}

function loadImage() {
    if(imgTimeId) {
        clearInterval(imgTimeId);
    }
    imgTimeCount = 0;
    imgTimeId = setInterval(function(){
        imgTimeCount++;
        showImageCount();
    },1000);
    var imgUrl = getServerUrl() + "/cmd?cmd=getimg&zoom="+zoom+"&q="+q+"&r="+ Date.now();
    var img = new Image();
    img.src = imgUrl;
    img.onload = function(e) {
        if (imgTimeId) {
            clearInterval(imgTimeId);
            imgTimeCount = 0;
            showImageCount();
        }
        //$(c).width(img.width).height(img.height);
        c.width = img.width/window.devicePixelRatio * zoom;
        c.height = img.height/window.devicePixelRatio * zoom;
        ctx.drawImage(img,0,0,c.width,c.height);
    }
    img.onerror = function(e){
        loadImage();
    }
}

function showImageCount() {
    if(imgTimeCount>0) {
        $imgCountDiv.text(imgTimeCount).show();
    } else {
        $imgCountDiv.hide();
    }
}



var mouseStatus = {
    down:0,
    x:0,
    y:0
}


// c.addEventListener('click',  function(e){
//     console.info("click",e);
//     //alert(e.offsetX*window.devicePixelRatio+","+e.offsetY*window.devicePixelRatio);  //355,284
// }, false);

//alert(screen.width+ ","+ window.devicePixelRatio);


// var lastY = 0;

// window.addEventListener('touchmove', function (e) {
//     var scrolly = window.pageYOffset || window.scrollTop || 0;
//     var direction = e.changedTouches[0].pageY > lastY ? 1 : -1;

//     if (direction > 0 && scrolly === 0) {
//         e.preventDefault();
//     }
//     lastY = e.changedTouches[0].pageY;
// }, {passive: false});

if('ontouchstart' in document.documentElement) {
    var af = new AlloyFinger(document.getElementById('imgCanvas'), {
        touchStart: function (e) { 
            console.info("touchStart",e);
            mouseStatus = {
                down:1,
                x:e.changedTouches[0].pageX*window.devicePixelRatio,
                y:e.changedTouches[0].pageY*window.devicePixelRatio
            }  
        },
    //    touchMove: function (e) { console.info("ee");},
        touchEnd:  function (e) {
            mouseStatus.down = 0;
            mouseStatus.ex = e.changedTouches[0].pageX*window.devicePixelRatio;
            mouseStatus.ey = e.changedTouches[0].pageY*window.devicePixelRatio;
            console.info('touchEnd',e);
         },
        touchCancel: function (e) { console.info("touchCancel");},
        multipointStart: function (e) {console.info("multipointStart"); },
        multipointEnd: function (e) {console.info("multipointEnd"); },
        tap: function (e) {
            console.info("tap",e); 
            click(e.changedTouches[0].pageX*window.devicePixelRatio,e.changedTouches[0].pageY*window.devicePixelRatio);
        },
        doubleTap: function (e) {console.info("doubleTap"); },
        longTap: function (e) {
            console.info("longTap"); 
            loadImage();
        },
        singleTap: function (e) {console.info("singleTap"); },
        // rotate: function (evt) {
        //     console.log(evt.angle);
        // },
        pinch: function (evt) {
            console.log(evt.zoom);
        },
        // pressMove: function (evt) {
        //     console.log(evt.deltaX);
        //     console.log(evt.deltaY);
        // },
        swipe: function (evt) {
            console.log("swipe" , evt);
            swipe(mouseStatus.x,mouseStatus.y,mouseStatus.ex,mouseStatus.ey);
        }
    });
} else {
    c.addEventListener("mousedown",function(e){
        console.info("mousedown",e);
        if(e.button != 0) return;
        mouseStatus = {
            down:1,
            x:e.offsetX*window.devicePixelRatio,
            y:e.offsetY*window.devicePixelRatio
        }
        //$("#statusDiv").text("mousedown:"+mouseStatus.x+","+mouseStatus.y);
    },false);
    
    // c.addEventListener('mousemove', function(e){
    //     console.info("ee");
    // },false);
    
    c.addEventListener('mouseup',  function(e){
        console.info("mouseup",e);
        if(e.button != 0) return;
        mouseStatus.down = 0;
        mouseStatus.ex = e.offsetX*window.devicePixelRatio;
        mouseStatus.ey = e.offsetY*window.devicePixelRatio;
        var dx = Math.abs(mouseStatus.ex-mouseStatus.x);
        var dy = Math.abs(mouseStatus.ey-mouseStatus.y);
        if(dx<5 && dy<5) {
            click(mouseStatus.x,mouseStatus.y);
        } else {
            swipe(mouseStatus.x,mouseStatus.y,mouseStatus.ex,mouseStatus.ey);
        }
        //$("#statusDiv").text("mouseup:"+mouseStatus.x+","+mouseStatus.y);
    }, false);

    c.addEventListener("contextmenu",function(e){
        loadImage();
        e.preventDefault();
        return false;
    },false);
}




function sendcmd(cmd,fn) {
    var url = getServerUrl() + "/cmd?";
    var q = [];
    for (var key in cmd) {
        q.push(key + "=" + encodeURIComponent(cmd[key]));
    }
    $.get(url+q.join("&"),fn);
}

function keyback() {
    sendcmd({cmd:"shellcmd",shellcmd:"input keyevent 4"});
}

function keyhome() {
    sendcmd({cmd:"shellcmd",shellcmd:"input keyevent 3"});
}

function keytask() {
    sendcmd({cmd:"shellcmd",shellcmd:"input keyevent 82"});
}

function more() {
    moreButton.showModal();
}

function closeDialog() {
    moreButton.close();
}

function click(x,y) {
    x = Math.floor(x);
    y = Math.floor(y);
    sendcmd({cmd:"click",x:x,y:y});
}

function swipe(x,y,x1,y1) {
    x = Math.floor(x);
    y = Math.floor(y);
    x1 = Math.floor(x1);
    y1 = Math.floor(y1);
    sendcmd({cmd:"shellcmd",shellcmd:"input swipe " + x + " " + y + " " + x1 + " " + y1});
}

function xmcmd(cmd,fn) {
    var url = "https://1140555518435432.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/xmsend/sendcmd/?";
    var q = [];
    for (var key in cmd) {
        q.push(key + "=" + encodeURIComponent(cmd[key]));
    }
    $.get(url+q.join("&"),fn);
}

function serverCmd(cmdname) {
    xmcmd({cmd:cmdname});
}

function showtoolbar() {
    $('#toolbar').show();
}

function hidetoolbar() {
    $('#toolbar').hide();
}

function setting() {
    var zm = prompt("请输入图像比例(1~5):",zoom);
    if(zm) {
        zoom = parseInt(zm);
    }
    var qq = prompt("请输入图像压缩率(10~100):",q);
    if(qq) {
        q = parseInt(qq);
    }
    localStorage.setItem("setting",JSON.stringify({
        zoom:zoom,
        q:q
    }));
}