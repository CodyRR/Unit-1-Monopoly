import { useEffect, useState } from "react"
import { spaceData } from "../data/spaceData"
import SpaceField from "../layout/SpaceField";
import StatusBoard from "../layout/StatusBoard";
import PlayerStatsBoard from "../layout/PlayerStatsBoard";
import Space from "../classes/BoardSpace"

const GamePage = ({thePlayers, setThePlayers}) => {

    const spaceArrayData = [];
    spaceData.forEach(function(space) {
        spaceArrayData.push( new Space(space[0], space[1], space[2], space[3], space[4], space[5]));
    })

    console.log(spaceArrayData);

    const [theSpaces, setTheSpaces] = useState(spaceArrayData);
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
        newData[2].spaceIsBought = true;
        let newData2 = [...thePlayers];
        newData2[2].currentSpace = 4;
        setTheSpaces(newData);
        setThePlayers(newData2);
        console.log(newData2)
    }

    return (
        <main>
            <p>THE GAMES PAGE</p>
            <SpaceField theSpaces={theSpaces} widthSize={widthSize} thePlayers={thePlayers}/>
            <StatusBoard />
            <PlayerStatsBoard thePlayers={thePlayers} />
            <button onClick={testForChange}>Test</button>
        </main>
    )
}

export default GamePage