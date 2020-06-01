$(function () {

    var page=GetQueryString("page");

    if(page=="deliver"){
        $('ul li').siblings().eq(0).addClass('active')
    }
    if(page=="collect"){
        $('ul li').siblings().eq(1).addClass('active')
    }
    if(page=="scan"){
        $('ul li').siblings().eq(2).addClass('active')
    }
    if(page=="interview"){
        $('ul li').siblings().eq(3).addClass('active')
    }
    if(page=="setting"){
        $('ul li').siblings().eq(4).addClass('active')
    }
    $('.btn_scan').click(function () {
        $('.right',window.parent.document).empty();
        $('.right',window.parent.document).append(" <iframe class=\"rightframe scan\" src=\"scan.html?pn=1\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
    });
    $('.btn_collect').click(function () {
        $('.right',window.parent.document).empty();
        $('.right',window.parent.document).append(" <iframe class=\"rightframe mycollect\" src=\"mycollect.html?pn=1\" scrolling=\"NO\" frameborder=\"0\"></iframe>")

    });
    $('.btn_request').click(function () {
        $('.right',window.parent.document).empty();
        $('.right',window.parent.document).append(" <iframe id='requestall' class=\"rightframe requestall\" src=\"request_all.html?pn=1\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
    });
    $('.btn_interview').click(function () {
        $('.right',window.parent.document).empty();
        $('.right',window.parent.document).append(" <iframe class=\"rightframe interview\" src=\"interview.html?pn=1\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
    });
    $('.btn_setting').click(function () {
        $('.right',window.parent.document).empty();
        $('.right',window.parent.document).append(" <iframe class=\"rightframe setting\" src=\"setting.html\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
    });
$('.btn_logout').click(function () {
    if(window.confirm('你确定要注销账号吗？')){
        //alert("确定");
        $.ajax({
            url : "http://47.100.243.21/recruitment/user/logout",
            type : "GET",
            header :'Accept: application/json',
            xhrFields: { withCredentials: true },
            crossDomain:true,
            success : function(result) {
                if (result.code == 101) {
                    $.cookie("logincookie",null,{path:"/"});
                    alert("退出成功")
                    window.parent.location.href="../../index.html"
                }else {
                    $.cookie("logincookie",null,{path:"/"});
                    alert('您已退出'+result.code)
                    window.parent.location.href="../../index.html"

                }
            },
            error : function(result) {
                alert("失败"+result.msg);
            }
        });
    }else{
        //alert("取消");
        return false;
    }
})

    $('ul li').click(function () {
        $(this).siblings().removeClass('active').end().addClass('active');
    });

    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.parent.location.search.substr(1).match(reg);
        if(r!=null)return decodeURI(r[2]); return "";
    }

    //jQuery time
    var parent, ink, d, x, y;
    $("ul li a").click(function(e){
        parent = $(this).parent();
        //create .ink element if it doesn't exist
        if(parent.find(".ink").length == 0)
            parent.prepend("<span class='ink'></span>");

        ink = parent.find(".ink");
        //incase of quick double clicks stop the previous animation
        ink.removeClass("animate");

        //set size of .ink
        if(!ink.height() && !ink.width())
        {
            //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
            d = Math.max(parent.outerWidth(), parent.outerHeight());
            ink.css({height: d, width: d});
        }

        //get click coordinates
        //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
        x = e.pageX - parent.offset().left - ink.width()/2;
        y = e.pageY - parent.offset().top - ink.height()/2;

        //set the position and add class .animate
        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
    })
});