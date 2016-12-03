/**
 * Created by ZJing on 2017/2/19.
 */
define(['jquery'],function($){
    function Dialog(){
    }
    Dialog.prototype.open = function(option) {
        var setting = {
            width: 500,
            height: 320,
            title:"这不是一个标题"
        };
        $.extend(setting,option);
        var that = this;
        this.$container = $('<div class="container"></div>');
        var $mask = $('<div class="mask"></div>').on('click', function () {
            that.close();
        });
        var $content = $('<div class="content"></div>');
        var $nav = $('<div class="nav"></div>');
        var $title = $('<span class="title">'+setting.title+'</span>');
        var $close = $('<span class="close">[&nbsp;X&nbsp;]</span>').on('click', function () {
            that.close();
        });
        var $main = $('<div class="main"></div>').load(setting.url);

        $nav.append($title).append($close);
        $content.append($nav).append($main);
        this.$container.append($mask).append($content);


        $(document.body).append(this.$container);


    }
    Dialog.prototype.close = function(){
        //if(this.$container){
        //    this.$container.remove();
        //}
        this.$container.remove();
    }
    return Dialog;

});
