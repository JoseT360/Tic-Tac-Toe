var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turn = 1;

function checkwinner(){
    if ($(".row-1 .box.x").length === 3 ||
    $(".row-2 .box.x").length === 3 ||
    $(".row-3 .box.x").length === 3 ||
    $(".col-1 .box.x").length === 3 ||
    $(".col-2 .box.x").length === 3 ||
    $(".col-3 .box.x").length === 3 ||
    $("#1").hasClass("x")
    && $("#5").hasClass("x")
    && $("#9").hasClass("x") ||
    $("#3").hasClass("x")
    &&$("#5").hasClass("x")
    &&$("#7").hasClass("x"))
    {
        console.log("P1 Win");
        p1score++;
        $("#p1score").text(p1score)
    }}


    function checkwinnero(){
        if ($(".row-1 .box.o").length === 3 ||
        $(".row-2 .box.o").length === 3 ||
        $(".row-3 .box.o").length === 3 ||
        $(".col-1 .box.o").length === 3 ||
        $(".col-2 .box.o").length === 3 ||
        $(".col-3 .box.o").length === 3 ||
        $("#1").hasClass("o")
        && $("#5").hasClass("o")
        && $("#9").hasClass("o") ||
        $("#3").hasClass("o")
        &&$("#5").hasClass("o")
        &&$("#7").hasClass("o"))
        {
            console.log("P2 Win");
            p2score++;
            $("#p2score").text(p2score)
        }
    }




$(".box").click(function(){
    if(turn === 1){
        $(this).text("x")
        $(this).addClass("x")
        turn = 2;
        $("#turn").text(2)
        checkwinner();
    }
    else{
        $(this).text("o")
        $(this).addClass("o")
        turn = 1;
        $("#turn").text(1)
        checkwinnero();
    }
})