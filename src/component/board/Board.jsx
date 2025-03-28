import React from "react";
import "./Board.css"
import { MoreHorizontal } from "react-feather";
import Card from "../card/Card";

function Board(){
    return(
        <>
        <div className="board">
            <div className="board_top">
                <p className="board_top_title">To Do<span>2</span></p>
                <MoreHorizontal/>
            </div>
            <div className="board_cards">
                <Card/>
            </div>
        </div>
        </>
    )
}

export default Board