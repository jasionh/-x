/*
by leisan

[Script]
http-response ^https?:\/\/account\.wps\.cn\/api\/users requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/eHpo1/Surge/master/Script/wps.js

[MITM]
hostname =gitee.com
*/
var body = $response.body;
var obj = JSON.parse(body);

obj.ruleVersion = 210306;
obj.showTips = false;
obj.versionCode = 0;
obj.noticeId = 202523;


body = JSON.stringify(obj);
$done({body});
