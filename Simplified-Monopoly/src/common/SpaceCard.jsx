
const SpaceCard = ({currentSpace, thePlayers}) => {

    const urlImages = "src/assets/"

    const getPieceImage = (color) => {

        return (urlImages + color + "-piece.png");
    }

    return (
        
        <div className="card">
            <div className="owner-color" style={{ backgroundColor: currentSpace.color}}></div>
            <div className="card-field">
                {thePlayers.map((player) => {
                    if(player.currentSpace === currentSpace.spaceNum) {
                        return <div className="player-display" style={{ backgroundImage: `url(${getPieceImage(player.color)})`}} ></div>
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