import React from 'react';
import { useState } from 'react';
import Square from './Square';

const Row = ({value, handleClick}) => {
    const [rowValue] = useState(value);

    function renderSquares() {
        let columns = [];
        let chars = 'ABCDEFGH';
        for(let i = 0; i < 8; i++) {
            columns.push({
                value: chars.charAt(i) + rowValue, 
                colour: determinePieceColour(i), 
                piece: startingPiece(chars.charAt(i),rowValue)
            });
        }
        return columns;
    }

    function startingPiece(column, row) {
        switch(row) {
            case 1:
                return determinePiece(true, column);
            case 2:
                return "wpawn";
            case 7:
                return "bpawn";
            case 8: 
                return determinePiece(false, column);
            default:
                return "";
        }
    }

    function determinePiece(isWhite, column) {
        switch(column) {
            case 'A':
            case 'H':
                return isWhite ? "wrook" : "brook";
            case 'B':
            case 'G':
                return isWhite ? "wknight" : "bknight";
            case 'C':
            case 'F':
                return isWhite ? "wbishop" : "bbishop";
            case 'D':
                return isWhite ? "wqueen" : "bqueen";
            case 'E': 
                return isWhite ? "wking" : "bking";
            default:
                console.log("Returning default", column);
                return "";
        }
    }

    function determinePieceColour(column) {

    }

    return (
        <div>
        {renderSquares().map((square,e) => {
            return <Square key={square.value} value={square.value} colour={square.colour} piece={square.piece} handleClick={handleClick} />;
        })}
        </div>
    );
}

export default Row;