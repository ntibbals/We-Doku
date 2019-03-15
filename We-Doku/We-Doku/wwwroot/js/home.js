﻿"use strict";

$('.animation-home').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({ loop: true })
    .add({
        targets: '.animation-home .letter',

        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function (el, i) {
            return 300 + 30 * i;
        }
    }).add({
        targets: '.animation-home .letter',

        translateY: [0, -100],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: function (el, i) {
            return 100 + 30 * i;
        }
    });

$('.Dark-panel').toggle();

$(".Form-Toggle").click(function () {
    $(".toggleableForm").toggle();
});