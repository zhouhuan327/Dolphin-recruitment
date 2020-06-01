var resumeindex=0
var resumelength=0;
$(function () {
    personflash();
    resumeflash(resumeindex);
    console.log("resumelength = "+resumelength)


    for(var i=2;i<=resumelength;i++){
        $('#myTab').append("<li ><a href=\"\" class=\"resume"+i+"\" data-toggle=\"tab\" index=\""+(i-1)+"\">简历"+i+"</a></li>")
    }

});
function personinfoload(datainfo) {
    $('.user-name').text(datainfo.trueName);
    $('.sex').text(datainfo.gender);
    $('.age').text(datainfo.age+"岁");
    var date = new Date();
    var testdata=datainfo.jobTime;
    var exp=date.getFullYear()-testdata.substring(0,4);
    if(exp<1){
        $('.jingyan').text("应届生")
    }else {
        $('.jingyan').text(exp+"年工作经验")
    }
    $('.zuangtai').text(datainfo.seekEmployment);
    $('.tel').text(datainfo.phone);
    $('.email').text(datainfo.email);

    /*-----------input中的数据*/
    $('.input-name').val(datainfo.trueName);
    $('.input-sex').val(datainfo.gender);
    if($('.input-sex').val()=="男"){$('.man').addClass('cur') }
    else($('.woman').addClass('cur'));
    $('.input-age').val(datainfo.age);
    $('.input-email').val(datainfo.email);
    /*  $('.input-startime').val(datainfo.email);*/
    $('.input-phone').val(datainfo.phone);

}

function resumeload(resumedata) {
    $('.job-name').text(resumedata.titleName);
    $('.job-salary').text(resumedata.resumeSalary);
    $('.hangye').text(resumedata.resumeIndustry);
    $('.didian').text(resumedata.city);
    $('.school').text(resumedata.resumeSchool);
    $('.major').text(resumedata.resumeMajor);
    $('.education').text(resumedata.resumeDegree);//个人信息
    $('.time').text(resumedata.resumeEducate);
    $('.degree').text(resumedata.resumeDegree);
    $('.gerenyoushi').text(resumedata.advantage);
    $('.gongzuojingli').text(resumedata.resumeProject);

}

function personflash() {
    $.ajax({
        url : "http://47.100.243.21/recruitment/person/info",
        type : "GET",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        crossDomain:true,
        success : function(result) {
            if (result.code == 101) {
                var datainfo=result.data;
                personinfoload(datainfo)
            }else {
                alert("请重新登录")
            }
        },
        error : function(result) {
                alert("服务器故障")
        }
    });

}
function resumeflash(resumeindex) {
    $.ajax({
        url : "http://47.100.243.21/recruitment/resume/allInfo",
        type : "GET",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        async: false,
        crossDomain:true,
        success : function(result) {
            if (result.code == 101) {
                var datainfo=result.data;
                resumeload(datainfo[resumeindex]);
                $('.resumebox').attr("resumeId",datainfo[resumeindex].resumeId);
                $('.resumebox').attr("resumelength",datainfo.length);
                resumelength= $('.resumebox').attr("resumelength")
                if(resumelength>=3){
                    $('.add').hide()
                }

            }else {

            }
        },
        error : function(result) {
            alert("职位分类获取失败");
        }
    });

}