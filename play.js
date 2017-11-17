$(function () {

    var iframeElement = document.querySelector('iframe');
    var iframeElementID = iframeElement.id;
    var widget1 = SC.Widget("#so");
    var widget2 = SC.Widget("#so");
    // widget1 === widget2

    $("#playSound").click(function () {
        $("#so").play()
    });

    $("#stopSound").click(function () {
        $("#so").pause()
    });

})