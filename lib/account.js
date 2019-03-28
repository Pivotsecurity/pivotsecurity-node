var rest      = require('./rest'),
    api_key    = '', 
    pub_key = '',
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
  pub_key = public_key;
}

function create(uid, email, channel) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'","channel":"'+channel+'" }';
	return rest.post(base_url + 'account/create', str, api_key);

}
function info(uid, email) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'" }';
	return rest.post(base_url + 'account/info', str, api_key);
}
function riskscore(uid, email) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'" }';
	return rest.post(base_url + 'account/riskscore', str, api_key);
}
function updateriskscore(uid, email, riskscore) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'","riskscore":"'+riskscore+'" }';
	return rest.post(base_url + 'account/updateriskscore', str, api_key);
}
function qrcode(uid, email) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'" }';
	return rest.post(base_url + 'account/qrcode', str, api_key);
}
function authcode(uid, email) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'" }';
	return rest.post(base_url + 'account/authcode', str, api_key);
}
function logs(uid, email) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'" }';
	return rest.post(base_url + 'account/logs', str, api_key);
}
function lock(uid, email) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'" }';
	return rest.post(base_url + 'account/lock', str, api_key);
}
function unlock(uid, email) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'" }';
	return rest.post(base_url + 'account/unlock', str, api_key);
}
function trainml(uid, email, data) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'","data":"'+data+'" }';
	return rest.post(base_url + 'account/trainml', str, api_key);
}
function testml(uid, email, data) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'","data":"'+data+'" }';
	return rest.post(base_url + 'account/testml', str, api_key);
}
function auth(uid, email) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'" }';
	return rest.post(base_url + 'customer/auth', str, pub_key);
}
function verify(uid, email) {
	var str = '{ "uid":"' +uid+ '","email":"'+email+'" }';
	return rest.post(base_url + 'customer/verify', str, pub_key);
}


mixin(exports, {
  env : env,
  Info: info,
  Create: create,
  Riskscore: riskscore,
  Updateriskscore: updateriskscore,
  QRcode: qrcode,
  Authcode: authcode,
  Logs: logs,
  Lock: lock,
  Unlock: unlock,
  Trainml: trainml,
  Testml: testml,
  Auth: auth,
  Verify: verify
});