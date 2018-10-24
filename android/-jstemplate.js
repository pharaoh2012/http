var G_jsName = "//jsname//";
var G_isRunning = true;
var G_packageName;
var G_exitApp = true;

function runUserCode() {
	//jscode//
}

function G_Running() {
	ServerTools.toast("***开始运行：" + G_jsName);
	var names = G_jsName.split("#");
	if(names.length>1) {
		ServerTools.putUserData("小号",names[1]);
	}
	else {
		ServerTools.putUserData("小号","0");
	}

	try {
		var returnCode = runUserCode();
		if(returnCode) returnCode=1;
		else returnCode = 0;
	} catch(e) {
		log(e);
		returnCode=1;
	}

	toast("准备退出.");
	if (!G_isRunning) {
		toast("非主动退出！exit");
		return;
	}

	if (G_exitApp) {
		sleep(10000, true);

		ServerTools.exit(G_jsName, returnCode);
		ServerTools.toast("退出app:" + G_jsName);

		//killAllApp();
		killCurrentApp();
		ServerTools.toast("***结束运行：" + G_jsName);
	} else {
		ServerTools.toast("结束运行，但不退出。" + G_jsName);
	}
}

function takePicture(type) {
	if(type) type=1;
	else type=0;
	ServerTools.takeCurPicture(G_jsName,type);
}

function swipe(x, y, x1, y1) {
	execShellCmd("input swipe " + x + " " + y + " " + x1 + " " + y1);
}

function swipe1(pts) {
	execShellCmd("uiautomator runtest AutoRunner.jar -c test.pharaoh.Swipe -e pts "+pts);
}

function copyText(txt) {
	ServerTools.copyText(txt);
}

function sleep(ms, notShowMsg) {
	if (!G_isRunning) {
		toast("非主动退出！sleep");
		return;
	}
	if (!notShowMsg) {
		if (ms > 2000) toast("sleep:" + ms / 1000 + " s");
	}
	if (!ServerTools.sleep(ms)) {
		G_isRunning = false;
	}

}

function click(x, y, msg, ms) {
	if (!G_isRunning) {
		toast("非主动退出！click");
		return;
	}
	if (msg) {
		if (ms) {
			toast("click:" + msg + " " + ms / 1000 + "s");
		} else {
			toast("click:" + msg);
		}
	}
	if (!ServerTools.click(x, y, msg)) {
		G_isRunning = false;
		return;
	}
	if (ms) {
		sleep(ms, true);
	}
}

function checkColors(xys, colors) {
	return ServerTools.checkColors(xys, colors);
}

function toast(msg, time) {
	ServerTools.toast(G_jsName + "：" + msg, time ? 0 : 1);
}

function log(msg) {
	ServerTools.log(msg);
}

function execShellCmd(cmd) {
	ServerTools.execShellCmd(cmd);
}

function inputKey(key) {
	execShellCmd("input keyevent " + key);
}

function back(num) {
	if (!num) num = 1;
	if (num == 1) {
		toast("返回");
	} else {
		toast("返回" + num + "次");
	}
	ServerTools.back(num);
}

function openUrl(url) {
	ServerTools.openUrl(url);
}

function goHome() {
	inputKey(3);
}

function runPackage(name, ms, noback) {
	G_packageName = name;
	ServerTools.runPackage(name);

	if (ms) {
		toast("运行：" + name + "  sleep:" + (ms / 1000) + " s");
		ServerTools.sleep(ms);
		if (!noback) {
			back();
			ServerTools.sleep(2000);
		}
	}

}

function exit(success) {
	ServerTools.exit(success);
}

G_Running();


function QQShare() { //QQ好友
	toast("等待QQ启动,10s", 1);
	sleep(10000, true);
	click(65, 437, "点击我的电脑", 5000);
	click(503, 835, "发送按钮", 8000);
	click(198, 765, "返回APP", 5000);
}

function QQZone() { //QQ空间
	toast("等待QQ启动,10s", 1);
	sleep(10000, true);
	click(649, 98, "点击发表按钮", 5000);
}

function WeiXinFriends() { //微信朋友圈
	toast("等待微信启动,10s", 1);
	sleep(10000, true);
	click(649, 98, "点击发送按钮", 5000);
}

function WeiXinFriend() { //微信朋友圈
	toast("等待微信启动,10s", 1);
	sleep(10000, true);
	click(224, 474, "第一个好友", 5000);
	click(541, 887, "分享按钮", 5000);
	click(474, 759, "返回APP", 5000);
}


