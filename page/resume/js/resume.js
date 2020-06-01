$(function () {
    $('.add').click(function () {
        window.location.href="../resume_filling/resume_filling.html?type=addresume"
    })
    $('.user-info-icon').click(function () {
        $('.user-info-icon').hide();
        $('.user-info-input').slideDown(500);
        $('html,body').animate({scrollTop:130},'slow');

    });
    $('.exceptjob-icon').click(function () {
        $('.exceptjob-icon').hide();
        $('.exceptjob-input').slideDown(500);

        scrollToLocation('.exceptjob-input')

    });
    $('.educateinfo-icon').click(function () {
        $('.educateinfo-icon').hide();
        $('.educateinfo-input').slideDown(500);

        scrollToLocation('.educateinfo-input')

    });

    $('.youshi-icon').click(function () {
        $('.youshi-icon').hide();
        $('.youshi-input').slideDown(500);

        scrollToLocation('.youshi-input')

    });
    $('.experience-icon').click(function () {
        $('.experience-icon').hide();
        $('.experience-input').slideDown(500);

        scrollToLocation('.educateinfo-input')

    });
   /* ------------*/
    $(".user-info-icon").hover(function () {

        $(".bianjiicon").css("display","block")
    },   function () {
        $(".bianjiicon").css("display","none")
    });
    $(".exceptjob-icon ").hover(function () {

        $(".bianjiicon2").css("display","block")
    },   function () {
        $(".bianjiicon2").css("display","none")
    });
    $(".educateinfo-icon").hover(function () {

        $(".bianjiicon3").css("display","block")
    },   function () {
        $(".bianjiicon3").css("display","none")
    });
    $(".youshi-icon").hover(function () {

        $(".bianjiicon4").css("display","block")
    },   function () {
        $(".bianjiicon4").css("display","none")
    });
    $(".experience-icon").hover(function () {

        $(".bianjiicon5").css("display","block")
    },   function () {
        $(".bianjiicon5").css("display","none")
    });


    $('.man').click(function () {
        $('.man').addClass('cur');
        $('.woman').removeClass('cur');
        $('.genderValue').val("男")
    });
    $('.woman').click(function () {
        $('.woman').addClass('cur');
        $('.man').removeClass('cur');
        $('.genderValue').val("女")
    });
    $(".yingjiesheng").click(function () {
        $(".yingjiesheng").addClass('cur');
        var now = new Date();
        var today = now.getFullYear()+"-"+"06"+"-"+"30" ;
        $('#starttime').val(today);
    });
    $('.cancle_user-info').click(function () {
        $('.user-info-icon').show();
        $('.user-info-input').slideUp(500);
        $('html,body').animate({scrollTop:0},'slow');
    });
    $('.cancle_exceptjob').click(function () {
        $('.exceptjob-icon').show();
        $('.exceptjob-input').slideUp(500);
    });
    $('.cancle_educateinfo').click(function () {
        $('.educateinfo-input').slideUp(500);
        $('.educateinfo-icon').show();
    });
    $('.cancle_youshiinfo').click(function () {
        $('.youshi-input').slideUp(500);
        $('.youshi-icon').show();
    });
    $('.cancle_experience').click(function () {
        $('.experience-input').slideUp(500);
        $('.experience-icon').show();
    });

    $('.addresume').click(function () {

    });

    $('.resume1').click(function () {
        resumeindex=0;
        personflash();
        resumeflash(resumeindex);

    })

});
$(document).on("click",".dropdown-menu2 li a",function () {
    titleId=$(this).attr("titleId");
    console.log("titleId =" +titleId)
});
$(document).on("click",".resume2",function () {
    resumeindex=1;
    personflash();
    resumeflash(resumeindex);
});
$(document).on("click",".resume3",function () {
    resumeindex=2;
    personflash();
    resumeflash(resumeindex);
});
function scrollToLocation(location) {
    var mainContainer = $('.main'),
        scrollToContainer = mainContainer.find(location);//滚动到<div id="thisMainPanel">中类名为son-panel的最后一个div处
    //scrollToContainer = mainContainer.find('.son-panel:eq(5)');//滚动到<div id="thisMainPanel">中类名为son-panel的第六个处
    //非动画效果
    //mainContainer.scrollTop(
    //  scrollToContainer.offset().top - mainContainer.offset().top + mainContainer.scrollTop()
    //);
    //动画效果
    mainContainer.animate({
        scrollTop: scrollToContainer.offset().top - mainContainer.offset().top + mainContainer.scrollTop()
    }, 2000)
}