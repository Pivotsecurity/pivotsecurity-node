var account = require('./index');

account.env('f6074a20b7be4199b3300adf9a2c6efd','d48f21a6e0c94880b61daa2b9e5a2327');

account.Info('A13', '').on('complete',  function(data, response) {
	if (response.statusCode == 200){
	 console.log(data);
	 }else{
	 	// error
	 }
});

account.Verify('A13', '', '123124').on('complete',  function(data, response) {
	if (response.statusCode == 200){
	 	console.log(data);
	 }else{
	 	if (response.statusCode == 203){
	 		console.log('Wrong code');
	 	}
	 }
});