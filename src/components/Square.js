import React from 'react'
import { useState } from 'react';
import {ReactComponent as WhitePawn} from '../images/wpawn.svg';
import {ReactComponent as WhiteKing} from '../images/wking.svg';
import {ReactComponent as WhiteQueen} from '../images/wqueen.svg';
import {ReactComponent as WhiteRook} from '../images/wrook.svg';
import {ReactComponent as WhiteBishop} from '../images/wbishop.svg';
import {ReactComponent as WhiteKnight} from '../images/wknight.svg';
import {ReactComponent as BlackPawn} from '../images/bpawn.svg';
import {ReactComponent as BlackKing} from '../images/bking.svg';
import {ReactComponent as BlackQueen} from '../images/bqueen.svg';
import {ReactComponent as BlackRook} from '../images/brook.svg';
import {ReactComponent as BlackKnight} from '../images/bknight.svg';
import {ReactComponent as BlackBishop} from '../images/bbishop.svg';

const Square = ({value, piece, colour, handleClick}) => {
    const [squareValue] = useState(value);
    const [currentPiece, setCurrentPiece] = useState(piece);
    const [squareColour] = useState(colour);

    const classes = "chess-square square square-" + squareColour;

    function getPiece() {
        switch(currentPiece) {
            case "wpawn":
                return <WhitePawn />;
            case "wking":
                return <WhiteKing />;
            case "wqueen":
                return <WhiteQueen />;
            case "wbishop":
                return <WhiteBishop />;
            case "wrook":
                return <WhiteRook />;
            case "wknight":
                return <WhiteKnight />;
            case "bpawn":
                return <BlackPawn />;
            case "bking":
                return <BlackKing />;
            case "bqueen":
                return <BlackQueen />;
            case "bbishop":
                return <BlackBishop />;
            case "brook":
                return <BlackRook />;
            case "bknight":
                return <BlackKnight />;
            default:
                return "";
        }
    }

    return (
        <button className={`${classes}`} onClick={() => { handleClick(squareValue, (piece) => setCurrentPiece(piece), piece) }}>
            {getPiece()}
        </button>
    );
}

export default Square;