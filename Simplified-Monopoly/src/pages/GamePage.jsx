import { useEffect, useState } from "react"
import { spaceData } from "../data/spaceData"
import SpaceField from "../layout/SpaceField";
import StatusBoard from "../layout/StatusBoard";
import PlayerStatsBoard from "../layout/PlayerStatsBoard";

const GamePage = () => {

    
    const [theSpaces, setTheSpaces] = useState(structuredClone(spaceData));
    const [widthSize, setWidthSize] = useState(null);

    

    useEffect(() => {

        const checkSize = () => {
            
            if(window.innerWidth >= 1200){
                setWidthSize(5);
            } else if(window.innerWidth < 1200 && window.innerWidth >= 600){
            
                setWidthSize(4);
            } else {
                setWidthSize(3)
            }

        };

        if(window.innerWidth >= 1200){
                setWidthSize(5);
            } else if(window.innerWidth < 1200 && window.innerWidth >= 600){
                setWidthSize(4);
            } else {
                setWidthSize(3)
            }

        window.addEventListener('resize', checkSize);

        return () => window.removeEventListener('resize', checkSize);
    }, []);

    const testForChange = (event) => {

        event.preventDefault();
        let newData = [...theSpaces];
        newData[1][3] = 30;
        setTheSpaces(newData);
        console.log(widthSize)
    }

    return (
        <main>
            <p>THE GAMES PAGE</p>
            <SpaceField theSpaces={theSpaces} widthSize={widthSize} />
            <StatusBoard />
            <PlayerStatsBoard />
            <button onClick={testForChange}>Test</button>
        </main>
    )
}

export default GamePage