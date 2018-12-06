runPackage("com.netease.newsreader.activity", 20000);
click(105,1851,"首页",2000);
click(105,1851,"首页",10000);

click(360,673,"第二个帖子",5000);

if(isClass("com.netease.nr.biz.news.detailpage.NewsPageActivity")) {
click(244,1860,"写跟帖",2000);
execShellCmd("input text ...");
sleep(1000)
click(974,918,"发送",5000);
}



