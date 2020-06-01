$(function () {
$('.btn_Review').click(function () {
    $('.frame').empty();
    $('.frame').append(" <iframe class=\"frame_review\" src=\"Review.html\" frameborder=\"0\"></iframe>")
})

$('.logout').click(function () {
    if(window.confirm("确定要退出登录吗")){
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
                    window.location.href="../../index.html";
                }else {
                    $.cookie("logincookie",null,{path:"/"});
                    alert('您已退出'+result.code)
                    window.location.href="../../index.html";
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

});

