
(function() {
	var path = location.pathname;
	var id = path.replace(/^.+?id_(.+?)\.html.*$/,"$1");
	location.href="http://pharaoh.oschina.io/html/videoplay/youku.html#"+id;
})();