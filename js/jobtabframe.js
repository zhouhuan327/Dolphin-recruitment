
$(document).ready(function () {

    $(".fakeloader").fakeLoader({
        timeToHide:200,
        bgColor:"#ffffff",
        spinner:"spinner7"
    });

    showlist(sessionStorage.getItem("type"))


    function showlist(type) {

        $.ajax({
            url : "http://47.100.243.21/recruitment/job/popular",
            type : "GET",
            header :'Accept: application/json',
            xhrFields: { withCredentials: true },
            crossDomain:true,
            success : function(result) {
                if (result.code == 101) {
                    if(type=="its"){
                        var datafirst=result.data.its;
                    }
                    if(type=="estates"){
                        var datafirst=result.data.estates;
                    }
                    if(type=="banks"){
                        var datafirst=result.data.trades;
                    }
                    if(type=="educations"){
                        var datafirst=result.data.educations;
                    }
                    if(type=="markets"){
                        var datafirst=result.data.markets;
                    } if(type=="personnels"){
                        var datafirst=result.data.personnels;
                    }
                    if(type=="services"){
                        var datafirst=result.data.services;
                    }
                    if(type=="trades"){
                        var datafirst=result.data.trades;
                    }
                    buildtab(datafirst)
                }else {

                }
            },
            error : function(result) {
                console.log("jobtab"+result.msg);
            }
        });
    }

    function buildtab(data) {
        $('.ulbox ul').empty();
        $.each(data,function (index,item) {
            $('.ulbox ul').append("<li jobid='"+item.jobId+"'>\n" +
                "                <div class=\"container-fluid job-info\">\n" +
                "                    <div class=\"row\">\n" +
                "                        <span class=\"job-name\">"+item.jobName+"</span>\n" +
                "                        <span class=\"job-salary\">"+item.jobSalary+"</span>\n" +
                "                    </div>\n" +
                "                    <div class=\"row\">\n" +
                "                        <div class=\"job-text\">\n" +
                "                            <p>\n" +
                "                                <span class=\"location\">"+item.jobDowntown+"</span>\n" +
                "                                <span>|</span>\n" +
                "                                <span class=\"experience\">"+item.jobExperience+"</span>\n" +
                "                                <span>|</span>\n" +
                "                                <span class=\"education\">"+item.degree+"</span>\n" +
                "                            </p>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "\n" +
                "                </div>\n" +
                "                <div class=\"container-fluid company-info\" >\n" +
                "                    <div class=\"row\">\n" +
                "                        <img class=\"company-img\" src=\"images/ceshitouxiang.png\" alt=\"\">\n" +
                "                        <span class=\"company-name\">"+item.companyName+"</span>\n" +
                "                    </div>\n" +
                "\n" +
                "                </div>\n" +
                "            </li>")

        })


    }
});
$(document).on("click",".ulbox ul li",function () {
    var jobid=$(this).attr("jobid")
    window.parent.location.href="page/jobinfo/jobinfo.html?jobid="+jobid

})