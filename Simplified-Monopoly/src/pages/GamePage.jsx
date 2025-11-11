import { useState } from "react"
import { spaceData } from "../data/spaceData"
import SpaceField from "../layout/SpaceField";

const GamePage = () => {

    const [theSpaces, setTheSpaces] = useState(structuredClone(spaceData));
    console.log("In GamePage " + theSpaces[0]);

    return (
        <div>
            <p>THE GAMES PAGE</p>
            <SpaceField theSpaces={theSpaces} />
        </div>
    )
}

export default GamePage