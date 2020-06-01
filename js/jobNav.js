$(function(){
    var thisTime;
    //鼠标离开左侧内容栏
    $('.banner .left_list .float').mouseleave(function(even){
        thisTime = setTimeout(thisMouseOut,1000);
    });
    //鼠标点击左侧内容栏   滑动出弹层
    $('.banner .left_list .float').mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        clearTimeout(thisTime);
        var thisUB = $('.banner .left_list .float').index($(this));
        if($.trim($('.cat_subcont .right_box').eq(thisUB).html()) != ""){
            $('.cat_subcont').addClass('active');
            $('.right_box').hide();
            $('.right_box').eq(thisUB).show("fast");
        }else{
            $('.cat_subcont').removeClass('active');
        }
    });
    //函数——执行鼠标离开左侧内容栏的动作
    function thisMouseOut(){
        $('.cat_subcont').removeClass('active');
        $('.banner .left_list .float').removeClass('active');

    }
    $('.cat_subcont').mouseenter(function(){
        clearTimeout(thisTime);
        $('.cat_subcont').addClass('active');
    });
    $('.cat_subcont').mouseleave(function(){
        $('.cat_subcont').removeClass('active');
        $('. .left_list .float').removeClass('active');
    });
    //第一张显示
    $(".pic li").eq(0).show();
    //鼠标滑过手动切换，淡入淡出
    $("#position li").mouseover(function() {
        $(this).addClass('cur').siblings().removeClass("cur");
        var index = $(this).index();
        i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
        // $(".pic li").eq(index).show().siblings().hide();
        $(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
    });
    //自动轮播
    var i=0;
    var timer=setInterval(play,2000);
    //向右切换
    var play=function(){
        i++;
        i = i > 2 ? 0 : i ;
        $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
        $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
    };
    //向左切换
    var playLeft=function(){
        i--;
        i = i < 0 ? 2 : i ;
        $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
        $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
    };
    //鼠标移入移出效果
    $("#container").hover(function() {
        clearInterval(timer);
    }, function() {
        timer=setInterval(play,2000);
    });
    //左右点击切换
    /*  $("#prev").click(function(){
          playLeft();
      })
      $("#next").click(function(){
          play();
  })*/


});