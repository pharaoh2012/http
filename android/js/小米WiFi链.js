
runPackage("com.xiaomi.wifichain",15000,true);

function random(x,y) {
	return Math.floor(Math.random()*(y-x)+x);
}

click(406,1845,"小米积分",5000);

for (var i = 0; i < 50; i++) {
	var x= random(210,886);
	var y = random(337,928);
	click(x,y);
	sleep(100);
}
