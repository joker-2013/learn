/* 顶部 导航 动画效果*/
(function () {

    var $navbar = $("#nav"),
        $light = $(".navbar_light>.light");

    var timer = null,
        timerTicks = null,
        left = null,
        width = null;

    var events = {
        mouseenter: function () {

            left = $(this).position().left + 20;
            width = $(this).width();

            if (arguments[0] == "out") {
                timerTicks = 400;
            }
            else {
                timerTicks = 100;
            }

            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(function () {

                $light.stop().animate({ width: width, left: left }, 300);
                timer = null;

            }, timerTicks);
        },
        mouseleave: function () {
            events.mouseenter.call($navbar.find("a.hover").parent(), "out");
        }
    }

    $navbar.find("li").bind(events);

})();