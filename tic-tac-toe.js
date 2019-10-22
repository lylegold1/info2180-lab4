var click = false;
function show_board(){
    var board = document.getElementById("board").children;
    for (let x=0; x<board.length; x++){
        board[x].setAttribute("class", "square");

        board[x].addEventListener("click",function(){
            if (click == false){
                board[x].setAttribute('class', 'square X');
                board[x].innerHTML = 'X';
                click=true;
            }
            else{
                board[x].setAttribute('class', 'square O');
                board[x].innerHTML = 'O';
                click=false;
            }

        });
    }
}


window.onload = show_board;
