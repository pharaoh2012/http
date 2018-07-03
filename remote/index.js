var serverip=null;
var zoom=1;
var q=20;
var c=document.getElementById("imgCanvas");
var ctx=c.getContext("2d");
var $imgCountDiv = $("#imgCountDiv");

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
        c.width = img.width;
        c.height = img.height;
        ctx.drawImage(img,0,0);
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

c.addEventListener("mousedown",function(e){
    console.info("mousedown",e);
},false);

// c.addEventListener('mousemove', function(e){
//     console.info(e);
// },false);

c.addEventListener('mouseup',  function(e){
    console.info("mouseup",e);
}, false);

c.addEventListener('click',  function(e){
    console.info("click",e);
}, false);

alert(screen.width);

