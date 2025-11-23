import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../common/Button";
import PlayerColorOption from "../common/PlayerColorOption";

const OptionsPage = ({thePlayers, setThePlayers, defaultPlayers, generalOptions, setGeneralOptions, defaultOption}) => {

    const navigate = useNavigate();

    const [playerData, setPlayerData] = useState(structuredClone(thePlayers));
    const [optionData, setOptionData] = useState(structuredClone(generalOptions));
    const [validOutput, setValidOutput] = useState(true);

    useEffect(()=>{

        let playerNames = [];
        let playerColors = [];
        let optionNumber = [];
        for(let i = 0; i < playerData.length; i++){
            playerNames.push(playerData[i].name);
            playerColors.push(playerData[i].color);
            optionNumber.push(playerData[i].amount);
        }
        optionNumber.push(optionData.turnNumber);
        let validName = checkForDuplicates(playerNames);
        let validColor = checkForDuplicates(playerColors);
        let validNumber = checkForNegatives(optionNumber)

        if(validName && validColor && validNumber){
            setValidOutput(true);
        } else {
            setValidOutput(false);
        }

    }, [playerData, optionData])

    const checkForDuplicates = (data) => {

        for(let i = 0; i < data.length; i++){

            for(let j = i+1; j< data.length; j++){
                if(data[i] === data[j]){

                    return false;
                }
            }
        }
        return true;
    }
    
    const checkForNegatives = (data) => {

        for(let i = 0; i < data.length; i++){
            if(data[i] <= 0){
                return false;
            }
        }
        return true;
    }

    const handleDataChange = (playerNum, index, event) => {
        let newData = [...playerData];
        newData[playerNum][index] = event.target.value;
        setPlayerData(newData);
    }

    const handleGeneralChange = (name, event) => {
        let newData = {...optionData};
        newData[name] = Number(event.target.value);
        setOptionData(newData);
    }

    const handleRadioChange = (event) => {

        let newData = {...optionData};
        newData["diceStyle"] = Number(event.target.value);
        setOptionData(newData);
    }

    const saveData = (event) => {

        event.preventDefault();
        setThePlayers(playerData);
        setGeneralOptions(optionData);
    }

    const goToGame = (event) => {
        event.preventDefault()
        navigate("/game")
    }

    const restoreDefaults = (event) => {

        event.preventDefault();
        
        setPlayerData(structuredClone([...defaultPlayers]));
        setThePlayers(structuredClone([...defaultPlayers]));
        setOptionData(structuredClone({...defaultOption}));
        setGeneralOptions(structuredClone({...defaultOption}));
    }

    return (
        <main>
            <form className="grid-form-container">
                <label>Player 1</label>

                <label>Name:</label>
                <input type="text" name="player1Name" value={playerData[0].name} onChange={(event) => handleDataChange(0,"name", event)} />
                
                <div></div>

                <label>Color:</label>
                <PlayerColorOption id="Player1Color" defaultElement={playerData[0].color} handleChange={(event) => handleDataChange(0,"color", event)} />
                
                <div></div>

                <label>Amount: $</label>
                <input type="number" name="player1Amount" step="1" value={playerData[0].amount} onChange={(event) => handleDataChange(0,"amount", event)} />
                
                <label>Player 2</label>

                <label>Name:</label>
                <input type="text" name="player2Name" value={playerData[1].name}onChange={(event) => handleDataChange(1,"name", event)} />
                
                <div></div>

                <label>Color:</label>
                <PlayerColorOption id="Player2Color" defaultElement={playerData[1].color} handleChange={(event) => handleDataChange(1,"color", event)} />
                
                <div></div>
                <label>Amount: $</label>
                <input type="number" name="player2Amount" step="1" value={playerData[1].amount} onChange={(event) => handleDataChange(1,"amount", event)} />
                
                <label>Player 3</label>

                <label>Name:</label>
                <input type="text" name="player3Name" value={playerData[2].name} onChange={(event) => handleDataChange(2,"name", event)} />
                
                <div></div>

                <label>Color:</label>
                <PlayerColorOption id="Player3Color" defaultElement={playerData[2].color} handleChange={(event) => handleDataChange(2,"color", event)} />
                
                <div></div>

                <label>Amount: $</label>
                <input type="number" name="player4Amount" step="1" value={playerData[2].amount} onChange={(event) => handleDataChange(2,"amount", event)} />
                
                <label>Player 4</label>

                <label>Name:</label>
                <input type="text" name="player4Name" value={playerData[3].name} onChange={(event) => handleDataChange(3,"name", event)} />
                
                <div></div>
                
                <label>Color:</label>
                <PlayerColorOption id="Player4Color" defaultElement={playerData[3].color} handleChange={(event) => handleDataChange(3,"color", event)} />
                
                <div></div>

                <label>Amount: $</label>
                <input type="number" name="player4Amount" step="1" value={playerData[3].amount} onChange={(event) => handleDataChange(3,"amount", event)} />
            
                <div></div>
                <label>Turn Amount:</label>
                <input type="number" name="turnAmount" step="1" value={optionData.turnNumber} onChange={(event) => handleGeneralChange("turnNumber", event)}/>
                
                <div></div>
                <label>Dice Number:</label>
                <div className="radio-container">
                    <div>
                        <input type="radio" id="diceNum1" name="dice" value={1} checked={optionData["diceStyle"] === 1} onChange={handleRadioChange} />
                        <label htmlFor="diceNum1">1 Die</label>
                    </div>
                    <div>
                        <input type="radio" id="diceNum2" name="dice" value={2} checked={optionData["diceStyle"] === 2} onChange={handleRadioChange} />
                        <label htmlFor="diceNum2">2 Die</label>
                    </div>
                    <div>
                    
                        <input type="radio" id="diceNum3" name="dice" value={3} checked={optionData["diceStyle"] === 3} onChange={handleRadioChange} />
                        <label htmlFor="diceNum3">Low Die</label>
                    </div>
                </div>

                <div></div>
                <label>Amount from Go: $</label> 
                <input type="number" name="passGoAmount" step="1" value={optionData.passGoAmount} onChange={(event) => handleGeneralChange("passGoAmount", event)} />
                    
                <Button id="save-button" handleClick={saveData} validator={validOutput} display={"Save"}/>
                <Button id="play-options-button" handleClick={goToGame} validator={validOutput} display="Play"/>
                <Button id="restore-button" handleClick={restoreDefaults} display={"Restore Defaults"}/>
            </form>
            {!validOutput && <p className="error-menu" >The names or colors need to be different or the amounts or turns must be positive</p>}
        </main>
    )
}

export default OptionsPage;