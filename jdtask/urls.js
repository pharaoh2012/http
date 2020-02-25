var urls = [
    ["https://bean.m.jd.com/plantBean/index.action?resourceValue=bean", "京豆培养（12点）", "t2"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=473", "京东金融签到", "t2"],
    ["openapp.jdmobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22des%22%3A%22couponCenter%22%7D", "京东领劵中心", "t2"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1227", "领红包1227 0.1", "t9"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1272", "领红包1272 0.1", "t9"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1519", "领红包1519 0.1", "t9"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1521", "领红包1521 0.1", "t9"],
    ["https://m.jr.jd.com/member/dailyAnswer/", "京东答题", "t2"],
    ["open://com.eg.android.AlipayGphone", "APP:支付宝(晚上走路)", "t2"],
    ["open://com.netease.newsreader.activity", "APP:网易新闻", "t2"],
    ["open://com.taobao.etao", "APP:一淘签到", "t2"],
    ["open://com.unionpay", "APP:云闪付", "t2"],
    ["open://com.baidu.iknow", "APP:百度知道", "t2"],
    ["open://com.qiyi.video", "APP:爱奇艺（单位）", "t2"],
    //["openapp.jdmobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22des%22%3A%22search%22%7D", "东东农场", "t2"],
    ["https://bean.m.jd.com/plantBean/index.action?resourceValue=bean", "京豆培养（18点）", "t2"],
    //["jdmobile://share?jumpType=7&jumpUrl=https://u.jr.jd.com/wxgrowing/moneytree/index.html?channelLV=sq&productId=&channel=pc&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D2339&source=&time=1564377129826", "收金果（18点）", "t2"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=215", "早起打卡", "t6"],
    //["openapp.jdmobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22des%22%3A%22IntelligentAssistant%22%7D", "京东小咚", "t2"],
    ["open://com.eg.android.AlipayGphone", "APP:支付宝(早上)", "t6"],
    ["https://bean.m.jd.com/?sid=", "领金豆", "t6"],
    //["jdmobile://share?jumpType=7&jumpUrl=https://u.jr.jd.com/wxgrowing/moneytree/index.html?channelLV=sq&productId=&channel=pc&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D2339&source=&time=1564377129826", "收金果（12点）", "t6"],
    //["openapp.jdmobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22des%22%3A%22search%22%7D", "东东农场", "t6"],
    //["https://jpay.jd.com/cps/cpage?cpsId=225&channel=eec39115ea28457de14ee5b6e761ea48&batch=", "1元立减劵", "t6"],
    ["https://m.jr.jd.com/life/jdrepayment/index.html?sid=02da0cd9649b8a8870de163f8d747caw&utm_term=wxfriends&utm_source=iOS*url*1570587988897&utm_medium=jrappshare&from=groupmessage&isappinstalled=0", "还信用卡", "t9"],
    ["https://home.jdpay.com/my/welfare/jxWelfarePage?type=jingdou&source=JDSC", "合集1", "t9"],
    ["https://ljd.m.jd.com/countersign/index.action", "双签奖励", "t9"],
    ["https://m.jr.jd.com/activity/shactivity/payrebate/html/indexhd.html?sid=&cu=true&utm_source=kong&utm_medium=tuiguang&utm_campaign=t_1000550368_&utm_term=9518a0b6fd484b69a9e2df6e6347f05b&abt=3&tab=2", "购物领京豆", "t9"],
    ["https://m.jr.jd.com/spe/qyy/hzq/index.html?usertype=1176&lanmu&sid=#/", "领钢镚", "t9"],
    ["https://m.jr.jd.com/spe/qyy/main/index.html?userType=77&utm_source=kong&utm_medium=zssc&utm_campaign=t_1000027277_102969&utm_term=0c6d072c-88f3-448c-9d92-62c0e53951d2-p_1999-pr_1107-at_102969&jd_pop=0c6d072c-88f3-448c-9d92-62c0e53951d2&abt=0", "合集", "t9"],
    ["https://sohu.gg/C4VXc", "APP签到", "t9"],
    ["https://sohu.gg/R9pND", "自然共和国(微信)", "t9"],
    ["https://u.jd.com/m8i9ca", "发现页面，点去赚钱", "t9"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1260", "领红包1260 0.03 ??", "t9"],
    ["jdmobile://share?jumpType=7&channel=default&sourceUrl=1000*https%3A%2F%2Fm.jr.jd.com%2Fspe%2FdownloadApp%2Findex.html%3Fid%3D190&source=&jumpUrl=1513", "领红包1513 0.1  ???", "t9"],
    ["https://s.pay.xiaomi.com/cash?channel=cashpayshopBanner#/daka", "小米打卡", "t6"],
    ["openapp.jdmobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22des%22%3A%22IntelligentAssistant%22%7D", "京东助手", "t9"],
    ["javascript:openApp('com.taobao.etao','fu致这行话￥wazs140hzQl￥转移至τаo宝аρρ，【快来跟我一起玩省钱消消消~】');void 0","淘宝消消乐","t6"],
    ["javascript:openApp('com.taobao.etao','fu致这行话￥wazs140hzQl￥转移至τаo宝аρρ，【快来跟我一起玩省钱消消消~】');void 0","淘宝消消乐","t2"]
]
//1494 end
//["openapp.jdmobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22des%22%3A%22$2%22%7D", "$1", "t9"],
//  openapp.jdmobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22des%22%3A%22cutPrice%22%7D
//  ["https://s.pay.xiaomi.com/cash?channel=cashpayshopBanner#/daka", "小米打卡", "t6"],
