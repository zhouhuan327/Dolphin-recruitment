$(function () {
    showtown("杭州市")
});
function showtown(cityname) {
    $.ajax({
        url: "city.json",//json文件位置
        type: "GET",//请求方式为get
        dataType: "json", //返回数据格式为json
        success: function(data) {//请求成功完成后要执行的方法
            //each循环 使用$.each方法遍历返回的数据date
            var towndata= querytownbyname(data,cityname);
            buildtable(towndata)
        }
    })
}
function querytownbyname(data,cityname) {
    var town = [];
    $.each(data, function(i, item) {
        $.each(item.city, function(i, item) {
            if(item.name==cityname){
                $.each(item.area, function(i, item) {
                    town.push(item)
                })
            }
        })
    });
    console.log(town);
    return town;

}

function buildtable(data) {
    $('.townul').empty();
    $.each(data, function(index, item) {
        $('.townul').append(
            "<li>"+item+"</li>"
        )
    })
}