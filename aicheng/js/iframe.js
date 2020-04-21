function skipImg(src) {
    if(!src) return true;
    return src.endsWith(".gif") || src.endsWith(".GIF");
}
var imgErrorCount=0;
var totleImage = 0;
var imgLoadOk = 0;
var headerObj = document.getElementById('header');
var maxImageCount = 200;
var imgCacheUrls = ["https://geturl.pharaoh.workers.dev/--------","https://geturl0.pharaoh.workers.dev/--------","https://geturl1.pharaoh.workers.dev/--------","https://geturl2.pharaoh.workers.dev/--------","https://geturl3.pharaoh.workers.dev/--------","https://geturl4.pharaoh.workers.dev/--------"];
var imgCacheCount = imgCacheUrls.length;
function showImageInfo() {
    headerObj.innerText = "共["+ imgLoadOk + "/" + totleImage + "]个图片,"+imgErrorCount+"个错误";    
}
(function () {
    var html = [];
    var dv = parent.$(".detail-view");
    var length = 0;
    dv.each(function (index) {
        var $this = $(this);
        var h1 = $this.find("h1").text();
        html.push("<h1>" + (index + 1) + ". " + h1 + "</h1><hr />");
        $this.find("img").each(function () {
            var src = this.src || $(this).attr("data-link") || $(this).attr("ess-data") 
            if (!skipImg(src)) {
                length++;
                if(length>maxImageCount) return;
                console.info('showimg:',src);
                html.push('<div class="imgBox"><img src="', src, '" /></div>');
            }
        })
        $this.find("input[type='image']").each(function () {
            var imgsrc = this.src;
            if (!imgsrc) {
                if (!skipImg(imgsrc)) {
                    imgsrc = this.getAttribute("data-src");
                }
            }
            length++;
            if(length>maxImageCount) return;
            html.push('<div class="imgBox"><img src="', imgsrc, '" /></div>');
        })
    })
    totleImage = length;

    showImageInfo();
    document.getElementById('imgList').innerHTML = html.join('');
    $("#imgList img").each(function (index, img) {
        $(img).on('error', function () {
            var src = this.src;
            console.info('image error:',src);
            if ((src.indexOf('getpage.now.sh') > 0) || (src.indexOf("pharaoh.workers.dev")>0)) return;
            imgErrorCount++;
            this.src = imgCacheUrls[imgErrorCount%imgCacheCount]+this.src;
            // if(imgErrorCount%2==0) {
            //     this.src = "https://getpage.now.sh/?url=" + encodeURIComponent(this.src);
            // } else {
            //     this.src = "https://geturl.pharaoh.workers.dev/--------" + this.src;
            // }
            showImageInfo();
            
            //$(this).prop('src','img/broken.png');
        }).on("load",function(){
            imgLoadOk++;
            showImageInfo();
        });
        Transform(img);
        img.initScale = 1;
        var af = new AlloyFinger(img, {
            multipointStart: function () {
                img.initScale = img.scaleX;
                $("#imgList img.current").removeClass("current");
                img.classList.add("current")
                evt.preventDefault();
            },
            pinch: function (evt) {
                img.scaleX = img.scaleY = img.initScale * evt.scale;
            },
            doubleTap: function () {
                img.initScale = img.scaleX = img.scaleY = 1;
                img.translateX = img.translateY = 0;
                //img.style.zIndex = 0;
                //evt.preventDefault();
            },
            // longTap: function(evt) {
            //     // console.info('longTap');
            //     evt.preventDefault();
            //     //alert('longTap'); 
            //     img.isLongTap = 1;

            // },
            // touchEnd: function(evt) {
            //     img.isLongTap = 0;
            //     evt.preventDefault();
            // },
            // swipe:function(evt) {
            //     console.info("swipe:",evt);
            // }
            pressMove: function (evt) {
                //if(img.isLongTap == 1) 
                if (img.scaleX > 1) {
                    img.translateX += evt.deltaX;
                    img.translateY += evt.deltaY;
                    evt.preventDefault();
                }
            }
        });

    });


})();

window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

$("#header").on('click', function () {
    parent.hideImageFrame();
});