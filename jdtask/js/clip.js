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

(() => {
    let clip = location.hash.substr(1);
    if (clip) {
        clip = decodeURIComponent(clip);
        Fetch("https://bph88khph2829.cfc-execute.su.baidubce.com/mimsg", {
            description: clip,
            "extra.action": "app",
            "extra.clip": clip,
            title: "剪贴板"
        }, r => {
            document.getElementById('result').innerText = "发送成功！";
            console.info(r)
        })
    } else {
        alert("#剪贴板内容！");
    }

})();