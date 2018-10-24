


var G_jsName = ServerTools.getJsName();
var G_packageName = ServerTools.getPackageName();
var G_ClassName = ServerTools.getClassName();

function sleep(ms, notShowMsg) {
	if (!notShowMsg) {
		if (ms > 2000) toast("sleep:" + ms / 1000 + " s");
	}
	if (!ServerTools.sleep(ms)) {
		//G_isRunning = false;
	}

}

function click(x, y, msg, ms) {
	if (msg) {
		if (ms) {
			toast("click:" + msg + " " + ms / 1000 + "s");
		} else {
			toast("click:" + msg);
		}
	}
	if (!ServerTools.click(x, y, msg)) {
		return;
	}
	if (ms) {
		sleep(ms, true);
	}
}

function swipe(x, y, x1, y1) {
	execShellCmd("input swipe " + x + " " + y + " " + x1 + " " + y1);
}

function copyText(txt) {
	ServerTools.copyText(txt);
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

function takePicture() {
	ServerTools.takeCurPicture(G_jsName);
}

function exit() {
	ServerTools.toast("10s后退出app:" + G_jsName, 1);
	sleep(10000, true);

	ServerTools.exit(ServerTools.getJsName());
	ServerTools.toast("退出app:" + G_jsName, 1);

	//killCurrentApp();
	if (G_packageName) {
		execShellCmd("am force-stop " + G_packageName);
	}
	ServerTools.toast("***结束运行：" + G_jsName);
}

function isCurrentWindow() {
	if((G_packageName == ServerTools.getPackageName()) && (G_ClassName == ServerTools.getClassName())) return true;
	return false;
}

/**
 * 等待文本出现并点击
 * @param  {stirng or array} texts 文本或文本数组
 * @param  {int} count 判断的时间，每秒判断一次，共判断count次
 * @return {string}       点击的文本名称,null为没有发现。
 */
function waitClickText(texts, count) {
	var currentPackage = ServerTools.getPackageName();
	var currentClassName = ServerTools.getClassName();
	if (typeof texts === "string") {
		for (var i = 0; i < count; i++) {
			if(!isCurrentWindow()) return null;
			if (AndroidNode.ClickByText(texts) > 0) return texts;
			ServerTools.sleep(1000);
		}
	} else {
		for (var i = 0; i < count; i++) {
			if(!isCurrentWindow()) return null;
			for (var j = texts.length - 1; j >= 0; j--) {
				if (AndroidNode.ClickByText(texts[j]) > 0) return texts[j];
			}
			ServerTools.sleep(1000);
		}
	}
	return null;
}

var G_ClassNames = {};

function _RunClassNameJs() {
	var className = ServerTools.getClassName();
	if(className && G_ClassNames[className]) {
		G_ClassNames[className]();
	}
}