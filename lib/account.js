var rest      = require('./rest'),
    api_key    = '', 
    base_url = 'http://localhost:8080/api/';

function mixin(target, source) {
  source = source || {};
  Object.keys(source).forEach(function(key) {
    target[key] = source[key];
  });

  return target;
}

function env(public_key, private_key) {
  api_key = private_key;
}

function create(_uid, _email) {

}
function info(uid, email) {

	 var str = '{ "uid":"' +uid+ '","email":"'+email+'" }'
	rest.post(base_url + 'account/info', str, api_key).on('complete', function(data, response) {
		if (data != undefined) {
  			return data;
  		}
  		return  "You must pass valid values as the arguments to Pivot Security API "
				+ "method calls.  (HINT: an example call to get customer info call"
				+ "would be: \"account.info('uid','')\")";
  
});

}



mixin(exports, {
  env : env,
  Info: info,
  Create: create
});