var titleId=0;
$(function () {

    $('.submit').click(function () {
       Sub();
    });

    function Sub() {
        $.ajax({
            url : "http://47.100.243.21/recruitment/company/add",
            type : "POST",
            datatype:"application/json",
            contentType:"application/json;charset=utf-8",
            xhrFields: { withCredentials: true },
            crossDomain:true,
            data :JSON.stringify({
                "category": $('.category').val(),
                "companyAddress": $('.companyAddress').val(),
                "companyArea": $('.companyArea').val(),
                "companyDowntown": $('.companyDowntown').val(),
                "companyInfo": $('.companyInfo').val(),
                "companyMail": $('#companyMail').val(),
                "companyName": $('#companyName').val(),
                "companyProvince": $('.companyProvince').val(),
                "companyScope": $('.companyScope').val(),
                "companyType": $('#companyType').text(),
                "companyWebsite": $('.companyWebsite').val(),

            }),
            success : function(result) {
                if (result.code == 101) {
                    alert("公司信息完善成功");
                    var cookie = $.cookie('logincookie');
                    var info = JSON.parse(cookie);
                    var username=info[0].userName;
                    var truename=$('#companyName').val();
                    var rolename=info[0].rolename;
                    var obj = [
                        {   "userName":username,
                            "name":truename,
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
                }
            },
            error : function(result) {
                alert("失败");
            }
        });
    }
});