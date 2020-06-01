$(function () {
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
            alert("职位分类获取失败");
        }
    });
})



function build_info_table(data) {
    $.each(data, function (index, item) {
        if (item.titleType == "互联网IT") {
            $('.joblist1').append(
                "<li><a  href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "金融") {
            $('.joblist2').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "房地产") {
            $('.joblist3').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "建筑") {
            $('.joblist4').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "贸易") {
            $('.joblist5').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "零售") {
            $('.joblist6').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "物流") {
            $('.joblist7').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "教育") {
            $('.joblist8').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "传媒") {
            $('.joblist9').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "广告") {
            $('.joblist10').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "服务业") {
            $('.joblist11').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "市场") {
            $('.joblist12').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "销售") {
            $('.joblist13').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "人事") {
            $('.joblist14').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "财务") {
            $('.joblist15').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }
        if (item.titleType == "行政") {
            $('.joblist16').append(
                "<li><a href='#' titleId='"+item.titleId+"'>" + item.titleName + "</a></li>"
            )

        }

    });

}