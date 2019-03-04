document.getElementById("items").addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
        var a = e.target;
        a.className = "visited";
        console.info(a.id);
        taskInfo.ids.push(a.id);
        localStorage.setItem("jdtask", JSON.stringify(taskInfo));
    }
    console.info(e);
}, false);


function showTaskInfo() {
    taskInfo.ids.forEach(function (id) {
        var li = document.getElementById(id);
        if (li) li.className = "visited";
    });
    //localStorage.setItem("jdtask",JSON.stringify(taskInfo));
}

function getToday() {
    var now = new Date();
    var today = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    return today;
}

function initTaskInfo(today) {
    return {
        date: today,
        ids: []
    };
}

(function () {


    // 1416 2019-02-14
    var html = [];
    for (var i = 0; i < urls.length; i++) {
        html.push('<li><a id="', md5(urls[i][0]), '" target="_blank" href="', urls[i][0], '">', urls[i][1], '</a></li>');
    }
    document.getElementById('items').innerHTML = html.join('');
})();

var taskInfo = null;
(function () {
    var today = getToday();
    var jdtask = localStorage.getItem("jdtask");
    if (jdtask) {
        jdtask = JSON.parse(jdtask);
        if (jdtask.date == today) {
            taskInfo = jdtask;
        }
    }
    if (!taskInfo) taskInfo = initTaskInfo(today);
    showTaskInfo();
})();

function openNumber() {
    var v = document.getElementById("number").value;
    window.open("jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=" + v);
}

function openNumberAdd1(n) {
    var v = n + parseInt(document.getElementById("number").value, 10);
    document.getElementById("number").value = v;
    window.open("jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=" + v);
}