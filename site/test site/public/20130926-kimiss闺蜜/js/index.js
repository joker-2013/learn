$(document).ready(function () {

    //load flash
    //$("#imgshow").scrollable({circular:true}).autoscroll({ autoplay: true,interval: 5000 }).navigator({navi:'#scro_nav'});
    $("#imgshow").scrollable({circular: true, prev: "#imgshow_l", next: "#imgshow_r"}).autoscroll({autoplay: true, interval: 5000}).navigator({navi: "#scro_nav"});
    $("#scro_2").autoFade({nav: '#scro_nav2', interval: 10000});

    $("#sub1_l li").bind("mouseover", {list: "#sub1_l li", target: "#sub1_r li"}, ashowb);
    function ashowb(event) {
        if (!$(this).hasClass('active')) {
            var n = $(this).index();
            $(event.data.target).hide();
            $(event.data.target).eq(n).fadeIn();
            $(event.data.list).removeClass("active");
            $(this).addClass("active");
        }
        return false;
    }

    //新品入库
    $("#c4_sub").tabs("div.c4_l_c", {event: 'mouseover'});
    //热评单品
    $(".tabs_t").tabs(".tabs_b>ul", { event: 'mouseover', current: 'hover' });


    $('.c1_l_2_c dl:first').addClass('first');
    $('.c2_c li:first').addClass('first');
    $('.c2_c li:last').addClass('last');
    $('.c8_c_item:first').addClass('first');
    $('.tabs_b li:last').addClass('last');


    $(".search .main_input").bind({
        blur: function () {
            if ($(this).val() == "")
                $(this).val("请输入产品名称、品牌或关键字");
            $("#se_brand").hide();
        },
        focus: function () {
            if ($(this).val() == "请输入产品名称、品牌或关键字")
                $(this).val("");
            $("#se_brand").show();
        }
    })
    $(".c_search .main_input").bind({
        blur: function () {
            if ($(this).val() == "")
                $(this).val("请输入拼音、拼音缩写、中文、英文等可以快速匹配");
            $("#se_brand").hide();
        },
        focus: function () {
            if ($(this).val() == "请输入拼音、拼音缩写、中文、英文等可以快速匹配")
                $(this).val("");
            $("#se_brand").show();
        }
    })


    //navSlider
    /*function navSlider(){
     var $nav = $('#c4_sub'),
     $cur = $('#c4_sub li.cur a'),
     $navLine = $('.tab_arrow'),
     $anchor = $('a',$nav.children()),
     curPosL = $cur.position().left,
     curW = $cur.outerWidth(true),
     curIdx = $('li.cur',$nav).index();
     $navLine.css({'width':curW,'left':curPosL});
     $anchor.not('li.last a',$nav).each(function(index){
     var posL = $(this).position().left,
     w = $(this).outerWidth(true);
     $(this).mouseenter(function(){
     $navLine.animate({'width':w,'left':posL},250);
     $(this).parent().addClass('cur').siblings().removeClass('cur');
     });
     });
     $nav.mouseleave(function(){
     $navLine.animate({'width':curW,'left':curPosL},250);
     $anchor.parent(':eq('+curIdx+')').addClass('cur').siblings().removeClass('cur');
     });
     };

     navSlider();*/
//totop
    $("#totop").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 100);
    })
    function scroll() {
        var top = $(window).scrollTop();
        if (top > 400) {
            $("#totop").fadeIn();
        } else {
            $("#totop").fadeOut();
        }
    }

    var t = null;
    $(window).scroll(function () {
        t && clearTimeout(t);
        t = setTimeout(scroll, 500);
    });
    // 20130926 YuanYanjun //
    var $vernier=$('.c4_l_t .tab_arrow').eq(0);
    $('#c4_sub').tabs('.c4_l_con .c4_l_c',{
        event:'mouseover'
    })
    $('#c4_sub li').bind('mouseover',function(){
        var $that=$(this);
        $vernier.animate({
            'right':(4-$that.index())*80
        },{
            'easing':'swing'
        })
    })
    $("#scro_3").autoFade({nav: '#scro_nav3', interval: 5000});
    $("#scroller_1_inner").scrollable({circular: true, prev: "#scroller_1_prevBtn", next: "#scroller_1_nextBtn"}).autoscroll({autoplay: true, interval: 5000});
    //20130927
    //$("#scroll_wraper_1").scrollable({ vertical: true, mousewheel: true,circular: false,prev:'#scroll_btn_prev',next:'#scroll_btn_next'});
    
    //20130927 Yuan Yanjun
    $('#CSContainer').CSScrollbar({
        scrollbar : '#CSScrollbar',
        scrollHandler : '#CSScrollbar .#CSScrollHandle'
    })
})