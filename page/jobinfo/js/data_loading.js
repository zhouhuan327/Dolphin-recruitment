$(function () {
    var searchUrl = window.location.href;
    var searchData = searchUrl.split("="); //截取 url中的“=”,获得“=”后面的参数
    var searchText = decodeURI(searchData[1]); //decodeURI解码

    querydetail(searchText)
    visit(searchText)
    if(   $('.companylogo').attr("src")==""){
        $('.companylogo').attr("src","images/nulllogo.png")
    }
});


function visit(jobid) {
    $.ajax({
        url : "http://47.100.243.21/recruitment/visit/add?jobId="+jobid,
        type : "POST",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        crossDomain:true,
        success : function(result) {
            if (result.code == 101) {
                    console.log("浏览信息增加成功")
            }else {
                console.log(result.msg)
            }
        },
        error : function(result) {

        }
    });
}


 $(document).on("click",".similar li",function () {
     var jobid=$(this).attr("jobid")
     window.location.href="jobinfo.html?jobid="+jobid

 })
$(document).on("click",".jobSimpleVOs ul li",function () {
    var jobid=$(this).attr("jobid")
    window.location.href="jobinfo.html?jobid="+jobid
})
function buildjobSimpleVOs(jobSimpleVOs) {
    $('.jobSimpleVOs ul').empty()
    $.each(jobSimpleVOs,function (index,item) {
        $('.jobSimpleVOs ul').append("     <li jobid='"+item.jobId+"'>\n" +
            "                            <div class=\"container-fluid\">\n" +
            "                                <div class=\"row\">\n" +
            "                                    <span class=\"jobName\">"+item.jobName+"</span>\n" +
            "                                    <span class=\"jobSalary\">"+item.jobSalary+"</span>\n" +
            "                                </div>\n" +
            "                                <div class=\"row rowmargin\">\n" +
            "                                    <span class=\"companyName\">"+item.companyName+"</span>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </li>")
    })

}

function buildSimple(similarityJob) {
    $('.similar').empty();
    $.each(similarityJob,function (index,item) {
        $('.similar').append(" <li jobid='"+item.jobId+"'>\n" +
            "                                <div class=\"container-fluid\">\n" +
            "                                    <div class=\"row\">\n" +
            "                                        <span class=\"similar_jobname\">"+item.jobName+"</span>\n" +
            "                                        <span class=\"similar_jobslalary\" style=\"color: red  \">"+item.jobSalary+"</span>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"row top-buffer\">\n" +
            "                                        <span class=\"similar_conpanyname\">"+item.companyName+"</span>\n" +
            "                                        <span>·</span>\n" +
            "                                        <span class=\"similar_jobslalary\">"+item.jobDowntown+"</span>\n" +
            "                                        <hr>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </li>")
    })

    
}

function querydetail(jobid) {
    $.ajax({
        url : "http://47.100.243.21/recruitment/job/detailed?jobId="+jobid,
        type : "GET",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        crossDomain:true,
        success : function(result) {
            if (result.code == 101) {
                var datainfo=result.data;
                var similarityJob=result.data.similarityJob;
                var jobSimpleVOs=result.data.jobSimpleVOs;
                buildSimple(similarityJob)
                buildjobSimpleVOs(jobSimpleVOs)
                if($('.similar li').length==0){
                    $('.similar').append("<li> <span class='nosimiliar'>暂时没有相似职位</span></li>")
                }

                $('.jobname').text(datainfo.jobVO.jobName);
                $('.experience').text(datainfo.jobVO.jobExperience);
                $('.city').text(datainfo.jobVO.jobDowntown);
                $('.degree').text(datainfo.jobVO.degree);
                $('.companyType').text(datainfo.jobVO.companyType);
                $('.companyWebsite').text(datainfo.jobVO.companyWebsite);
                $('.companyname').text(datainfo.jobVO.companyName);
                $('.category').text(datainfo.jobVO.category);
                $('.companyScope').text(datainfo.jobVO.companyScope);
                $('.jobinfotext').html(tihuan(datainfo.jobVO.jobInfo));
                $('.liangdian').html(datainfo.jobVO.jobBenefit);
                $('.companyInfo').html(datainfo.jobVO.companyInfo);
                $('.location').html(datainfo.jobVO.companyProvince+"省-"+datainfo.jobVO.companyDowntown+"市-"+datainfo.jobVO.companyDowntown+"-"+datainfo.jobVO.companyArea+"-"+datainfo.jobVO.companyAddress);
                $('.com_username').html(datainfo.jobVO.nickName);
                $('.jobPhone').html(datainfo.jobVO.jobPhone);
                $('.companyMail').html(datainfo.jobVO.companyMail);
                $('.companylogo').attr("src",datainfo.jobVO.companyLogo)

            }else {

            }
        },
        error : function(result) {
            alert("erro"+result);
        }
    });

}


function tihuan(string) {
    //原始字符串
//替换所有的换行符
    string = string.replace(/\r\n/g,"<br>");
    string = string.replace(/\n/g,"<br>");

//替换所有的空格（中文空格、英文空格都会被替换）
    string = string.replace(/\s/g,"&nbsp;");

//输出转换后的字符串
   return string

}