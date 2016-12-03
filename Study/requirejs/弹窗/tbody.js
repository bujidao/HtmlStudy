/**
 * Created by ZJing on 2017/2/19.
 */

require(['jquery','dialog'],function($,Dialog){
    var arr = [];
    $('#open').on('click',function(){
        var dialog = new Dialog();
        arr.push(dialog);
        dialog.open({
            title:'登录',
            url:'login.html'
        });
    });
    $('#close').on('click',function(){
        arr.pop().close();
    });
});
