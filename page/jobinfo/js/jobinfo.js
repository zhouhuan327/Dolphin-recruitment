$(function () {

    $(window).bind("scroll",function(){
        var top=$(this).scrollTop();//当前窗口的滚动距离
        if(top>100){
            $('.title').addClass('title_fixed')
        }
        if(top<100){
            $('.title').removeClass('title_fixed')
        }
    })

});