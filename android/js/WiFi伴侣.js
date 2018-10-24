runPackage("com.mydream.wifi",15000,true);


//click(42, 105, "回退广告",5000);
//
//
click(900,1837,"点击我",15000);

function mainTask() {
	click(955,248,"点击签到按钮",10000);

	takePicture();

	sleep(2000);
	click(583,1368,"马上领取+5",5000);

	for (var i = 0; i < 5; i++) {
		click(279,147,"关闭",2000);
		back();
		sleep(3000);

		if(isClass("com.wifibanlv.wifipartner.activity.MainActivity")) break;
	}
	sleep(5000);	
}

for (var i = 0; i < 6; i++) {
	mainTask();
}

click(955,248,"点击签到按钮",5000);
back();
sleep(2000)
click(1001,144,"明细",5000);
//com.wifibanlv.wifipartner.activity.MainActivity