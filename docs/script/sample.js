/**
 * キキトーク表示
 */
var showKikiTalk = function () {
    $(".overlay").addClass("show").fadeIn();
};

/**
 * キキトーク閉じる
 */
var closeKikiTalk = function () {
    $(".overlay").fadeOut();
    $("#k_message").empty();
    $(".kl_content").removeClass("selection");
};

/** メッセージ配列 */
var msgAry = [];

/**
 * CSVを読んで配列に格納する
 */
function parseCsv(data) {
    // csv配列を変数に格納
    msgAry = $.csv.toArrays(data);
  }

/**
 * キキトークのメッセージ部作成
 * @param index インデックス
 */
async function makeMessage(index) {
    // 表示中のメッセージを削除
    $("#k_message").empty();

    // 対象パペットデータ
    let data = msgAry[index];
    let name = data[0];

    // 最初のメッセージ
    let firstSrc = "<div class='km_content'>" +
        "    <div class='km_icon' style='background-image: url(data/img/"  + name + ".jpg), url(data/img/default" + (index % 2) + ".jpg);'></div>" +
        "    <div class='km_message'>" +
        "    <div class='km_name'>" + name + "</div>" +
        "    <div class='km_data'>" +
        data[1] + "</div> " +
        "    </div>" +
        "</div>";
    $("#k_message").append(firstSrc);

    // 以降はあれば
    if (data.length < 3) {
        return;
    }
    for (i = 2; i < data.length; i++) {
        await wait(1.5);
        let src = "<div class='km_content'>" +
            "    <div class='km_icon_non'></div>" +
            "    <div class='km_message'>" +
            "    <div class='km_name'></div>" +
            "    <div class='km_data'>" +
            data[i] + "</div>" +
            "    </div>" +
            "</div>";
        $("#k_message").append(src);
    }
}

$(function () {
    // CSVファイルの読み込み
    $.get("data/message/message.csv", parseCsv, "text");

    // キキトークの読み込み
    $("#overlay").load("kiki_talk.html", function () {
        // パペリスト作成
        $.each(msgAry, function (index, value) {
            let kcontent = "<li class='kl_content' data-index='" + index +
                "'><div class='kl_icon' style='background-image: url(data/img/" + value[0] + ".jpg), url(data/img/default" + (index % 2) + ".jpg);'></div><div class='kl_data'><div class='kl_name klindex'>" +
                value[0] + "</div> <div class='kl_message'>" +
                value[1] + "</div></div ></li > ";
            $("#k_list").append(kcontent);
        });

        // キキトークのリストonClick処理
        $("#k_list").on("click", ".kl_content", function () {
            // スタイルの設定
            $(this).siblings().removeClass("selection");
            $(this).addClass("selection");
            // メッセージ作成
            makeMessage($(this).data("index"));
        });
    });
});

/**
 * sleep関数
 * @param second 秒数
 */
async function wait(second) {
    return new Promise(resolve => setTimeout(resolve, 1000 * second));
}
