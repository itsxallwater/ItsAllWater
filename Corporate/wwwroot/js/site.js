// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Load
$(function () {
    $('#home img').data('ow', $('#home img').width());
})

// Go Home
$('#home').on('click', function (e) {
    $('.active').removeClass('active');
    $("#home img").animate({ width: $('#home img').data('ow') }, 100);
})

// Resize Logo
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $("#home img").animate({ width: '20%' }, 100);
})