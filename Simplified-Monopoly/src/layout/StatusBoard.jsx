import Button from "../common/Button";
import { useState } from "react";

const StatusBoard = ({thePlayers, setThePlayers, theSpaces, setTheSpaces, turnNumber, currentPlayerTurn, gameState, dieRoll, buttonChange}) => {
    
    const [ buySpaceOption, setBuySpaceOption] = useState(true);

    const handleGameState = () => {

        if(gameState === "Start"){
            return startingBoard();
        } else if(gameState === "RollDie"){
            return pressToRoll();
        } else if(gameState === "AfterRoll") {
            return afterRoll();
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

    const afterRoll = () => {

        return (
            <>
                <div>
                    <div>
                        {thePlayers[currentPlayerTurn -1].name} rolled a
                    </div>
                    <div>
                        {dieRoll}
                    </div>
                </div>
                <div>
                    <div>
                        You landed on 
                    </div>
                    <div>
                        {theSpaces[thePlayers[currentPlayerTurn -1].currentSpace].name}
                    </div>
                </div>
                <div>
                    {buySpaceOption ? checkOwner() : returnToGame()}
                </div>
            </>
        )
    }

    const checkOwner = () => {


        if(theSpaces[thePlayers[currentPlayerTurn -1].currentSpace].name === "GO"){
            return (
                <div>
                    <div>
                        {thePlayers[currentPlayerTurn -1].name} landed on Go
                    </div>
                    <div>
                        <Button id="continue-button" display="Continue" classes="continue-button" handleClick={buttonChange}/>
                    </div>
                </div>
            )
        } else if (theSpaces[thePlayers[currentPlayerTurn -1].currentSpace].owner === "Sale") {
            
            return(
                <div>
                    <div>
                        Space is for sale. Buy?
                    </div>
                    <div>
                        Buy for {theSpaces[thePlayers[currentPlayerTurn -1].currentSpace].spaceValueStart}
                    </div>
                    <div>
                        <Button id="buy-button" display="Yes" classes="buy-button" handleClick={()=>buySpace()} />
                        <Button id="no-button" display="No" classes="no-button" handleClick={()=>(setBuySpaceOption(false))} />
                    </div>
                </div>
            )
        }
    }

    const buySpace = () => {

        setBuySpaceOption(false);
        let newData = [...theSpaces];
        let newData2 = [...thePlayers];
        newData2[currentPlayerTurn -1].amount -= theSpaces[thePlayers[currentPlayerTurn -1].currentSpace].spaceValueStart;

        newData[thePlayers[currentPlayerTurn -1].currentSpace].owner = thePlayers[currentPlayerTurn -1].name;
        newData[thePlayers[currentPlayerTurn -1].currentSpace].color = thePlayers[currentPlayerTurn -1].color;
        newData[thePlayers[currentPlayerTurn -1].currentSpace].spaceIsBought = true;

        setThePlayers(newData2);
        setTheSpaces(newData);
    }

    const returnToGame = () => {
        // setBuySpaceOption(false);
        return (
            <div>
                <Button id="continue-button" display="Continue" classes="continue-button" handleClick={buttonChange}/>
            </div>
        )
    }
     
    const startingBoard = () => {

        return (
            <>
                <p></p>
                <div>
                    <p>Press Start to begin</p>
                    <Button id="start-button" display="Start Game" classes="start-button" handleClick={buttonChange} />
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