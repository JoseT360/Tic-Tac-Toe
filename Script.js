var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turn = 1;

function checkWin(){
    if ($(".row-1 .box.x").length === 3){
        console.log("working")
    }
    if ($(".row-2 .box.x").length === 3){
        console.log("working2")
    }

    if ($(".row-3 .box.x").length === 3){
        console.log("working3")
    }
    if ($(".col-1 .box.x").length === 3){
        console.log("working")
    }
    if ($(".col-2 .box.x").length === 3){
        console.log("working")
    }
    if ($(".col-3 .box.x").length === 3){
        console.log("working")
    }
    if ($("#1").hasClass("x")
    && $("#5").hasClass("x")
    && $("#9").hasClass("x"))
    {
        console.log("working")
    }
}




$(".box").click(function(){
    if(turn === 1){
        $(this).text("x")
        $(this).addClass("x")
        turn = 2;
        $("#turn").text(2)
        checkWin();
    }
    else
    {
        $(this).text("o")
        $(this).addClass("o")
        turn = 1;
        $("#turn").text(1)
    }
})