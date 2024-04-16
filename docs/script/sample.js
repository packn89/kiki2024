var showKikiTalk = function () {
    $(".overlay").addClass("show").fadeIn();
};

var closeKikiTalk = function () {
    $(".overlay").fadeOut();
};

$(function () {
    $("#overlay").load("kiki_talk.html", function() {
        // キキトーク読み込み後にonclickイベントを設定
        $(".kl_content").on("click", function () {
            $(this).siblings().removeClass("selection");
            $(this).addClass("selection");
        });
    });
});

