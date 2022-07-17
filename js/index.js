$(".more").on("click", function(){
    $(".card").css("height","90%");
    $(".card2").css("display","none");
    $(".card3").css("display","none");
    $(".more").css("display","none");
    $(".less").css("display","contents");
})
$(".less").on("click", function(){
    $(".card").css("height","229px");
    $(".card2").css("display","flex");
    $(".card3").css("display","flex");
    $(".more").css("display","contents");
    $(".less").css("display","none");
})