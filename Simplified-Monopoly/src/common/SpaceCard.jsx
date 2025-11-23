import ImageHandler from "../classes/ImageHandler"

const SpaceCard = ({currentSpace, thePlayers}) => {

    return (
        
        <div className="card">
            <div className="owner-color" style={{ backgroundColor: currentSpace.color}}></div>
            <div className="card-field">
                {thePlayers.map((player) => {
                    if(player.currentSpace === currentSpace.spaceNum) {
                        return <img key={"player-" + player.playerId} className="player-display" src={ ImageHandler(player.color)} />
                        // return <div className="player-display" style={{ backgroundImage: `url(${ImageHandler(player.color)})`}} ></div>
                    }
                })}
            </div>
            <div className="container">
                <p>{currentSpace.spaceIsBought ? currentSpace.spaceValueBought : currentSpace.spaceValueStart}</p>
                <p>{currentSpace.name}</p>
            </div>
        </div>
    )

}

export default SpaceCard