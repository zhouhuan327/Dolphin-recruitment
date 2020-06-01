
$(function () {
    $('.upbtn').click(function () {
        btnchange();
    });
    //根据url拿条件
    var salary=GetQueryString("salary")==""?"薪资范围":GetQueryString("salary");
    var degree=GetQueryString("degree")==""?"学历要求":GetQueryString("degree");
    var ctype=GetQueryString("ctype")==""?"公司类型":GetQueryString("ctype");
    $('.salary').html(salary);
    $('.degree').html(degree);
    $('.ctype').html(ctype);


            // ---------申请职位--------------

    $('.btn-primary').click(function () {
        $.ajax({
            url : "http://47.100.243.21/recruitment/request/add",
            type : "POST",
            datatype:"application/json",
            contentType:"application/json;charset=utf-8",
            xhrFields: { withCredentials: true },
            crossDomain:true,
            data : JSON.stringify({
               "jobId":selectjobid,
                "resumeId":$('.resumeselect select').val()
            }),
            success : function(result) {
                if (result.code == 101) {
                    alert('申请成功');
                    $('.modal').map(function () {
                        if (!$(this).is(":hidden")){
                            $(this).modal('hide');
                        }
                    });
                }
            },
            error : function(result) {
                alert("提交失败");
                $('.modal').map(function () {
                    if (!$(this).is(":hidden")){
                        $(this).modal('hide');
                    }
                });
            }
        });
    });
    // ---------申请职位--------------

    $('.input').focus(function () {
        $('.search_input').css("box-shadow","1px 1px 4px #96e0ff")
    });
    $('.input').blur(function () {
        $('.search_input').css("box-shadow","")
    });
    $(document).on("click",".ulcity li",function () {
        var city=$(this).text()

        showtown(city+"市")
    });


    $('.nolimite').click(function () {
        $('.diqu').text("不限")
    });
    $('.salarymenu li a').click(function () {
        $('.salary').text($(this).text());
        newurl= changeURLArg(window.location.href,"salary",$(this).text()=="不限"?"":$(this).text());
        window.location.href = newurl;
    });
    $('.degreemenu li a').click(function () {
        $('.degree').text($(this).text());
        newurl= changeURLArg(window.location.href,"degree",$(this).text()=="不限"?"":$(this).text());
        window.location.href = newurl;
    });
    $('.ctypemenu li a').click(function () {
        $('.ctype').text($(this).text());
        newurl= changeURLArg(window.location.href,"ctype",$(this).text()=="不限"?"":$(this).text());
        window.location.href = newurl;
    });
    $('.clear').click(function () {
        window.location.href = "search.html?pn=1&chose=1";
    });
    $('.ulcity li').click(function () {
        newurl= changeURLArg(window.location.href,"town",$(this).text()=="不限"?"":$(this).text());
        window.location.href = newurl;
    });



    $('.chooselocation').click(function () {
        if($('.chooselocation').attr("zhuangtai")=="show"){
            $('.chooselocation').attr("zhuangtai","hide")
            $('.slide').slideUp()
        }
        else if($('.chooselocation').attr("zhuangtai")=="hide"){
            $('.chooselocation').attr("zhuangtai","show")
            $('.slide').slideDown()
        }

    });
    $('.dropdown-toggle').mouseover(function () {
        $(this).parent().addClass("open");
    });
    $('.dropdown-toggle').mouseout(function () {
        $(this).parent().removeClass("open");
        $(this).css("background-color","");
    });
    $('.dropdown-menu').mouseover(function () {
        $(this).parent().addClass("open");
    });
    $('.dropdown-menu').mouseout(function () {
        $(this).parent().removeClass("open");
    });
    $('.query_input').val(GetQueryString('query'));


});

$(document).on("click",".ulhangye li",function () {
    var type=$(this).text();
    showjobtitle(type);
    $('.slide2').slideDown();
});
$(document).on("click",".uljobtype li",function () {
    $('.jobtype_value').text($(this).text());
    $('.jobtype_value').attr("jobid",$(this).attr('titleid'));

    newurl= changeURLArg(window.location.href,"job",$('.jobtype_value').attr('jobid'));
    window.location.href = newurl;
    filter_parameter();

});

$(document).on("click",".townul li",function () {
    newurl= changeURLArg(window.location.href,"area",$(this).text()=="不限"?"":$(this).text());
    window.location.href = newurl;
});
$(document).on("click",".nolimite",function () {
    newurl= changeURLArg(window.location.href,"area","");
    window.location.href = newurl;
});




function btnchange(){
    if($('.up').is(":hidden")){
        $('.down').hide();
        $('.up').show();
        $('.downbtn').show();
    } else {
        $('.down').show();
        $('.up').hide();
        $('.downbtn').hide();
    }
    $('.downbtn').click(function () {
        downvalue=$('.downspan').text();
        upvalue=$('.upspan').text();
        $('.downspan').text(upvalue);
        $('.upspan').text(downvalue);
        btnchange();
    })

}
function showjobtitle(titleType) {
// 加载职位分类数据
    $.ajax({

        url : "http://47.100.243.21/recruitment/jobTitle/allTitle",
        type : "GET",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        crossDomain:true,
        success : function(result) {
            if (result.code == 101) {
                var datainfo=result.data;
                build_info_table(datainfo,titleType)
            }
        },
        error : function(result) {
            alert("职位分类获取失败");
        }
    });

}
function build_info_table(data,titleType){
    $('.uljobtype').empty();
    $.each(data, function(index, item) {
        if(item.titleType==titleType){
            $('.uljobtype').append(
                "<li titleid=\""+item.titleId+"\">"+item.titleName+"</li>"
            )

        }

    });

}

function loading_resumelist() {
    $.ajax({
        url : "http://47.100.243.21/recruitment/resume/allInfo",
        type : "GET",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        crossDomain:true,
        success : function(result) {
            if (result.code == 101) {
                var data=result.data;
                $('.resumeselect select').empty();
                $.each(data, function(index, item) {
                    $('.resumeselect select').append("    <option value='"+item.resumeId+"'>"+"简历"+(index+1)+"</option>")
                })
            }else {
                alert(result.code+"请重新登录")
            }
        },
        error : function(result) {
            alert("职位分类获取失败");
        }
    });

}
