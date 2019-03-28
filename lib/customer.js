var rest      = require('./rest'),
    api_key    = '';

function env(public_key, private_key) {
  api_key = private_key;
}

function info(_uid, _email) {
	var jsonData = { uid: _uid, email: _email };
	rest.postJson('http://example.com/action', jsonData).on('complete', function(data, response) {
  		if (response.statusCode == 200) {
  			return data;
  		}
  		return  "You must pass valid values as the arguments to Pivot Security API "
				+ "method calls.  (HINT: an example call to get customer info call"
				+ "would be: \"account.info('uid','')\")";

	});
}
