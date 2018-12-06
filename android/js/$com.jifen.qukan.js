var i=1;
while(i++) {
	if(ServerTools.getClassName() != "com.jifen.qukan.newsdetail.news.NewsDetailActivity") break;
	if(Math.random()>0.8) {
		execShellCmd("input swipe 400 500 400 700");
		toast("上滑:"+i);
	} else {
		execShellCmd("input swipe 400 500 400 200");
		toast("下滑:"+i);
	}

	sleep(5000);
}