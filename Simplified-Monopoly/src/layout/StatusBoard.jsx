import Button from "../common/Button";

const StatusBoard = ({thePlayers, setThePlayers, theSpaces, setTheSpaces, turnNumber, currentPlayerTurn, gameState, buttonChange}) => {
    
    const handleGameState = () => {

        if(gameState === "Start"){
            return startingBoard();
        } else if(gameState === "RollDie"){
            return pressToRoll();
        }
    }

    const pressToRoll = () => {

        return (
            <>
                <div>
                    <div>
                        Turn Number : {turnNumber}
                    </div>
                    <div>
                        {thePlayers[currentPlayerTurn -1].name} 
                    </div>
                </div>
                <div>
                    <div>Roll the Die</div>
                    <Button id="roll-button" display="Roll Die" classes="roll-button" handleClick={buttonChange}/>
                </div>
                <div>
                    You are on {theSpaces[thePlayers[currentPlayerTurn -1].currentSpace].name}
                </div>
            </>
        )
    }
     
    const startingBoard = () => {

        return (
            <>
                <p></p>
                <div>
                    <p>Press Start to begin</p>
                    <Button id="start-button" display={"Start Game"} classes="start-button" handleClick={buttonChange} />
                </div>
                <p></p>
            </>
        )
    }

    return(
        <div className="status-board">
            {handleGameState()}
        </div>
    )
}

export default StatusBoard;