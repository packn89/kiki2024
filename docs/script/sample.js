var showKikiTalk = function () {
    $(".overlay").addClass("show").fadeIn();
};

var closeKikiTalk = function () {
    $(".overlay").fadeOut();
    $("#k_message").addClass("km_hidden");
    $(".kl_content").removeClass("selection");
};

$(function () {
    $("#overlay").load("kiki_talk.html", function() {
        // キキトーク読み込み後にonclickイベントを設定
        $(".kl_content").on("click", function () {
            $(this).siblings().removeClass("selection");
            $(this).addClass("selection");
            $("#k_message").removeClass("km_hidden");
        });
    });
});

