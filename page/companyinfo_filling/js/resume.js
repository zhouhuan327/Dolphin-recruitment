$(function () {
    setCurImg($('.page1'));

    $('.ctypemenu li a').click(function () {
        var value=$(this).html();
         $('#companyType').text(value)
    });


    
    $('.next1').click(function () {
        if($('#name').val()==""){
            alert("公司名不能为空");
            scrollPosition("name");
            return;
        }

        $('.firstpage').hide();
        $('.secondpage').show();
        $('.thirdpage').hide();
        initImg($('.page1'));
        setCurImg($('.page2'));
        initImg($('.page3'));
        $('html,body').animate({scrollTop:0},'slow');

    });

    $('.previous3').click(function () {
        $('.firstpage').show();
        $('.secondpage').hide();
        initImg($('.page2'));

        setCurImg($('.page1'));
        $('html,body').animate({scrollTop:100},'slow');

    })


});
$(document).on("click",".categoryul li a",function () {
    $(".category").val($(this).html());
});

function scrollPosition(pElementId) {
    var tTop = jQuery("#"+pElementId).offset().top;  //得到控件Top
    var tWindowHeight = jQuery(window).height(); //浏览器可视窗口高度
    var tElementHeight = jQuery("#"+pElementId).height(); //控件高度
    var tScrollTop = tTop-tWindowHeight*0.3-tElementHeight*0.5; //让控件中心位于可视窗口3分之1处
    jQuery('html, body').animate({
        scrollTop: tScrollTop
    }, 1000);
}

function initImg(curpage) {
    curpage.attr("src","images/未选-空心-圆形.png");
}

function setCurImg(curpage) {
    curpage.attr("src","images/勾-空心圆.png");
}