runPackage("com.netease.newsreader.activity", 20000);

click(946,1853,"我",15000);
click(935,153,"签到",20000);

click(540,586,"第一个视频",5000);

click(105,1851,"首页",10000);

click(360,673,"第二个帖子",5000);

if(isClass("com.netease.nr.biz.news.detailpage.NewsPageActivity")) {
click(244,1860,"写跟帖",2000);
execShellCmd("input text ...");
sleep(1000)
click(974,918,"发送",5000);
}



