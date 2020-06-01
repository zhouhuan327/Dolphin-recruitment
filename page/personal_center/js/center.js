$(function () {
    var page=GetQueryString("page");
    if(page=="scan"){
        $('.right').empty();
        $('.right').append(" <iframe class=\"rightframe scan\" src=\"scan.html?pn=1\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
    }
    if(page=="collect"){
        $('.right').empty();
        $('.right').append(" <iframe class=\"rightframe mycollect\" src=\"mycollect.html?pn=1\" scrolling=\"NO\" frameborder=\"0\"></iframe>")

    }
    if(page=="interview"){
        $('.right').empty();
        $('.right').append(" <iframe class=\"rightframe interest\" src=\"interview.html?pn=1\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
    }

    if(page=="deliver"){
        $('.right').empty();
        $('.right').append(" <iframe class=\"rightframe requestall\" src=\"request_all.html?pn=1\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
    }
    if(page=="setting"){
        $('.right').empty();
        $('.right').append(" <iframe class=\"rightframe setting\" src=\"setting.html\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
    }


    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return decodeURI(r[2]); return "";
    }


});