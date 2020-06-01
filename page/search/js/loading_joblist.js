allpage = 0;

$(function () {
    $(".fakeloader").fakeLoader({
        timeToHide: 300,
        bgColor: "#ffffff",
        spinner: "spinner7"
    });
    init();
    // ---------个人信息的跳转--
    $('.info1').click(function () {//谁看过我
        window.location.href = "../personal_center/personal_center.html?page=scan"
    });
    $('.info2').click(function () {
        window.location.href = "../personal_center/personal_center.html?page=deliver"
    });
    $('.info3').click(function () {
        window.location.href = "../personal_center/personal_center.html?page=interview"
    });

    $('.info4').click(function () {
        window.location.href = "../personal_center/personal_center.html?page=collect"
    });
});

$(document).on("mouseover", ".ul_jobinfo li", function () {
    $(this).find('.shoucang').show()
});

$(document).on("mouseout", ".ul_jobinfo li", function () {
    $(this).find('.shoucang').hide()
});

$(document).on("click", ".btn_collect", function () {
    var jobid = $(this).parent().parent().parent().parent().siblings('.container-fluid').attr("jobid")
    try {
        var cookie = $.cookie('logincookie');
        var info = JSON.parse(cookie)
        var rolename = info[0].rolename
    } catch (e) {

    }
    if (rolename == "company") {
        alert("企业用户不可用")
        return
    } else if (rolename == undefined) {
        alert("请先登录");
        return
    }
    addcollect(jobid)

});
$(document).on("click", ".btn_sq", function () {
    selectjobid = $(this).parent().parent().parent().parent().siblings().eq(0).attr('jobid');
    try {
        var cookie = $.cookie('logincookie');
        var info = JSON.parse(cookie)
        var rolename = info[0].rolename
    } catch (e) {

    }
    if (rolename == "user") {
        $('#myModal').modal({
            backdrop: "static"
        })
    }

    if (rolename == "company") {
        alert("企业用户不可用")
        return
    } else if (rolename == undefined) {
        alert("请先登录");
        return
    }
    loading_resumelist();
});


$(document).on("click", ".jobname", function () {

    var jobid = $(this).parent().parent().attr("jobid")
    url = "../jobinfo/jobinfo.html?jobid=" + jobid;//此处拼接内容

    window.location.href = url;
});
$(document).on("click", ".visit_jobname", function () {

    var jobid = $(this).parent().parent().parent().attr("jobid")
    url = "../jobinfo/jobinfo.html?jobid=" + jobid;//此处拼接内容

    window.location.href = url;
});

$(document).on("click", ".searchbtn", function () {
    if($('.upspan').text()=="职位"){
    newurl = changeURLArg(window.location.href, "query", $('.query_input').val())
    window.location.href = newurl;
    filter_parameter()
    } else if ($('.upspan').text()=="公司"){
       var change= changeURLArg(window.location.href, "chose", 2)
        newurl = changeURLArg(change, "query", $('.query_input').val())
        window.location.href = newurl;
        filter_parameter()

    }
});
$('.query_input').keydown(function () {
    if (event.keyCode == "13") {
        newurl = changeURLArg(window.location.href, "query", $('.query_input').val())
        window.location.href = newurl;
        filter_parameter()
    }
})

function changeURLArg(url, arg, arg_val) {
    var pattern = arg + '=([^&]*)';
    var replaceText = arg + '=' + arg_val;
    if (url.match(pattern)) {
        var tmp = '/(' + arg + '=)([^&]*)/gi';
        tmp = url.replace(eval(tmp), replaceText);
        return tmp;
    } else {
        if (url.match('[\?]')) {
            return url + '&' + replaceText;
        } else {
            return url + '?' + replaceText;
        }
    }
    return url + '\n' + arg + '\n' + arg_val;
}

function init() {
    filter_parameter();
    showvisitlist();
    showpersoninfo();
}


