﻿$(function () {
    $('#datetimepicker').datetimepicker({
        format: "DD/MM/YYYY"
    });

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 144) {
            $('nav').removeClass('affix-top');
            $('nav').addClass('affix');
            $('.back-to-top').show();
        } else {
            $('nav').removeClass('affix');
            $('nav').addClass('affix-top');
            $('.back-to-top').hide();
        }
    });

    $('.back-to-top').on('click', function () {
        verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({ scrollTop: offsetTop }, 500, 'linear');
    });

    $('#homeMessage').modal('show');
    $('#homeMessage').on('hidden.bs.modal', function () {
        window.location.replace("http://giasu24h.hanoi.vn");
    });
});