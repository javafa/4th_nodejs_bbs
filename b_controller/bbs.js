var bbs = require("../c_dao/bbs")

exports.read = function(request, response, search){
	var query = {};
	if(search.type === "all"){
		query = {};
	}else if(search.type === "no"){
		query = {no : -1};
		query.no = parseInt(search.no);
	}

	console.log(query);

	bbs.read(query, function(dataset){
		console.log(dataset);

		response.end("");
	});
};

exports.create = function(request, response){

};

exports.update = function(request, response){

};

exports.delete = function(request, response){

};