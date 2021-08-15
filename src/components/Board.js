import React from 'react'
import Row from './Row';

const Board = ({handleClick}) => {
    function renderRows() {
        let rows = [];
        for(let i = 1; i <= 8; i++) {
            rows.push(i);
        }
        return rows;
    }
    return (
        <div className='board'>
        {renderRows().map((val, e) => {
            return <Row value={val} key={val} handleClick={handleClick} />;
        })}
        </div>
    )
}
export default Board;