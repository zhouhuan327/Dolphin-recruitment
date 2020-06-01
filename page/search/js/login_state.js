$('.user-nav-login').hide()
$(document).ready(function(){

    try {
        var cookie = $.cookie('logincookie');
        var info = JSON.parse(cookie)
        var username=info[0].userName
        var truename=info[0].name==null?"欢迎，新用户":info[0].name;
        var rolename=info[0].rolename
    } catch(e) {

    }
    if(username=="null"||username==undefined||username==null){
        console.log("当前未登录")
        $('.user-nav').show()
        $('.user-nav-login').hide()
        //未登录
    }else {
        console.log("当前登录的username为"+username);
        console.log("当前登录的rolename为"+rolename);
        console.log("当前登录的truename为"+truename);

        if(rolename=="user"){
            $('.resume').click(function () {
                window.location.href="../resume/resume.html"
            })
          $('.personcenter').click(function () {
              window.location.href="../personal_center/personal_center.html"
          })
            $('.setting').click(function () {
                window.location.href="../personal_center/personal_center.html?page=setting"
            })
            $('.mycollect').click(function () {
                window.location.href="../personal_center/personal_center.html?page=collect"
            })
        }
        if(rolename=="company"){
            $('.personcenter').text("企业管理")
            $('.setting').text("企业账号设置")
            $('.resume').text("企业用户")
            $('.personcenter').click(function () {
                window.location.href="../company_page/menu.html"
            })
            $('.setting').click(function () {
                window.location.href="../company_page/menu.html"
            })
            $('.mycollect').click(function () {
                window.location.href="../company_page/menu.html"
            })
        }
        if(rolename=="manage"){
            $('.resume').text("进入管理员页面")
            $('.resume').click(function () {
                window.location.href="../../page/Administrators/menu.html"
            })
            $('.userhover').hide()
        }
        $('.username').text(truename)

        $('.user-nav').hide()
        $('.user-nav-login').show()
    }
});
    
    
    $(document).on("click",".logout",function () {
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
                    window.location.reload();
                }else {
                    $.cookie("logincookie",null,{path:"/"});
                    alert('您已退出'+result.code)
                    window.location.reload();

                }
            },
            error : function(result) {
                alert("失败"+result.msg);
            }
        });
    })

    $('.userhover').mouseover(function () {
        $('.dropdown').show();
    })
    $('.dropdown').mouseover(function () {
        $('.dropdown').show();
    })
    $('.dropdown').mouseout(function () {
        $('.dropdown').hide();
    })

    $('.userhover').mouseout(function () {

        $('.dropdown').hide();
    })




