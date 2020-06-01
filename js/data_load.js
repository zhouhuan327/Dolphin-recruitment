
$(document).ready(function(){
    buildAD()
    sessionStorage.setItem("type","its")
    $('.fenlei li').click(function () {
        // $(this).find('span').css('top',"0px")
        $(this).siblings().removeClass('active').end().addClass('active');

       var type= $(this).children().attr('type');
       sessionStorage.setItem("type",type)
        $('.freshdiv').empty();
        $('.freshdiv').append(" <iframe class=\"tabframe\" src=\"jobtabframe.html\" frameborder=\"0\"  scrolling=\"no\"></iframe>")
    });

    $('.searchbtn').click(function () {
        var query=$('.inputvalue').val()
        window.location.href="page/search/search.html?pn=1&chose=1&query="+query
    });
    $('.inputvalue').keydown(function () {
        if (event.keyCode == "13") {//keyCode=13是回车键
            var query=$('.inputvalue').val()
            window.location.href="page/search/search.html?pn=1&chose=1&query="+query
        }
    })

    $('.search_btn').mouseover(function () {
        $('.search_btn img').css("top","8px")
    });
    $('.search_btn').mouseout(function () {
        $('.search_btn img').css("top","14px")
    });

    $('.qr').mouseover(function () {
        $('.qrcode').slideDown()
    })
    $('.qr').mouseout(function () {
        $('.qrcode').hide()
    })



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
                build_info_table(datainfo)
            }
        },
        error : function(result) {
            console.log("职位分类获取失败");
        }
    });

});
$(document).on("click",".jump li a",function () {

    url="page/search/search.html?pn=1&chose=1"+"&"+"job="+$(this).attr('titleid')
    window.location.href = url;
});
function build_info_table(data){

    $.each(data, function(index, item) {
        if(item.titleType=="互联网IT"){
            $('.joblist1').append(
                "<li><a href='#'titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="金融"){
            $('.joblist2').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        } if(item.titleType=="房地产"){
            $('.joblist3').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="建筑"){
            $('.joblist4').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="贸易"){
            $('.joblist5').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="零售"){
            $('.joblist6').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }if(item.titleType=="物流"){
            $('.joblist7').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="教育"){
            $('.joblist8').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="传媒"){
            $('.joblist9').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="广告"){
            $('.joblist10').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="服务业"){
            $('.joblist11').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="市场"){
            $('.joblist12').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="销售"){
            $('.joblist13').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="人事"){
            $('.joblist14').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="财务"){
            $('.joblist15').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }
        if(item.titleType=="行政"){
            $('.joblist16').append(
                "<li><a href='#' titleid='"+item.titleId+"'>"+item.titleName+"</a></li>"
            )

        }

    });

}

function buildAD() {
    $.ajax({

        url : "http://47.100.243.21/recruitment/advertise/allAdvertise",
        type : "GET",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        crossDomain:true,
        success : function(result) {
            if (result.code == 101) {
                var datainfo=result.data;
               $('.advertisement ul').empty();
               $.each(datainfo,function (index,item) {

                   $('.advertisement ul').append(" <li><a href=\""+item.advertiseAddress+"\" target=\"_blank\"><img src=\""+item.advertiseImg+"\" alt=\"\"></a></li>")
               })
            }
        },
        error : function(result) {
            console.log("职位分类获取失败");
        }
    });

}