var header = document.getElementsByClassName('exclusives');
var header = document.getElementsByClassName('buy');

function fade() {
    $('.exclusives').hide();
    $('.exclusives').fadeIn(3000);

    $('.buy').hide();
    $('.buy').fadeIn(3000);





    $('.socialmedia').hide();
    $('.socialmedia').fadeIn(3000);
    //$('.exclusives').on('click', function () {
    //$('exclusive').show or toggle();
    //});
}
$(document).ready(fade)
