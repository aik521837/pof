$(function() {
    $(window).on('scroll', function() {
        // 현재 스크롤된 양 + 브라우저 창의 높이 (즉, 현재 보이는 화면의 맨 아랫 지점)
        var sct = $(window).scrollTop();
        var winH = $(window).height();
        var scrollBottom = sct + winH;

        
        $('.point1, .point2, .point3, .point4, .point5, .point6, .point7, .point8, .deco, .point9, .point10, .point11 ,.point12').each(function() {
            
            var targetPos = $(this).offset().top;

           
            if (scrollBottom > targetPos + 300) {
                $(this).addClass('active');
            }
        });
    });

    $()
});