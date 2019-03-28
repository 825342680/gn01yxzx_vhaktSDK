cordova.define("tm-plugin-controller.TMController", function(require, exports, module) {
               var exec = require('cordova/exec');
               var cordova = require('cordova');
               
               function TMController(){
               
               }
            
               
               
               /**
                * 以push  方式弹出一个新的窗口,若没有导航控制器实则是present出窗口
                * success   成功回调
                * error   失败回调
                * animate   是否需要动画 true/false
                * url   是否需要动画 true/false
                * folder   html路径 如："pages"
                */
               TMController.prototype.openHtmlInterface = function(loadUrl, folder, onSuccess, onError){
                    exec(onSuccess, onError, "TMController", "pushCtr", [true, loadUrl, folder]);
               };
//
//               
               /**
                * 以push  方式弹出一个原生ViewController,若没有navigationcontroller，则会创建一个并present出此ViewController
                * success   成功回调
                * error   失败回调
                * animate   是否需要动画 true/false
                * className   要弹出的原生ViewController类名
                * paramStr   要传递给此ViewController的参数
                */
               TMController.prototype.openNativeInterface = function(className, arguments, onSuccess, onError){
               exec(onSuccess, onError, "TMController", "pushToNative", [true, className, arguments]);
               };
              
               /**
                * 根据原生的ViewController名发送消息
                * success   成功回调
                * error   失败回调
                * message   消息内容,标准json字符串
                * className   消息接收的ViewController类名
                * from   发送者，字符串，可自定义
                */
               TMController.prototype.sendMessage = function(className, message, className, from){
                    exec(success, error, "TMController", "sendMessage", [message, className, from]);
               };
               
               //检测是否登录
               TMController.prototype.checkLogin = function(onSuccess){
                    exec(onSuccess, null, "TMCordovaPlugin", "tm_checkLogin", []);
               };
               
               //获取会员信息
               TMController.prototype.getUser = function(onSuccess, onError){
                    exec(onSuccess, onError, "TMCordovaPlugin", "tm_getMemberInfo", []);
               };
//
               //获取工程配置
               TMController.prototype.getBaseConfig = function(onSuccess, onError){
                    exec(onSuccess, onError, "TMCordovaPlugin", "tm_getProjectConfig", []);
               };
//
               //登录
               TMController.prototype.openLoginInterface = function(onSuccess, onError){
                    exec(onSuccess, onError, "TMCordovaPlugin", "tm_jumpLoginPage", []);
               };
//
//               //个人中心
               TMController.prototype.openUCMainInterface = function(onSuccess, onError){
                    exec(onSuccess, onError, "TMCordovaPlugin", "tm_jumpUserCenter", []);
               };
//
               //绑定手机号
               TMController.prototype.openBindingMobileInterface = function(onSuccess, onError){
                    exec(onSuccess, onError, "TMCordovaPlugin", "tm_jumpBindPhonePage", []);
               };
//               分享链接
               TMController.prototype.shareUrl = function(success, error, des, thumb, title,url){
                    exec(success, error, "TMCordovaPlugin", "tm_shareImageText", [url, title, des, thumb]);
               };
               //               分享文本
               TMController.prototype.shareText = function(success, error, des, thumb, title,url){
               exec(success, error, "TMCordovaPlugin", "tm_shareImageText", ["", "", des, ""]);
               };
//               分享图片
               TMController.prototype.shareImage = function(success, error, imageUrl){
                    exec(success, error, "TMCordovaPlugin", "tm_shareImage", [imageUrl]);
               };
               
               
               //               显示支付弹框
               TMController.prototype.showPayDialog = function(success, error, cost){
                    exec(success, error, "TMPayPlugin", "tm_getPaySupportPlatform", [cost]);
               };
               
               //               前往支付
               TMController.prototype.gotoPay = function(success, error, type, content){
               exec(success, error, "TMPayPlugin", "tm_startPay", [content, type]);
               };
               
               
               
               
               module.exports = new TMController();
});
