(function() {
    var user = location.hash.substr(1);
    if (!user) user = "rm";
    window.userid = user;
    document.title = user + "_每日任务";
    var cache = localStorage.getItem("daytask_cache_"+user);
    if (cache) {
        cache = JSON.parse(cache);
        window.tasks = cache.tasks;
        init();
    }
    else {
        initNoCache();
    }
})();

function initNoCache() {
    var db = new mlab("tasks", "setting");
    db.find({
        s: {
            "权重": -1
        },
        q: {
            "用户": userid
        }
    }, function(ret) {
        window.tasks = ret;
        localStorage.setItem("daytask_cache_"+userid,JSON.stringify({tasks:ret}));
        console.info(ret);
        init();
    });
}

function init() {
    getDaily();
    document.getElementById('result').addEventListener("click", function(e) {
        if (e.target.tagName == "LI") {
            updateTask(e.target);
        }
    }, false);
}

function getToday() {
    var now = new Date();
    var today = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    return today;
}

function getDaily() {
    var db = new mlab("tasks", "task");

    db.find({
        q: {
            "用户": userid,
            "日期": getToday()
        }
    }, function(ret) {
        console.info(ret);
        showResult(ret);
    });
}

function showResult(items) {
    var today = getToday() + "_";
    var lis = window.tasks.map(e => {
        return "<li id='" + today + e["_id"] + "'>" + e["任务"] + "</li>"
    });
    document.getElementById("result").innerHTML = lis.join('');
    items.forEach(e => {
        if (e.ok) {
            document.getElementById(e._id).className = "ok";
        }
    });
}

function updateTask(li) {
    var id = li.id;
    var ok = li.className ? 0 : 1;
    var db = new mlab("tasks", "task");
    var item = {
        "_id": id,
        "ok": ok,
        "用户": window.userid,
        "日期": getToday()
    }
    db.insert(item, function(ret) {
        if (ok) {
            li.className = "ok";
        } else {
            li.className = "";
        }
        console.info(ret);
    });
}

