
const SpaceCard = ({currentSpace, thePlayers}) => {

    return (
        
        <div className="card">
            <div className="owner-color"></div>
            <div className="card-field">
                {thePlayers.map((player) => {
                    if(player.currentSpace === currentSpace.spaceNum) {
                        return <div className="player-display" style={{ backgroundColor: player.color}} >{player.playerId}</div>
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