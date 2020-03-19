function Fetch(url, ps, cb) {
    var search = [];
    if (ps) {
        for (const key in ps) {
            if (ps.hasOwnProperty(key)) {
                const v = ps[key];
                search.push(key + "=" + encodeURIComponent(v));
            }
        }
    }
    var s = search.join("&");
    if (s) s = "?" + s;
    var u = url + s;
    fetch(u).then(r => r.text()).then(t => {
        if (cb) cb(t);
        else console.info(t);
    })
}

/* 小米消息

dt=new Date()
Fetch("https://bph88khph2829.cfc-execute.su.baidubce.com/mimsg",{
description:dt.toLocaleTimeString(),time_to_send:dt.getTime()+10000,"extra.action":"app","extra.package":"com.jd.jrapp","extra.clip":"復制整条信息%EBa276EQrb!打開"
,title:"京东金融剪贴板"})

*/


let result = {"extra.action":"app"};

function setProp(name, isnull) {
    Object.defineProperty(result, name, {
        enumerable: true,
        configrable: true,
        get: function () {
            let v = document.getElementById(name).value;
            if (isnull && v == '') return undefined;
            return v;
            //return document.getElementById(name).value;
        },
        set: function (val) {
            document.getElementById(name).value = val;
        }

    })
}

setProp("title", true);
setProp("description");
setProp("extra.package");

function formsubmit() {
    console.info(JSON.stringify(result));
    Fetch("https://bph88khph2829.cfc-execute.su.baidubce.com/mimsg",result);
    return false;
}

function jtbformsubmit() {
    let clip = document.getElementById("clip").value;
    Fetch("https://bph88khph2829.cfc-execute.su.baidubce.com/mimsg", {
        description: clip,
        "extra.action": "app",
        "extra.clip": clip,
        title: "剪贴板"
    })
}