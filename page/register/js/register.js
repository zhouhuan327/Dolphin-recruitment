

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return decodeURI(r[2]); return "";
}

function person_register(){

    $.ajax({
        url : "http://47.100.243.21/recruitment/user/person/register",
        type : "POST",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        crossDomain:true,
        data :JSON.stringify({
            "userName":$("#username").val(),
            "password":$("#password").val(),
            "kaptcha":$("#kaptchavalue").val(),
        }),
        success : function(result) {
            if (result.code == 101) {
                alert("注册成功");
                var userName=result.data.userName;
                var name=result.data.name;
                var rolename=result.data.rolename;
                var obj = [
                    {   "userName":userName,
                        "name":name,
                        "rolename":rolename
                    },
                ];
                var objString = JSON.stringify(obj); //JSON 数据转化成字符串
                var date = new Date();
                date.getFullYear();
                date.setTime(date.getTime()+1000*60*60);//只能这么写，10表示10秒钟
                $.cookie('logincookie',objString, { expires: date, path: '/' });
                location.href = "../resume_filling/resume_filling.html"
            }
            else{
                alert(result.msg);
                $("#kaptchaImage").attr('src',address+"/kaptcha/kaptcha.jpg");
            }
        },
        error : function(result) {
            alert("注册失败");
        }
    });
}

function company_register(){

    $.ajax({
        url : "http://47.100.243.21/recruitment/user/company/register",
        type : "POST",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        crossDomain:true,
        data :JSON.stringify({
            "userName":$("#username").val(),
            "password":$("#password").val(),
            "kaptcha":$("#kaptchavalue").val(),
        }),
        success : function(result) {
            if (result.code == 101) {
                alert("企业账号注册成功");
                var userName=result.data.userName;
                var name=result.data.name;
                var rolename=result.data.rolename;
                var obj = [
                    {   "userName":userName,
                        "name":name,
                        "rolename":rolename
                    },
                ];
                var objString = JSON.stringify(obj); //JSON 数据转化成字符串
                var date = new Date();
                date.getFullYear();
                date.setTime(date.getTime()+1000*60*60);//只能这么写，10表示10秒钟
                $.cookie('logincookie',objString, { expires: date, path: '/' });
                location.href = "../../index.html"

            }
            else{
                alert(result.msg);
                $("#kaptchaImage").attr('src',address+"/kaptcha/kaptcha.jpg");
            }
        },
        error : function(result) {
            alert("注册失败");
        }
    });

}

$(function(){
    var type=GetQueryString("type")
    if(type==2){
        $('.company').addClass('cur')
        $('.person').removeClass('cur')

    }


    $('.input-element input').focusin(function(){
        $(this).parent().addClass('active');
    });

    $('.input-element input').blur(function(){
        if(!$(this).val().length > 0) {
            $(this).parent().removeClass('active');
        }
    });
    $('.kaptchaImage').click(function () {//生成验证码
        $(this).attr('src',"http://47.100.243.21/recruitment/kaptcha/kaptcha.jpg");
    });
    $('.yonghuicon').click(function () {
        $('#username').focus();
    });
    $('.mimaicon').click(function () {
        $('#password').focus();
    });
        $('.person').click(function () {

            $('.person').addClass("cur");
            $('.company').removeClass("cur")
        });
    $('.company').click(function () {
        $('.company').addClass("cur");
        $('.person').removeClass("cur")
    });
    $(document).on("click", ".btn", function() {
        if( $('#username').val()=="" ){
            alert("用户名不能为空");
            return
        }
        if( $('#password').val()=="" ){
            alert("密码不能为空");
            return
        }
        if( $('#kaptchavalue').val()=="" ){
            alert("验证码不能为空");
            return
        }
        if($('.person').hasClass('cur')){
            person_register()
        }
        if($('.company').hasClass('cur')){
            company_register()
        }

    });
    $('#kaptchavalue').keydown(function () {
        if (event.keyCode == "13") {//keyCode=13是回车键
            if( $('#username').val()=="" ){
                alert("用户名不能为空");
                return
            }
            if( $('#password').val()=="" ){
                alert("密码不能为空");
                return
            }
            if( $('#kaptchavalue').val()=="" ){
                alert("验证码不能为空");
                return
            }
            if($('.person').hasClass('cur')){
                person_register()
            }
            if($('.company').hasClass('cur')){
                company_register()
            }
        }

    })
});
