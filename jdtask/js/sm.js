const db = new Dexie('jdtasksm');
db.version(1).stores({
    clickurl: "url,time"
});

// var clickedUrl = localStorage.getItem("smJdClickUrl");
// if (clickedUrl) {
//     clickedUrl = JSON.parse(clickedUrl);
// } else {
//     clickedUrl = [];
// }


(async function () {
    var loadTime = localStorage.getItem("smJdLoadTime");
    if (!loadTime) loadTime = 0;
    var now = +new Date();
    var needLoad = (now - loadTime > 1 * 60000);
    if (needLoad) {
        $("#main").html('loading... V2019.03.29<br />' + localStorage.getItem("smJdHtml"));
        setClicked();
        //              $.get("https://getpage.now.sh/?url=https%3A%2F%2Fshimo.im%2Fdocs%2Fb4LMFBapNUMp07ym%2Fread", r => {
        $.get("https://5p7sa773vnsmn.cfc-execute.bj.baidubce.com/?url=https%3A%2F%2Fshimo.im%2Fdocs%2Fb4LMFBapNUMp07ym%2Fread", function (r) {
            //console.info(r);
            var $o = $(r).find(".ql-editor");
            $o.find("p:contains('收藏京豆集合')").remove();
            $o.find("p:contains('取消店铺关注')").remove();
            $o.find("p:contains('收藏实时京豆')").remove();
            $o.find("p:contains('批量取关')").remove();
            var p = $o.find("p");
            var p1 = p.splice(500, 5000);
            $(p1).remove();
            var txt =
                '<p>取消店铺关注<a href="https://u.jd.com/D4jTCn" target="_blank" rel="noopener noreferrer nofollow">https://u.jd.com/D4jTCn</a></p>' +
                $o.html();
            localStorage.setItem("smJdHtml", txt);
            $("#main").html(txt);
            setClicked();
            localStorage.setItem("smJdLoadTime", now);
        });
    } else {
        $("#main").html('缓存<br />' + localStorage.getItem("smJdHtml"));
        setClicked();
    }
})();


$(document.body).on("click", "a.ql-link",async function (e) {
    var href = e.target.href;
    window.lastHref = href;
    if(!$(e.target).hasClass("visited")) {
        e.target.className = "ql-link visited";
        await db.clickurl.add({
            url:href,
            time:Date.now()
        });
    }
    $('a.red').removeClass("red");
    $(e.target).addClass("red");
    $("#btnNext").text("下一个[" + $(".ql-link:not('.visited')").length + "]")
    open(href);
    return false;
});

async function setClicked() {
    var $a = $("a.ql-link");
    var l = $a.length;
    //if ($a.length < 100) l = $a.length;
    for (var index = 0; index < l; index++) {
        var a = $a[index];
        let lk = await db.clickurl.get(a.href);
        if(lk) {
            a.className = "ql-link visited";
        }
    }
    $("#btnNext").text("下一个[" + $(".ql-link:not('.visited')").length + "]")
}

function nextClick() {
    var a = $(".ql-link:not('.visited'):first");
    if (a.length) {
        a = a[0]
        a.scrollIntoViewIfNeeded();
        a.click();
    }
}
function lastClick() {
    if (window.lastHref) {
        open(window.lastHref);
    }
}     