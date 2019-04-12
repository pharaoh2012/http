var leancloud = function(url, collectionName) {
	if (!url) throw "url is null";
	if (!collectionName) throw "collectionName is null";
	var _url = url;
	var _collectionName = collectionName;
	var isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
	var _fly;
	if (isNode) {
		_fly = require('flyio');
	} else {
		_fly = window.fly;
	}

	this.bootstrapTable = function(params) {
		console.info(params);
		var d = params.data;
		let where = d.search?d.filter:"";
		let sql = `select count(*),* from ${_collectionName} ${where} limit ${params.data.offset},${params.data.limit}`;
		if(d.sort) {
			var order = "-";
			if(d.order == "asc") order="";
			sql += " order by "+order + d.sort;
		}

		_fly.get(_url+encodeURIComponent(sql)).then(function(ret){
			let r = JSON.parse(ret.data);
			params.success({total:r.count,rows:r.results});
		});
		// var u = toUrl(q);	
		// if(count_cache.search == d.filter) {
		// 	var count = count_cache.count;
		// 	_fly.get(u).then(function (items) {
		// 		params.success({total:count,rows:items.data});
		// 	});
		// 	return;
		// }
		// q.c = "true";
		// _fly.all([_fly.get(u), _fly.get(toUrl(q))]).then(fly.spread(function(items, count) {
		// 	console.info(items, count);
		// 	count_cache.search = d.filter;
		// 	count_cache.count = count.data;
		// 	params.success({total:count.data,rows:items.data});
		// }));
	};

};