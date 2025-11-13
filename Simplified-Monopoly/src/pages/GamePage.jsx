import { useState } from "react"
import { spaceData } from "../data/spaceData"
import SpaceField from "../layout/SpaceField";
import StatusBoard from "../layout/StatusBoard";
import PlayerStatsBoard from "../layout/PlayerStatsBoard";

const GamePage = () => {

    const [theSpaces, setTheSpaces] = useState(structuredClone(spaceData));

    const testForChange = (event) => {

        event.preventDefault();
        let newData = [...theSpaces];
        newData[1][3] = 30;
        setTheSpaces(newData);
    }

    return (
        <div>
            <p>THE GAMES PAGE</p>
            <SpaceField theSpaces={theSpaces} />
            <StatusBoard />
            <PlayerStatsBoard />
            <button onClick={testForChange}>Test</button>
        </div>
    )
}

export default GamePage