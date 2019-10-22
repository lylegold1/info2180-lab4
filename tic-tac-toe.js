function show_board(){
    var board = document.getElementById("board").children;
    for (let x=0; x<board.length; x++){
        board[x].setAttribute("class", "square");
    }

}
window.onload = show_board;

function gameplay(){
    
}


