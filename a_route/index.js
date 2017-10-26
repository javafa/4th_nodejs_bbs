var u = require("url");
var qs = require("querystring");
var bbs = require("../b_controller/bbs");

exports.process = function(request, response){
	var url = u.parse(request.url);
	var method = request.method.toLowerCase();
	var cmds = url.pathname.split("/");
	if(cmds[1] == "bbs"){
		if(method == "get"){
			var query = qs.parse(url.query);
			bbs.read(request, response, query);
		}else if(method == "post"){
			bbs.create(request, response);
		}else if(method == "put"){
			bbs.update(request, response);
		}else if(method == "delete"){
			bbs.delete(request, response);
		}
	}else{

	}
};