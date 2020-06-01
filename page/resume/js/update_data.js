

    $(document).on("click",".sub_user-info",function () {
        personupdate();
    });
    $(document).on("click",".sub_exceptjob",function () {
       data= {
           "resumeId":$('.resumebox').attr("resumeId"),
            "titleId":titleId,
           "resumeSalary":$("#salary1").val()==""&&$('#salary2').val()==""?null:$("#salary1").val()+"-"+$("#salary2").val(),
           "resumeIndustry":$('.resumeIndustry').val()==""?null:$('.resumeIndustry').val(),
           "city":$('.city').val()==""?null:$('.city').val()
        };
        resumeupdate(data)

    });
    $(document).on("click",".sub_educateinfo",function () {
        data= {
            "resumeId":$('.resumebox').attr("resumeId"),
            "resumeSchool":$('.school').val()==""?null:$('.school').val(),
            "resumeEducate":$("#start").val()==""&&$('#end').val()==""?null:$("#start").val()+"-"+$("#end").val(),
            "resumeDegree":$('.degree').val()==""?null:$('.degree').val(),
            "resumeMajor":$('.major').val()==""?null:$('.major').val(),

        };
        resumeupdate(data)

    });
    $(document).on("click",".sub_youshiinfo",function () {
        data= {
            "resumeId":$('.resumebox').attr("resumeId"),
            "advantage":$('.youshi').val()==""?null:$('.youshi').val()
        };
        resumeupdate(data)

    });
    $(document).on("click",".sub_experience",function () {
        data= {
            "resumeId":$('.resumebox').attr("resumeId"),
            "resumeProject":$('.jingli').val()==""?null:$('.jingli').val()
        };
        resumeupdate(data)

    });

function personupdate() {
    $.ajax({
        url:"http://47.100.243.21/recruitment/person/update",
        type:"PUT",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        data : JSON.stringify({
            "trueName":$(".input-name").val(),
            "gender":$(".input-sex").val(),
            "jobTime":$(".input-startime").val(),
            "age":$(".input-age").val(),
            "phone":$(".input-phone").val(),
            "email":$(".input-email").val(),
            "seekEmployment": $('.input-select').val()

        }),
        success:function(result){
            if(result.code==101){
                alert("个人信息修改成功");
                personflash();
                $('.user-info-icon').show();
                $('.user-info-input').slideUp(500);
                $('html,body').animate({scrollTop:0},'slow');

            }
            else{
                alert(result.msg);
            }
        },
        error : function(result) {
            alert("失败");
        }
    });

}

function resumeupdate(inputdata) {
    $.ajax({
        url:"http://47.100.243.21/recruitment/resume/update",
        type:"PUT",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        data : JSON.stringify(inputdata),
        success:function(result){
            if(result.code==101){
                alert("修改信息成功！");
                resumeflash(resumeindex);
                $('.exceptjob-icon').show();
                $('.exceptjob-input').slideUp(500);
                $('.educateinfo-input').slideUp(500);
                $('.educateinfo-icon').show();
                $('.youshi-input').slideUp(500);
                $('.youshi-icon').show();
                $('.experience-input').slideUp(500);
                $('.experience-icon').show();
            }
            else{
                alert(result.msg);
            }
        },
        error : function(result) {
            alert("失败");
        }
    });


}