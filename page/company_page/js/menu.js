$(function () {
    $('.back').click(function () {
        window.location.href="../../index.html"
    });


    $.ajax({
        url : "http://47.100.243.21/recruitment/request/companyAll",
        type : "GET",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        crossDomain:true,
        success : function(result) {
            if (result.code == 101) {
                var data= result.data.jobNameVOs;
                $('.resumecenter').empty();
               $.each(data,function (index,item) {
                   $('.resumecenter').append("   <li jobid='"+item.jobId+"'><a href=\"#\">"+item.jobName+"</a></li>")

               })

            }
        },
        error : function(result) {
            alert("公司信息获取失败");
        }
    });


});
$(document).on("click",".siderbar_resume ul li",function () {
    var jobid=$(this).attr("jobID");
    var jobname=$(this).children().text();
    sessionStorage.setItem("jobid",jobid);
    sessionStorage.setItem("jobname",jobname);

    $('.frame').empty();
    $('.frame').append(" <iframe class=\"frame_resumelist\" src=\"frame_resumelist.html\" frameborder=\"0\"></iframe>")
});
$(document).on("click",".btn_companyinfo",function () {
    $('.frame').empty();
    $('.frame').append(" <iframe class=\"frame_companyinfo\" src=\"frame_companyino.html\" frameborder=\"0\"></iframe>")
});
$(document).on("click",".btn_addjob",function (){
    $('.frame').empty();
    $('.frame').append(" <iframe class=\"frame_addjob\" src=\"frame_addjob.html\" frameborder=\"0\"></iframe>")
});
$(document).on("click",".btn_joblist",function (){
    $('.frame').empty();
    $('.frame').append(" <iframe class=\"joblist\" src=\"frame_joblist.html\" frameborder=\"0\"></iframe>")
});