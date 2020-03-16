$(document).ready(function() {

$(".square").click(function(){
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(data) {
            numeroPC = data.response;
            console.log("sono nel flusso ajax " + numeroPC);
        },
        error: function() {

        }
    });

    var random = numeroPC;
    console.log("sono nel flusso document " + random);

        if (random <= 5) {
            $(this).addClass("square-yellow").text(random);
        } else {
            $(this).addClass("square-green").text(random);
        }

});


});
