
$(function(){
    $('.guanliyuan').click(function () {
        window.location.href="Administrators_login.html"
    })

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
    })
    $('.btn').click(function () {
        login()
    })
    $('#kaptchavalue').keydown(function () {
        if (event.keyCode == "13") {//keyCode=13是回车键
           login()
        }
    })

    function login() {

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
        $.ajax({
            url : "http://47.100.243.21/recruitment/user/login",
            type : "POST",
            datatype:"application/json",
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            xhrFields: { withCredentials: true },
            crossDomain:true,
            data : {
                "username":$("#username").val(),
                "password":$("#password").val(),
                "kaptcha":$("#kaptchavalue").val()
            },
            success : function(result) {
                if (result.code == 101) {
                    alert("登录成功");
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
                    $(".kaptchaImage").attr('src',"http://47.100.243.21/recruitment/kaptcha/kaptcha.jpg");
                }
            },
            error : function(result) {
                alert("登录失败");
            }
        });
    }
});
