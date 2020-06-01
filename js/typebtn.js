$(function () {



    $(window).bind("scroll",function(){
        var top=$(this).scrollTop();//当前窗口的滚动距离
        if(top>100){
            $('.fixed_bacground').addClass('search_fixed')
        }
        if(top<100){
            $('.fixed_bacground').removeClass('search_fixed')
        }
    });
    function btnchange(){
        if($('.up').is(":hidden")){
            $('.down').hide();
            $('.up').show();
            $('.downbtn').show();
        } else {
            $('.down').show();
            $('.up').hide();
            $('.downbtn').hide();
        }
    }
    function btnchange(){
        if($('.up').is(":hidden")){
            $('.down').hide();
            $('.up').show();
            $('.downbtn').show();
        } else {
            $('.down').show();
            $('.up').hide();
            $('.downbtn').hide();
        }
        $('.downbtn').click(function () {
            downvalue=$('.downspan').text();
            upvalue=$('.upspan').text();
            $('.downspan').text(upvalue)
            $('.upspan').text(downvalue)
            btnchange()
        })

    }
    $('.upbtn').click(function () {

        btnchange();

    });

});