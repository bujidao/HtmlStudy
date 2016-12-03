/**
 * Created by ZJing on 2017/12/3.
 */

define(['require'],function($){
    var $container = $('<div class="container"></div>');
    var $tab = $('<ul class="tab"></ul>');
    var $content = $('<div class="content"></div>');
    var $arrow = $('<div class="arrow"></div>');
    var $prev = $('<span class="prev">&lt;</span>');
    var $next = $('<span class="next">&gt;</span>');

    $arrow.append($prev).append($next);)
    this.$container.append($tab).append($content).append($arrow);

    $(document.body).append(this.$container);
});
