var mlab = function(dbname, collectionName) {
	if (!dbname) throw "dbname is null";
	if (!collectionName) throw "collectionName is null";
	var _dbname = dbname;
	var _collectionName = collectionName;
	var isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
	var _fly;
	if (isNode) {
		_fly = require('flyio');
	} else {
		_fly = window.fly;
	}
	var apiKey = (function() {
		var key = null;
		if (isNode) {
			key = process.env.mlab_apiKey;
			if (!key) throw "need mlab_apiKey env";
			return key;
		} else {
			key = localStorage.getItem("mlab_apiKey");
			if (key) return key;
			key = window.prompt("输入apikey");
			if (!key) throw "need apikey";
			localStorage.setItem("mlab_apiKey", key);
			return key;
		}
	})();
	var dbUrl = 'https://api.mlab.com/api/1/databases/' + _dbname + '/collections/' + encodeURIComponent(_collectionName) + "?";

	function toUrl(q) {
		var ret = [];
		for (var k in q) {
			var v = q[k];
			if(typeof v == "object") {
				v = JSON.stringify(v);
			}
			ret.push(k + "=" + encodeURIComponent(v));
		}
		ret.push("apiKey=" + apiKey);
		var u = dbUrl + ret.join("&");
		console.info(u);
		return u;
	}

	this.find = function(q, cb) {
		_fly.get(toUrl(q)).then((function(req) {
			cb(req.data);
		}));
	};

	this.findOne = function(q, cb) {
		q.fo = "true";
		_fly.get(toUrl(q)).then((function(req) {
			cb(req.data);
		}));
	};

	this.count = function(q, cb) {
		q.c = "true";
		_fly.get(toUrl(q)).then((function(req) {
			cb(req.data);
		}));
	};

	this.bootstrapTable = function(params) {
		var q = {};
		var d = params.data;
		q.sk = d.offset;
		q.l = d.limit;
		q.s = {};
		if(d.sort) {
			var order = -1;
			if(d.order == "asc") order=1;
			q.s[d.sort] = order;
		}
		if(d.search) {
			q.q = d.filter;
		}
		var u = toUrl(q);	
		q.c = "true";
		_fly.all([_fly.get(u), _fly.get(toUrl(q))]).then(fly.spread(function(items, count) {
			console.info(items, count);
			params.success({total:count.data,rows:items.data});
		}));
	};

};