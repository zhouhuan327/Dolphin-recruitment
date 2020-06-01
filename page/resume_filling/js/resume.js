$(function () {
    setCurImg($('.page1'));
    var type=GetQueryString('type')
    if(type=="addresume"){
        $('.previous').css("pointer-events","none")
        $('.previous').css("color","#c5c5c5")


        $('.firstpage').hide();
        $('.secondpage').show();
        $('.thirdpage').hide();
        initImg($('.page1'));
        setCurImg($('.page2'));
        initImg($('.page3'));
    }



    $('.man').click(function () {
        $('.man').addClass('cur');
        $('.woman').removeClass('cur');
        $('.genderValue').val("男")
    });
    $('.woman').click(function () {
        $('.woman').addClass('cur');
        $('.man').removeClass('cur');
        $('.genderValue').val("女")
    });
    $('.type1').click(function () {
        $('.type1').addClass('cur');
        $('.type2').removeClass('cur');
        $('.type3').removeClass('cur');
        $('.type4').removeClass('cur');
        $('.seekEmployment').val(1);
    });
    $('.type2').click(function () {
        $('.type2').addClass('cur');
        $('.type1').removeClass('cur');
        $('.type3').removeClass('cur');
        $('.type4').removeClass('cur');
        $('.seekEmployment').val("2");
    });
    $('.type3').click(function () {
        $('.type3').addClass('cur');
        $('.type1').removeClass('cur');
        $('.type2').removeClass('cur');
        $('.type4').removeClass('cur');
        $('.seekEmployment').val("3");
    });
    $('.type4').click(function () {
        $('.type4').addClass('cur');
        $('.type1').removeClass('cur');
        $('.type2').removeClass('cur');
        $('.type3').removeClass('cur');
        $('.seekEmployment').val("4");
    });

    
    $('.next1').click(function () {
        if($('#name').val()==""){
            alert("姓名不能为空");
            scrollPosition("name");
            return;
        }

        if($(".genderValue").val()==0){
            alert("请选择性别");
            scrollPosition("gender");
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
    $('.next2').click(function () {
        $('.firstpage').hide();
        $('.secondpage').hide();
        $('.thirdpage').show();
        initImg($('.page1'));
        initImg($('.page2'));
        setCurImg($('.page3'));
        $('html,body').animate({scrollTop:0},'slow');

    });
    $('.previous').click(function () {
        $('.firstpage').show();
        $('.secondpage').hide();
        initImg($('.page2'));
        initImg($('.page3'));
        setCurImg($('.page1'));
        $('html,body').animate({scrollTop:100},'slow');

    });
    $('.previous3').click(function () {
        $('.firstpage').hide();
        $('.secondpage').show();
        $('.thirdpage').hide();
        initImg($('.page3'));
        initImg($('.page1'));
        setCurImg($('.page2'));
        $('html,body').animate({scrollTop:0},'slow');

    });


});
$(document).on("click",".dropdown-menu2 li a",function () {
    titleId=$(this).attr("titleId");
    $(".zhiwei").val($(this).html());
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
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return decodeURI(r[2]); return "";
}