function killAllApp() {
	toast("清理内存", 1);
	sleep(5000, true);
	inputKey(3);
	sleep(1000, true);
	inputKey(82);
	sleep(2000, true);
	ServerTools.click(357, 1137, ""); //清理内存
	sleep(2000, true);
}

function killCurrentApp() {
	if (G_packageName) {
		execShellCmd("am force-stop " + G_packageName);
	}
}

function isQQ() {
	return ServerTools.getPackageName() == "com.tencent.mobileqq";
}

function isWeixin() {
	return ServerTools.getPackageName() == "com.tencent.mm";
}

function isClass(cls) {
	return ServerTools.getClassName() == cls;
}

function isCurrentApp() {
	return ServerTools.getPackageName() == G_packageName;
}

//支持使用 JSON.parse(...);
//
function Nodes(type) {
	//var g_nodeId = 0;
	var nodes = [];
	var package;
	function checkClass(o) {
		if (o.class == "android.widget.FrameLayout") return false;
		if (o.class == "android.widget.LinearLayout") return false;
		if (o.class == "android.widget.RelativeLayout") return false;
		if (o.class == "android.widget.ListView") return false;
		return true;
	}

	function parseNode(o) {
		if (checkClass(o)) {
			var bounds = o.bounds.replace("][", ",").replace("[", "").replace("]", "");
			var xys = bounds.split(",");
			var rect = {
				left: +xys[0],
				top: +xys[1],
				right: +xys[2],
				bottom: +xys[3]
			};
			// rect.width = rect.right - rect.left;
			// rect.height = rect.bottom - rect.top;
			// rect.centerX = (rect.left + rect.right) / 2;
			// rect.centerY = (rect.top + rect.bottom) / 2;
			o.rect = rect;

			//o.nodeId = g_nodeId;
			//o.pId = pid;
			package = o.package;
			delete o.package;
			//if(!o["content-desc"]) delete o["content-desc"];
			nodes.push(o);
		}

		//g_nodeId++;
		//console.info(bounds, cls);

		if (o.node) {
			parseChildNode(o.node);
			delete o.node;
		}
		delete o.bounds;
	}

	function parseChildNode(arr, pid) {
		if (arr instanceof Array) {
			for (var i = arr.length - 1; i >= 0; i--) {
				parseNode(arr[i]);
			}
		} else {
			parseNode(arr);
		}
	}

	//g_nodeId = 0;
	var nodeJson;
	if (type) {
		nodeJson = ServerTools.getDump1();
	} else {
		nodeJson = ServerTools.getDump();
	}
	var json = JSON.parse(nodeJson);

	parseNode(json.hierarchy.node);

	this.getNodes = function() {
		return nodes;
	};

	function _checkNode(node,q,fn) {
		if (q.textLength) {
			if (node.text.length !== q.textLength) return false;
		}
		if (q.class) {
			if (node.class.indexOf(q.class) === -1) return false;
		}
		if (q.text) {
			if (node.text != q.text) return false;
		}
		if (q["content-desc"]) {
			if (node["content-desc"].indexOf(q["content-desc"]) === -1) return false;
		}
		if (q["resource-id"]) {
			if (node["resource-id"] != q["resource-id"]) return false;
		}	
		if (q.width) {
			var w = node.rect.right - node.rect.left;
			if (w !== q.width) return false;
		}
		if (q.height) {
			var h = node.rect.bottom - node.rect.top;
			if (h !== q.height) return false;
		}
		if (q.pt) {
			var x = q.pt[0];
			var y = q.pt[1];
			if (node.rect.left > x) return false;
			if (node.rect.right < x) return false;
			if (node.rect.top > y) return false;
			if (node.rect.bottom < y) return false;
		}
		if (fn) {
			if (!fn(node)) return false;
		}	
		return true;	
	}

	this.find = function(q, fn) {
		var ret = [];
		for (var i = nodes.length - 1; i >= 0; i--) {
			var node = nodes[i];
			if(_checkNode(node,q,fn)) ret.push(node);
		}
		return ret;
	};

	this.findOne = function(q, fn) {
		for (var i = nodes.length - 1; i >= 0; i--) {
			var node = nodes[i];
			if(_checkNode(node,q,fn)) return node;

		}
		return null;
	};

	this.findAndClick = function(q, fn) {
		for (var i = nodes.length - 1; i >= 0; i--) {
			var node = nodes[i];
			if(_checkNode(node,q,fn)) {
				click(parseInt((node.rect.right+node.rect.left)/2,10),parseInt((node.rect.bottom+node.rect.top)/2,10));
				return node;				
			}
		}
		return null;
	};

	this.getPackage=function() {
		return package;
	};


}