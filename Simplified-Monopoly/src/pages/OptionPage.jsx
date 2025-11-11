import { useState } from "react";
import PlayerColorOption from "../common/PlayerColorOption";
import { defaultPlayerData } from "../data/defaultPlayerData";

const OptionsPage = () => {

    const [playerData, setPlayerData] = useState({...defaultPlayerData});

    const handleDataChange = (playerNum, index, event) => {
        let newData = {...playerData};
        newData[playerNum][index] = event.target.value;
        setPlayerData(newData);
    }

    const testData = (event) => {

        event.preventDefault();
        console.log(playerData);
    }


    return (
        <div>
            <p>THE OPTIONS PAGE</p>
            <form >
                <div>
                    <label>Player 1</label>
                    <label>Name:
                        <input type="text" name="player1Name" defaultValue="Player 1" onChange={(event) => handleDataChange(0,1, event)} />
                    </label>
                    <PlayerColorOption id="Player1Color" defaultElement="red" handleChange={(event) => handleDataChange(0,2, event)} />
                    <label>Amount: $
                        <input type="number" name="player1Amount" step="1" defaultValue="300" onChange={(event) => handleDataChange(0,3, event)} />
                    </label>
                </div>
                <div>
                    <label>Player 2</label>
                    <label>Name:
                        <input type="text" name="player2Name" defaultValue="Player 2" onChange={(event) => handleDataChange(1,1, event)} />
                    </label>
                    <PlayerColorOption id="Player2Color" defaultElement="blue" handleChange={(event) => handleDataChange(1,2, event)} />
                    <label>Amount: $
                        <input type="number" name="player2Amount" step="1" defaultValue="300" onChange={(event) => handleDataChange(1,3, event)} />
                    </label>
                </div>
                <div>
                    <label>Player 3</label>
                    <label>Name:
                        <input type="text" name="player3Name" defaultValue="Player 3" onChange={(event) => handleDataChange(2,1, event)} />
                    </label>
                    <PlayerColorOption id="Player3Color" defaultElement="green" handleChange={(event) => handleDataChange(2,2, event)} />
                    <label>Amount: $
                        <input type="number" name="player4Amount" step="1" defaultValue="300" onChange={(event) => handleDataChange(2,3, event)} />
                    </label>
                </div>
                <div>
                    <label>Player 4</label>
                    <label>Name:
                        <input type="text" name="player4Name" defaultValue="Player 4" onChange={(event) => handleDataChange(3,1, event)} />
                    </label>
                    <PlayerColorOption id="Player4Color" defaultElement="yellow" handleChange={(event) => handleDataChange(3,2, event)} />
                    <label>Amount: $
                        <input type="number" name="player4Amount" step="1" defaultValue="300" onChange={(event) => handleDataChange(3,3, event)} />
                    </label>
                </div>


                <button onClick={testData}>Submit</button>
            </form>
        </div>
    )
}

export default OptionsPage;