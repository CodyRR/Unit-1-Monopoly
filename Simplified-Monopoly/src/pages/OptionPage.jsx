import { useState } from "react";
import { Link } from "react-router";
import PlayerColorOption from "../common/PlayerColorOption";
import { defaultPlayerData } from "../data/defaultPlayerData";

const OptionsPage = () => {

    const [playerData, setPlayerData] = useState(structuredClone({...defaultPlayerData}));

    const handleDataChange = (playerNum, index, event) => {
        let newData = {...playerData};
        newData[playerNum][index] = event.target.value;
        setPlayerData(newData);
    }

    const testData = (event) => {

        event.preventDefault();
        console.log(playerData);
    }

    const restoreDefaults = (event) => {

        event.preventDefault();
        console.log({...defaultPlayerData});
        setPlayerData(structuredClone({...defaultPlayerData}));
    }

    return (
        <div>
            <p>THE OPTIONS PAGE</p>
            <form >
                <div>
                    <label>Player 1</label>
                    <label>Name:
                        <input type="text" name="player1Name" value={playerData[0][1]} onChange={(event) => handleDataChange(0,1, event)} />
                    </label>
                    <PlayerColorOption id="Player1Color" defaultElement={playerData[0][2]} handleChange={(event) => handleDataChange(0,2, event)} />
                    <label>Amount: $
                        <input type="number" name="player1Amount" step="1" value={playerData[0][3]} onChange={(event) => handleDataChange(0,3, event)} />
                    </label>
                </div>
                <div>
                    <label>Player 2</label>
                    <label>Name:
                        <input type="text" name="player2Name" value={playerData[1][1]}onChange={(event) => handleDataChange(1,1, event)} />
                    </label>
                    <PlayerColorOption id="Player2Color" defaultElement={playerData[1][2]} handleChange={(event) => handleDataChange(1,2, event)} />
                    <label>Amount: $
                        <input type="number" name="player2Amount" step="1" value={playerData[1][3]} onChange={(event) => handleDataChange(1,3, event)} />
                    </label>
                </div>
                <div>
                    <label>Player 3</label>
                    <label>Name:
                        <input type="text" name="player3Name" value={playerData[2][1]} onChange={(event) => handleDataChange(2,1, event)} />
                    </label>
                    <PlayerColorOption id="Player3Color" defaultElement={playerData[2][2]} handleChange={(event) => handleDataChange(2,2, event)} />
                    <label>Amount: $
                        <input type="number" name="player4Amount" step="1" value={playerData[2][3]} onChange={(event) => handleDataChange(2,3, event)} />
                    </label>
                </div>
                <div>
                    <label>Player 4</label>
                    <label>Name:
                        <input type="text" name="player4Name" value={playerData[3][1]} onChange={(event) => handleDataChange(3,1, event)} />
                    </label>
                    <PlayerColorOption id="Player4Color" defaultElement={playerData[3][2]} handleChange={(event) => handleDataChange(3,2, event)} />
                    <label>Amount: $
                        <input type="number" name="player4Amount" step="1" value={playerData[3][3]} onChange={(event) => handleDataChange(3,3, event)} />
                    </label>
                </div>

                <div>
                    <label>Turn Amount:
                        <input type="text" name="turnAmount" defaultValue={10}/>
                    </label>
                </div>
                <div>
                    <label>Dice Number:
                        <input type="radio" id="diceNum1" name="1die" value={1}/>
                        <label for="diceNum1">1 Die</label>
                        <input type="radio" id="diceNum2" name="2dice" value={2}/>
                        <label for="diceNum2">2 Die</label>
                        <input type="radio" id="diceNum3" name="smallDie" value={3}/>
                        <label for="diceNum3">Low Die</label>
                    </label>
                </div>
                <div>
                   <label>Amount from Go: $
                        <input type="number" name="passGoAmount" step="1" defaultValue={200} />
                    </label> 
                </div>

                <button onClick={testData}>Save</button>
                <Link className='link' to="/">
                    <button>Cancel</button>
                </Link>
                <button onClick={restoreDefaults}>Restore Defaults</button>
            </form>
        </div>
    )
}

export default OptionsPage;