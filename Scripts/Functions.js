function init_document() {
    var jv = DoTransliterate(element.value);
    var pre_view_element = document.getElementById("prev_label");
    pre_view_element.innerHTML = jv;
}
function DoPreview() {
    var text = $("#inp_txt").val();
    var trans_text = DoTransliterate(text);
    $("#prev_label").text(trans_text);
}
function DoAppendTransliteration() {
    var text = $("#inp_txt").val();
    if (text.toLowerCase() == 'clear') {
        $("#inp_txt").val('');
        return;
    }
    $("#inp_txt").val('');
}
$(document).ready(function () {
    $('#inp_txt').keydown(function (event) {
        if (event.keyCode == '13') {
            DoAppendTransliteration();
        }
    });

    $('#inp_txt').keyup(function () {
        DoPreview();
    });
    DoPreview();
});