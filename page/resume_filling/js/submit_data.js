var titleId=0;
$(function () {

    $('.submit').click(function () {
        page1Sub();
        Sub2();
    })
    function page1Sub() {
        $.ajax({
            url : "http://47.100.243.21/recruitment/person/add",
            type : "POST",
            datatype:"application/json",
            contentType:"application/json;charset=utf-8",
            xhrFields: { withCredentials: true },
            crossDomain:true,
            data :JSON.stringify({
                "trueName":$("#name").val(),
                "gender":$(".genderValue").val(),
                "address":$("#location").val(),
                "jobTime":$("#jobTime").val(),
                "phone":$("#tel").val(),
                "age":$('#age').val(),
                "seekEmployment":$(".seekEmployment").val()
            }),
            success : function(result) {
                if (result.code == 101) {
                    console.log("第一页提交成功")
                }
                else{

                }
            },
            error : function(result) {
                alert("失败");
            }
        });
    }
    function Sub2() {

        $.ajax({
            url : "http://47.100.243.21/recruitment/resume/add",
            type : "POST",
            datatype:"application/json",
            contentType:"application/json;charset=utf-8",
            xhrFields: { withCredentials: true },
            crossDomain:true,
            data :JSON.stringify({
                "resumeSchool":$("#schoolname").val(),
                "resumeDegree":$("#degree").val(),
                "resumeMajor":$("#major").val(),
                "resumeEducate":$("#starttime").val()+"-"+$("#endtime").val(),
                "resumePost":$("#willingjob").val(),
                "resumeSalary":$("#salary1").val()+"-"+$("#salary2").val(),
                "resumeIndustry":$("#willingjobtype").val(),
                "city":$("#jobplace").val(),
                "advantage":$("#youshi").val(),
                "certificate":$("#experience").val(),
                "titleId": titleId
            }),
            success : function(result) {
                if (result.code == 101) {
                    alert("简历完善成功")
                    console.log("第二页提交成功")
                    var type=GetQueryString("type")
                    if(type=="addresume"){
                        location.href = "../../index.html"
                    }else {
                        try {
                            var cookie = $.cookie('logincookie');
                            var info = JSON.parse(cookie)
                            var username=info[0].userName
                            var truename=$("#name").val();
                            var rolename=info[0].rolename
                        } catch(e) {

                        }
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
                    }
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
})