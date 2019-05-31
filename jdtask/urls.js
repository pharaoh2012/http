var urls = [
    ["https://s.pay.xiaomi.com/cash?channel=cashpayshopBanner#/daka", "小米打卡"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=215", "早起打卡"],
    ["https://zhidao.baidu.com/mmisc/signinfo", "知道签到"],
    ["https://zhidao.baidu.com/shop/lottery", "知道抽奖（10点后）"],

    ["https://sohu.gg/8RfDr", "看广告1"],
    ["https://sohu.gg/RrlqY", "看广告2"],
    ["https://sohu.gg/xmkZP", "看广告3"],

    ["https://eimi.cloud/user", "ss 签到"],


    ["https://bean.m.jd.com/?sid=", "领金豆"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=473", "APP钢镚"],

    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=815", "领红包815 0.1"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1227", "领红包1227 0.1"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1272", "领红包1272 0.1"],

    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1519", "领红包1519 0.1"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1521", "领红包1521 0.1"],

    ["https://m.jr.jd.com/spe/qyy/hzq/index.html?usertype=1176&lanmu&sid=#/", "领钢镚"],
    ["https://u.jd.com/7OoKIP", "个护馆"],
    ["https://u.jd.com/j7OOfs", "清洁馆"],
    ["https://u.jd.com/EpDD28", "京东超市"],

    ["https://coin.jd.com/m/gb/index.html", "领钢镚1"],
    ["https://vip.m.jd.com/?sid=", "京东会员"],
    ["https://u.jd.com/R6MoZj", "希捷七天店铺签到"],
    ["https://sohu.gg/pYLJw", "全棉9天300豆"],
    ["https://sohu.gg/gzFha", "花印7天80豆"],
    ["https://u.jd.com/XV3es1", "个护馆5豆"],
    ["https://u.jd.com/HBZAHi", "清洁馆5豆"],
    ["https://u.jd.com/ozQoqw", "母婴馆2豆"],
    ["https://u.jd.com/hsJilZ", "狼行者户外 签到5天9豆"],
    ["https://sohu.gg/HuKbB", "欧舒丹2豆"],
    ["https://sohu.gg/zaCsD", "海信3天10豆"],
    ["https://sohu.gg/d3zFc", "天中2豆"],
    ["https://sohu.gg/LfeF1", "晨光1豆"],
    ["https://sohu.gg/R9pND", "自然共和国"],
    ["https://u.jd.com/wP585d", "图书7天19豆"],
    ["https://u.jd.com/wxH4XJ", "超市签到 7天19豆"],
    ["https://u.jd.com/m8i9ca", "发现页面，点去赚钱"],
    ["https://u.jd.com/5e4QuU", "京鱼座智能"],
    ["https://u.jd.com/gMZPyF", "拍拍签到"],
    ["https://sohu.gg/C4VXc", "APP签到"],
    ["https://sohu.gg/W5ULb", "618免单抽奖"],
    ["https://u.jd.com/HOKINI", "618抽奖"],


    ["open://com.jingdong.app.mall", "APP:京东领劵"],
    ["open://com.taobao.etao", "APP:一淘签到"],
    ["open://com.eg.android.AlipayGphone", "APP:支付宝"],
    ["open://com.unionpay", "APP:云闪付"],
    ["open://com.cmbchina.ccd.pluto.cmbActivity", "APP:掌上生活"],
    ["open://com.greenpoint.android.mc10086.activity", "APP:中国移动"],


    ["open://com.netease.newsreader.activity", "APP:网易新闻"],

    // ["https://wqs.jd.com/wxsq_project/xym/dailyJDBeans/xym_dailyJDBeans.html?_ts=1550133540006&utm_user=plusmember&ShareTm=mn0nIq8gfUY88fIr2tjSCFGQddo%2F1QAezu9ew0Zwhylne5VdRDAk6DvlBZiOllt4TycD8wGPF9uWJUVr9DDH8LE5%2FOP9uzZA89UI%2F0o3r5gyPXoG6%2FGjtmsmoSwHWpCgKfMN289PpJmIypRbrXCbS5HMQxUHEDCvBFAzgsZjFJs%3D&ad_od=share&utm_source=androidapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=Wxfriends", "签到"],

    // ["https://wqs.jd.com/wxsq_project/xym/ticketBonus/xym_ticketBonus.html?_ts=1550133983324&utm_user=plusmember&ShareTm=eEe2f2hbV49RE%2FcQpdiRs9lN13UuIxWRsvEG9vBuSeKfcugQq2HpKm5MuFhMU70YwKu3qWWM3%2FfmoBTR3xEuIC3P2bExv9xrxhR%2FoqqQVQSPOgyXoMHEVBRPQXz5B%2Fm8%2FC505It8DELYL4kOG%2BxCP6rgtc1g2tzNxzKaZh2nwK8%3D&ad_od=share&utm_source=androidapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=QQfriends", "抽奖"],



    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1210", "领红包1210 0.01"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1513", "领红包1513 0.1  ???"],
    ["https://fbank.m.jd.com/index/index.action?sid=", "流量签到"],
    ["https://m.jr.jd.com/spe/acs/hymSystem/index.html?contentParam=100001064&actCode=6C6C995B53&actType=1&source=2#/", "天天领红包"],
    ["https://s.m.jd.com/activemcenter/activemsite/m_welfare?ptag=138026.1.1&sceneval=2&logintag=#/main", "天天签到"],
    //["https://red-e.jd.com/resources/pineapple/index.html?merchantCode=4B2CE697A1AEE055","每日蹦一蹦"],
    ["https://m.jr.jd.com/btyingxiao/marketing/html/index.html?sid=2255a6ce436beff493d12122b026a58w&t=1545123044789&utm_source=Android*url*1545123057924&utm_medium=jrappshare&utm_term=wxfriends", "每日签到"],
    //["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1361", "领红包1361"],
    //["https://sale.jd.com/m/act/XrLU0eKY6T5.html","签到"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=937", "领红包937 0.01"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1184", "领红包1184 0.1"],
    //["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1226", "领红包1226 0.1"],

    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1260", "领红包1260 0.03 ??"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=931", "领红包931 0.01"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1243", "领红包1243 0.01"],
    //["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1253", "领红包1253 ???"],
    //["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1339", "领红包1339 ???"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1439", "领红包1439 0.01"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=412", "钢镚 412 0.01"],

    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=776", "领红包776 0.02"],

    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=867", "领红包867 0.01"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1498", "领红包1498 0.01"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1500", "领红包1500 0.02"],
    //["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1508", "1508 抽奖"],       
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1499", "话费1499 30-1  ??"],
    //["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=771", "分享771 50-1"],


    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=820", "领券820 0.01"],

    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=777", "领券777 50-1"],


    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=912", "领红包912 0.01"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=919", "领红包919 0.01"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1468", "领红包1468 0.01"],
    //["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1469", "领红包1469 15-1"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1486", "领红包1486 99-1话费"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1494", "领红包1494 抽奖"],

    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=938", "领流量938"],

    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1011", "领劵1011"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1086", "领劵1086 每周任务"],


    ["https://m.jr.jd.com/spe/qyy/main/index.html?userType=77&utm_source=kong&utm_medium=zssc&utm_campaign=t_1000027277_102969&utm_term=0c6d072c-88f3-448c-9d92-62c0e53951d2-p_1999-pr_1107-at_102969&jd_pop=0c6d072c-88f3-448c-9d92-62c0e53951d2&abt=0", "合集"],
    ["https://home.jdpay.com/my/welfare/jxWelfarePage?type=jingdou&source=JDSC", "合集1"],
    ["https://ljd.m.jd.com/countersign/index.action", "双签奖励"],
    ["https://m.jr.jd.com/activity/shactivity/payrebate/html/indexhd.html?sid=&cu=true&utm_source=kong&utm_medium=tuiguang&utm_campaign=t_1000550368_&utm_term=9518a0b6fd484b69a9e2df6e6347f05b&abt=3&tab=2", "购物领京豆"]

];

//1494 end