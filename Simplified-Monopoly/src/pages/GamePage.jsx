import { useEffect, useState } from "react"
import { spaceData } from "../data/spaceData"
import { useNavigate } from "react-router";
import SpaceField from "../layout/SpaceField";
import StatusBoard from "../layout/StatusBoard";
import PlayerStatsBoard from "../layout/PlayerStatsBoard";
import Space from "../classes/BoardSpace"

const GamePage = ({thePlayers, setThePlayers, generalOptions}) => {

    const navigate = useNavigate();
    const spaceArrayData = [];
    spaceData.forEach(function(space) {
        spaceArrayData.push( new Space(space[0], space[1], space[2], space[3], space[4], space[5]));
    })

    const [theSpaces, setTheSpaces] = useState(spaceArrayData);
    const [widthSize, setWidthSize] = useState(null);
    const [turnNumber, setTurnNumber] = useState(1);
    const [currentPlayerTurn, setCurrentPlayerTurn] = useState(1);
    const [gameState, setGameState] = useState("Start");
    const [dieRoll, setDieRoll] = useState(0)

    

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

    const rollTheDie = () => {
        return Math.floor(Math.random() *6) +1;
    }

    function sleep(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const gameEventHandle = (event) =>  {
        event.preventDefault();
        if(gameState === "Start"){
            setGameState("RollDie")
        } else if (gameState === "RollDie"){

            let movement = rollTheDie();
            setDieRoll(movement);
            
            let newData = [...thePlayers];
            let playerIndex = currentPlayerTurn -1;

            for( let i = 0; i < movement; i++){
                if(newData[playerIndex].currentSpace === (theSpaces.length -1)){
                    newData[playerIndex].currentSpace = 0;
                    newData[playerIndex].amount += generalOptions.passGoAmount;
                } else {
                    newData[playerIndex].currentSpace += 1;

                }
                setThePlayers(newData);
            }

            setGameState("AfterRoll");
            
        } else if(gameState === "AfterRoll") {

            if(currentPlayerTurn === thePlayers.length) {
                if(turnNumber >= generalOptions.turnNumber){
                    navigate("/results");
                    setGameState("End")
                } else {
                    let tempNum = turnNumber;
                    setTurnNumber(tempNum + 1);
                    setCurrentPlayerTurn(1);
                    setGameState("RollDie");
                }
            } else {
                let tempNum = currentPlayerTurn;
                setCurrentPlayerTurn(tempNum+1);
                setGameState("RollDie");
            }
        }
    }

    return (
        <main>
            <p>THE GAMES PAGE</p>
            <SpaceField theSpaces={theSpaces} widthSize={widthSize} thePlayers={thePlayers}/>
            <StatusBoard thePlayers={thePlayers} setThePlayers={setThePlayers} theSpaces={theSpaces} setTheSpaces={setTheSpaces} turnNumber={turnNumber} currentPlayerTurn={currentPlayerTurn} gameState={gameState} dieRoll={dieRoll} buttonChange={gameEventHandle} />
            <PlayerStatsBoard thePlayers={thePlayers} />
        </main>
    )
}

export default GamePage