function filter_parameter() {
    var pn = GetQueryString("pn")
    var chose = GetQueryString("chose")
    var queryvalue = GetQueryString("query") == null ? "" : GetQueryString("query")
    var job = GetQueryString("job") == null ? "" : GetQueryString("job")
    var salary = GetQueryString("salary") == null ? "" : GetQueryString("salary")
    var degree = GetQueryString("degree") == null ? "" : GetQueryString("degree")
    var ctype = GetQueryString("ctype") == null ? "" : GetQueryString("ctype")
    var town = GetQueryString("town") == null ? "" : GetQueryString("town")
    var area = GetQueryString("area") == null ? "" : GetQueryString("area")
    var paramar = "pn=" + pn + "&" + "chose=" + chose + "&" + "query=" + queryvalue + "&" + "job=" + job + "&" + "salary=" + salary + "&" + "degree=" + degree + "&" + "ctype=" + ctype
        + "&" + "town=" + town + "&" + "area=" + area;

    querylist(paramar)
}

function paging(pn) {

    var chose = GetQueryString("chose")
    var queryvalue = GetQueryString("query") == null ? "" : GetQueryString("query")
    newurl = changeURLArg(window.location.href, "pn", pn)
    window.location.href = newurl;
    var paramar = "pn=" + pn + "&" + "chose=" + chose + "&" + "query=" + queryvalue

    querylist(paramar)

}

function addcollect(jobid) {
    $.ajax({
        url: "http://47.100.243.21/recruitment/collect/add?jobId=" + jobid,
        type: "POST",
        datatype: "application/json",
        contentType: "application/json;charset=utf-8",
        xhrFields: {withCredentials: true},
        crossDomain: true,
        success: function (result) {
            if (result.code == 101) {
                alert("职位收藏成功")
                $(this).find('.spancollect').text("已收藏")
            } else {
                alert("您已收藏该职位")
            }
        },
        error: function (result) {

            alert("您已收藏该职位")
        }
    });

}

function showvisitlist() {
    $.ajax({
        url: "http://47.100.243.21/recruitment/visit/allVisit",
        type: "GET",
        datatype: "application/json",
        contentType: "application/json;charset=utf-8",
        xhrFields: {withCredentials: true},

        crossDomain: true,
        success: function (result) {
            if (result.code == 101) {
                buildvistitlist(result.data)
            } else {

            }
        },
        error: function (result) {
            alert("服务器故障");
        }
    });

}

function showpersoninfo() {
    var cookie = $.cookie('logincookie');
    var info = JSON.parse(cookie)
    var rolename = info[0].rolename
    if (rolename == "user") {
        $.ajax({
            url: "http://47.100.243.21/recruitment/request/homepage",
            type: "GET",
            datatype: "application/json",
            contentType: "application/json;charset=utf-8",
            xhrFields: {withCredentials: true},
            crossDomain: true,
            success: function (result) {
                if (result.code == 101) {
                    var data = result.data;
                    $('.scan').text(data.scan)
                    $('.deliver').text(data.deliver)
                    $('.interview').text(data.interview)
                    $('.collect').text(data.collect)
                    $('.personinfo').slideDown(800)
                } else {

                }
            },
            error: function (result) {

            }
        });
        $.ajax({
            url: "http://47.100.243.21/recruitment/person/info",
            type: "GET",
            datatype: "application/json",
            contentType: "application/json;charset=utf-8",
            xhrFields: {withCredentials: true},
            crossDomain: true,
            success: function (result) {
                if (result.code == 101) {
                    var data = result.data;
                    $('.personinfo_name').text(data.trueName);
                    $('.personinfo_age').text(data.age + "岁");
                    $('.seekEmployment').text(data.seekEmployment)
                } else {

                }
            },
            error: function (result) {

            }
        });


    }
    else {
        return
    }

}

function querylist(paramar) {

    $.ajax({
        url: "http://47.100.243.21/recruitment/job/querySimple?" + paramar,
        type: "GET",
        datatype: "application/json",
        contentType: "application/json;charset=utf-8",
        xhrFields: {withCredentials: true},

        crossDomain: true,
        success: function (result) {
            if (result.code == 101) {
                allpage = result.data.pages;
                console.log("allpages" + allpage)
                buildpagination(allpage)
                buildjoblist(result.data.list)
            }
        },
        error: function (result) {

        }
    });
}

