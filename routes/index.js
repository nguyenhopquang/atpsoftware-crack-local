var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("ok")
});
router.get('/simple_exp.php', function(req, res, next) {
  let hdd = req.query.hdd;
  if (hdd.indexOf('INS') > 0) {
    console.log("Simple INS requested");
    let resp = "ATP-INS-4843392 - (Gói dùng thử)|Mozilla/5.0 (Linux; Android 5.0; Lenovo K50-T5 Build/LRX21M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 [FBAN/FB4A;FBAV/50.0.0.0.52;FBPN/com.facebook.katana;FBLC/vi_VN;FBBV/15584428;FBCR/VIETTEL;FBMF/OPPO;FBBD/OPPO;FBDV/1201;FBSV/4.4.2;FBCA/armeabi-v7a:armeabi;FBDM/{density=1.5,width=480,height=854};FB_FW/1;]";
    res.send(resp)
  } else {
    let str="ATP-FACEBOOK-4868422 - (Gói dùng thử)|Mozilla/5.0 (Linux; Android 5.0; Lenovo K50-T5 Build/LRX21M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 [FBAN/FB4A;FBAV/50.0.0.0.52;FBPN/com.facebook.katana;FBLC/vi_VN;FBBV/15584428;FBCR/VIETTEL;FBMF/OPPO;FBBD/OPPO;FBDV/1201;FBSV/4.4.2;FBCA/armeabi-v7a:armeabi;FBDM/{density=1.5,width=480,height=854};FB_FW/1;]";
    console.log(str);
    res.send(str)
  }
});
router.post('/simple_exp.php', function(req, res, next) {
  let str="ATP-FACEBOOK-4868422 - (Gói dùng thử)|Mozilla/5.0 (Linux; Android 5.0; Lenovo K50-T5 Build/LRX21M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 [FBAN/FB4A;FBAV/50.0.0.0.52;FBPN/com.facebook.katana;FBLC/vi_VN;FBBV/15584428;FBCR/VIETTEL;FBMF/OPPO;FBBD/OPPO;FBDV/1201;FBSV/4.4.2;FBCA/armeabi-v7a:armeabi;FBDM/{density=1.5,width=480,height=854};FB_FW/1;]";
  console.log(str);
  res.send(str)
});
router.post('/simple_lic.php', function(req, res, next) {
  res.send("ok")
});
router.get('/simple_lic.php', function(req, res, next) {
  res.send("ok")
});
router.post('/simple_lic3.php', function(req, res, next) {
  res.send("ok")
});
router.get('/simple_lic3.php', function(req, res, next) {
  res.send("ok")
});
router.post('/simple_exp2.php', function(req, res, next) {
  let str="ATP-FACEBOOK-4868422 - (Gói dùng thử)|Mozilla/5.0 (Linux; Android 5.0; Lenovo K50-T5 Build/LRX21M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 [FBAN/FB4A;FBAV/50.0.0.0.52;FBPN/com.facebook.katana;FBLC/vi_VN;FBBV/15584428;FBCR/VIETTEL;FBMF/OPPO;FBBD/OPPO;FBDV/1201;FBSV/4.4.2;FBCA/armeabi-v7a:armeabi;FBDM/{density=1.5,width=480,height=854};FB_FW/1;]";
  console.log(str);
  res.send(str)
});
router.get('/simple_exp2.php', function(req, res, next) {
  res.send("ok")
});
router.get('/simple_hash.php', function(req, res, next) {
  let hash = req.query.hash;
  console.log(hash)
  res.send(hash)
});
router.get('/ig', function(req, res, next) {
  res.send([])
});
module.exports = router;
