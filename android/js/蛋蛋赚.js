

runPackage("com.ddz.mobile",20000,true);

click(69,1221,"首页",10000);

takePicture();

toast("截图：" + G_jsName);
sleep(2000);

//click(297,463,"分享",5000);
click(219,328,"分享",5000);
//click(295,322,"分享",5000);
//click(298,453,"分享",5000);

//click(221,518,"分享",5000);

click(357,902,"微信朋友圈",15000);

click(649,98,"发送",10000);

back();

for (var i = 0; i < 3; i++) {
	sleep(2000);
	back();
}


//sleep(2000);
//click(444,653,"签到");