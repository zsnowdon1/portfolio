import React from "react";
import './Connect4.css'

function Connect4() {

    return(
        <div className="filler">
            This is going to be my next project. It will be a connect 4 application
            that allows you to play against a computer. The computer will be using
            a minimax search algorithm using alpha-beta pruning to make choices. My
            goal is to allow the user to select a difficulty level and it will change
            how the computer makes decisions.
        </div>
    );
}

export default Connect4;