
document.body.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
        var a = e.target;
        if(a.classList.contains("visited")) return;
        //if(a.className == "visited") return;
        a.className = "visited red";
        console.info(a.id);
        taskInfo.ids.push(a.id);
        localStorage.setItem("jdtask", JSON.stringify(taskInfo));
        showCount(a.getAttribute("group"));
    }
    console.info(e);
}, false);


function showTaskInfo() {
    taskInfo.ids.forEach(function (id) {
        var li = document.getElementById(id);
        if (li) li.className = "visited";
    });
    showCount("t6");
    showCount("t0");
    showCount("t2");
    //localStorage.setItem("jdtask",JSON.stringify(taskInfo));
}

function showCount(id) {
    var count = document.querySelectorAll('#'+id+' a:not(.visited)').length;
    if(count) {
        document.getElementById(id+"_count").innerText="("+count+")";
    } else {
        document.getElementById(id+"_count").innerText="";
        document.getElementById(id+"_details").open = false;
    }
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
    var htmlids = {};
    for (var i = 0; i < urls.length; i++) {
        var id = urls[i][2];
        if(!htmlids[id]) htmlids[id] = [];
        htmlids[id].push('<li><a group="',id,'" id="', md5(urls[i][0]), '" target="_blank" href="', urls[i][0], '">', urls[i][1], '</a></li>');
    }
    for(var key in htmlids) {
        document.getElementById(key).innerHTML = htmlids[key].join('');
    }
    
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

if(window.AndroidJs) {
    window.AndroidJs.setBack(true);
}