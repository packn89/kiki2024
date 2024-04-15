var showKikiTalk = function () {
    $(".overlay").addClass("show").fadeIn();
};

var closeKikiTalk = function () {
    $(".overlay").fadeOut();
};

$(function () {
    $(".kl_content").on("click", function () {
        $(this).siblings().removeClass("selection");
        $(this).addClass("selection");
    });
});