function buildpagination(data) {
    $('.pagination').empty()
    $('.pagination').append(" <li  class=\"previous\"><a href=\"#\">&laquo;</a></li>")
    for (var i = 1; i <= data; i++) {
        $('.pagination').append(
            "  <li><a  pagenum='" + i + "'>" + i + "</a></li>"
        )
    }
    $('.pagination').append("   <li class=\"next\"><a  href=\"#\">&raquo;</a></li>")
    var pnnow = GetQueryString("pn")
    $('.pagination li').eq(pnnow).addClass('active')
    $(document).on("click", ".pagination li a", function () {
        if ($(this)[0].hasAttribute("pagenum") == true) {
            paging($(this).attr('pagenum'))
            $('.pagination li').removeClass('active')
            $(this).parent().addClass('active')
        }
    })
    $(document).on("click", ".next", function () {
        pnnow = parseInt(pnnow) + 1;
        paging(pnnow)
    })
    $(document).on("click", ".previous", function () {
        pnnow = parseInt(pnnow) - 1;
        paging(pnnow)
    })


    if (allpage == pnnow) {
        $('.next').addClass('disabled')
    }
    if (pnnow == 1) {
        $('.previous').addClass('disabled')
    }


}

function buildvistitlist(data) {

    $('.ul_visitinfo').empty()
    $.each(data, function (index, item) {
        $('.ul_visitinfo').append("<li jobid=\"" + item.jobId + "\">\n" +
            "                                <div class=\"container-fluid\">\n" +
            "                                    <div class=\"row \">\n" +
            "                                        <div class=\"visit_jobname\">" + item.jobName + "</div>\n" +
            "                                        <span class=\"visit_salary\">" + item.jobSalary + "</span>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"row mt\">\n" +
            "                                        <div class=\"visit_companyname\">" + item.companyName + "</div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                </div>\n" +
            "                            </li>")

    })


}

function buildjoblist(data) {
    $('.ul_jobinfo').empty()
    if (allpage == 0) {
        $('.ul_jobinfo').append("<p class='nojob'>没有找到相关职位，修改筛选条件试一下</p>")
    }
    $.each(data, function (index, item) {

        console.log(item)
        $('.ul_jobinfo').append(
            "<li>\n" +
            "                            <div class=\"container-fluid\" jobid=\"" + item.jobId + "\">\n" +
            "                                <div class=\"row\">\n" +
            "                                    <span class=\"jobname\">" + item.jobName + "</span>\n" +
            "                                    <span class=\"jobslalry\">" + item.jobSalary + "</span>\n" +
            "                                     <span class='jobnum'>招" + item.jobNum + "人</span>" +
            "                                    <span class=\"companyname\">" + item.companyName + "</span>\n" +
            "                                </div>\n" +
            "                                <div class=\"row secondrow\">\n" +
            "                                    <span class=\"joblocation\">" + item.jobDowntown + item.jobArea + "</span> <span class=\"fengefu\">|</span>\n" +
            "                                    <span class=\"experience\">" + item.jobExperience + "</span>  <span class=\"fengefu\">|</span>\n" +
            "                                    <span class=\"degree\">" + item.degree + "</span>\n" +
            "\n" +
            "\n" +
            "                                    <span class=\"ctype\"> <span class=\"fengefu\">|</span>" + item.companyScope + "</span>\n" +
            "                                    <span class=\"ctype\"><span class=\"fengefu\">|</span>" + item.companyType + "</span>\n" +
            "                                    <span class=\"ctype\"> " + item.category + "</span>\n" +
            "\n" +
            "                                </div>\n" +
            "                                <div class=\"row thirdrow\">\n" +
            "\n" +
            "                                    <span class=\"\">" + item.jobBenefit + "</span>\n" +
            "                                    <span class=\"createtime\">2018-11-15</span>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            " <div class=\"shoucang\">\n" +
            "                                    <div class=\"container-fluid\">\n" +
            "                                        <div class=\"row row_shoucang\">\n" +
            "                                            <div class=\"col-md-5\"><div class='btn_collect'><img src=\"images/收%20藏.png\" alt=\"\"><span class='spancollect'>收藏</span></div></div>  \n" +
            "                                            <div class=\"col-md-5\"><div class='btn btn_sq' data-toggle=\"modal\" >申请职位</div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>" +
            "                        </li>"
        )
    })


}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return "";
}