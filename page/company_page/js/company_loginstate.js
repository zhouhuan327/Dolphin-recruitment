$(function () {
    try {
        var cookie = $.cookie('logincookie');
        var info = JSON.parse(cookie);
        var username=info[0].userName;
        var truename=info[0].name==null?"欢迎，新用户":info[0].name;
        var rolename=info[0].rolename
    } catch(e) {

    }
    if(username=="null"||username==undefined||username==null){
        console.log("当前未登录");
        $('.user-nav').show();
        $('.user-nav-login').hide()
        //未登录
    }else {
        console.log("当前登录的username为"+username);
        console.log("当前登录的rolename为"+rolename);
        console.log("当前登录的truename为"+truename);
        if(truename=="欢迎，新用户"){
            alert("尚未完善公司信息，请前去完善");
            window.location.href="../companyinfo_filling/companyinfo_filling.html"
        }
        // if(rolename=="company"){
        //     window.location.href="page/company_page/menu.html"
        // }
        $('.user-name').text(truename);
        $('.user-nav').hide();
        $('.user-nav-login').show()
    }
});