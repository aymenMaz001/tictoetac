import { useEffect, useState } from 'react';
import Cell from '../cell/cell';
import './grid.css';

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

function Grid(){
    const [go, setGo] = useState(true)
    const [cells, setCells] =  useState(["","","","","","","","",""]);
    const [winningMessage, setWinningMessage] = useState("");
    
    useEffect(() => {
        winningCombos.forEach((combo) => {
          const circleWins = combo.every((cell) => cells[cell] === "O");
          const crossWins = combo.every((cell) => cells[cell] === "X");
    
          if (circleWins) {
            setWinningMessage("Circle Wins!");
          } else if (crossWins) {
            setWinningMessage("Cross Wins!");
          }
        });
      }, [cells, winningMessage]);
    
      useEffect(() => {
        if (cells.every((cell) => cell !== "") && !winningMessage) {
          setWinningMessage("Draw!");
        }
      }, [cells, winningMessage]);
    return (
        <>
            <div className="grid">
                {cells.map((cell,index) => 
                    <Cell 
                      go={go} 
                      setGo={setGo} 
                      cells={cells} 
                      onSetCells={setCells} 
                      key={index} 
                      id={index} 
                      cell={cell} 
                      winningMessage={winningMessage} />
                )
            }
            </div>
            <div>{winningMessage}</div>
            {!winningMessage && <div>{`its now ${go ? 'Cross' : 'Circle'} turn!`}</div>}
        </>
    );
}

export default Grid;