/*
by leisan

[Script]
http-response ^https?:\/\/gitee\.com\/gentle\/Datas\/raw\/master\/ppcat\/datas requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/jasionh/qx/main/pps.jshttps://raw.githubusercontent.com/jasionh/qx/main/pps.js

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
