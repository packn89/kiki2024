var showKikiTalk = function () {
    $(".overlay").addClass("show").fadeIn();
};

var closeKikiTalk = function () {
    $(".overlay").fadeOut();
    $("#k_message").addClass("km_hidden");
    $(".kl_content").removeClass("selection");
};

/** メッセージ配列 */
var msgAry = [];

/**
 * CSVを読んで配列に格納する
 */
function parseCsv(data) {
    // csv配列を変数に格納
    var csv = $.csv.toArrays(data);
    msgAry.push(csv);
  }

$(function () {
    // CSVファイルの読み込み
    $.get("data/message/message.csv", parseCsv, "text");

    // キキトークの読み込み
    $("#overlay").load("kiki_talk.html", function () {

        // パペリスト作成
        $.each(msgAry, function (index, value) {
            let kcontent = "<li class='kl_content'><div class='kl_icon'></div><div class='kl_data'><div class='kl_name'>" +
                value[0] + "</div> <div class='kl_message'>" +
                value[1] + "</div></div ></li > ";
            $("#k_list").append(kcontent);
        });

        // キキトーク読み込み後にonclickイベントを設定
        $(".kl_content").on("click", function () {
            $(this).siblings().removeClass("selection");
            $(this).addClass("selection");
            $("#k_message").removeClass("km_hidden");
        });
    });
});
