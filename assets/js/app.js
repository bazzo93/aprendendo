$(document).ready(function(){
    $(".prod.new").append("<div class='new-info'><span class='bt-new'></span><buttom class='more-info'>Mais Detalhes</buttom><div>")
});

var screenWith = innerWidth;
if (screenWith <= 1200) {
    $("nav").append("<div class='shadow'></div>")
}

$(window).resize(function() {
    screenWith = innerWidth;
    $(".shadow").remove();
    if (screenWith <= 1200) {
        $("nav").append("<div class='shadow'></div>")
    }

    $("div.menus").removeClass("open");
    $("div.shadow").removeClass("open");
    $("html").removeClass("of-hidden");
    $("body").removeClass("of-hidden");
});


$("#logo").click(function() {
    if (screenWith < 1200) {
        event.preventDefault();
        $("div.menus").toggleClass("open");
        $("div.shadow").toggleClass("open");
        $("html").toggleClass("of-hidden");
        $("body").toggleClass("of-hidden");
    }
})

$(".shadow").click(function() {
    $("#logo").click();
})

function nextItem(root) {
    var count = $("#" + root + " div.prod").length;
    var firstElement = $("#" + root + " div.prod").get(0);

    $("#" + root + " div.prod").get(0).remove;
    $("#" + root).last().append(firstElement)
}

function prevItem(root) {
    var count = $("#" + root + " div.prod").length;
    var firstElement = $("#" + root + " div.prod").get(count - 1);

    $("#" + root + " div.prod").get(count - 1).remove;
    $("#" + root).prepend(firstElement)
}