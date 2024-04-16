var showKikiTalk = function () {
    $(".overlay").addClass("show").fadeIn();
};

var closeKikiTalk = function () {
    $(".overlay").fadeOut();
    $("#k_message").addClass("km_hidden");
    $(".kl_content").removeClass("selection");
};

/** メッセージ連想配列 */
var msgAry = {};

/**
 * CSVを読んで配列に格納する
 */
function parseCsv(data) {
    // csv配列を変数に格納
    var csv = $.csv.toArrays(data);
    msgAry[csv[0]] = csv;
  }

$(function () {
    // CSVファイルの読み込み
    $.get("data/message/packn.csv", parseCsv, "text");

    $("#overlay").load("kiki_talk.html", function() {
        // キキトーク読み込み後にonclickイベントを設定
        $(".kl_content").on("click", function () {
            $(this).siblings().removeClass("selection");
            $(this).addClass("selection");
            $("#k_message").removeClass("km_hidden");
        });
    });
});

