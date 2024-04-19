import { Dispatch, SetStateAction } from 'react';
import './cell.css';

type CellProps = {
    id: number;
    cell : string;
    cells: string[];
    go: boolean;
    winningMessage: string;
    setGo: Dispatch<SetStateAction<boolean>>;
    onSetCells: Dispatch<SetStateAction<string[]>>;
}

function Cell({id, cell,cells,go,winningMessage,setGo,onSetCells}: CellProps){

    const handleClick = () => {
        if (winningMessage) {
            return;
          }
        if (cells[id] === ""){
            let copyCell = [...cells];
            copyCell[id] = (go) ? 'X' : 'O';
            onSetCells(copyCell);
            setGo(!go);
        }
        
    }
    return (
        <div className="cell" onClick={handleClick}>
            <div className={(cell === "O") ? "cell-O" : "cell-X"}>{cell}</div>
        </div>
    );
}

export default Cell;