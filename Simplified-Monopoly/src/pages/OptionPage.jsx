import { useState } from "react";
import { Link } from "react-router";
import Button from "../common/Button";
import PlayerColorOption from "../common/PlayerColorOption";

const OptionsPage = ({thePlayers, setThePlayers, defaultPlayers, generalOptions, setGeneralOptions, defaultOption}) => {

    const [playerData, setPlayerData] = useState(structuredClone(thePlayers));
    const [optionData, setOptionData] = useState(structuredClone(generalOptions));

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

    const restoreDefaults = (event) => {

        event.preventDefault();
        
        setPlayerData(structuredClone([...defaultPlayers]));
        setThePlayers(structuredClone([...defaultPlayers]));
        setOptionData(structuredClone({...defaultOption}));
        setGeneralOptions(structuredClone({...defaultOption}));
    }

    return (
        <main>
            <p>THE OPTIONS PAGE</p>
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
                    
                <Button id="save-button" handleClick={saveData} display={"Save"}/>
                <Button id="restore-button" handleClick={restoreDefaults} display={"Restore Defaults"}/>
            </form>
        </main>
    )
}

export default OptionsPage;