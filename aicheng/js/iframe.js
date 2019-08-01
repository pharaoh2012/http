function skipImg(src) {
    return src.endsWith(".gif") || src.endsWith(".GIF");
}
var imgErrorCount=0;
var totleImage = 0;
(function () {
    var html = [];
    var dv = parent.$(".detail-view");
    var length = 0;
    dv.each(function (index) {
        var $this = $(this);
        var h1 = $this.find("h1").text();
        html.push("<h1>" + (index + 1) + ". " + h1 + "</h1><hr />");
        $this.find("img").each(function () {
            if (!skipImg(this.src)) {
                length++;
                html.push('<div class="imgBox"><img src="', this.src, '" /></div>');
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
            html.push('<div class="imgBox"><img src="', imgsrc, '" /></div>');
        })
    })
    totleImage = length;

    document.getElementById('header').innerText = "共" + totleImage + "个图片,"+imgErrorCount+"个错误";
    document.getElementById('imgList').innerHTML = html.join('');
    $("#imgList img").each(function (index, img) {
        $(img).on('error', function () {
            var src = this.src;
            if ((src.indexOf('getpage.now.sh') > 0) || (src.indexOf("geturl.pharaoh.workers.dev")>0)) return;
            imgErrorCount++;
            if(imgErrorCount%2==0) {
                this.src = "https://getpage.now.sh/?url=" + encodeURIComponent(this.src);
            } else {
                this.src = "https://geturl.pharaoh.workers.dev/--------" + this.src;
            }
            document.getElementById('header').innerText = "共" + totleImage + "个图片,"+imgErrorCount+"个错误";
            
            //$(this).prop('src','img/broken.png');
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