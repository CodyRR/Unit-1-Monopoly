
const PlayerStatsBoard = ({thePlayers}) => {

    const urlImages = "src/assets/"

    const getPieceImage = (color) => {

        return (urlImages + color + "-piece.png");
    }

    return(
        <div className="player-stats-board">
            <div className="player-stat">
                <p>{thePlayers[0].name}: ${thePlayers[0].amount}</p>
                <div className="player-icon" style={{ backgroundImage: `url(${getPieceImage(thePlayers[0].color)})`}}></div>
            </div>
            <div className="player-stat">
                <p>{thePlayers[1].name}: ${thePlayers[1].amount}</p>
                <div className="player-icon" style={{ backgroundImage: `url(${getPieceImage(thePlayers[1].color)})`}}></div>
            </div>
            <div className="player-stat">
                <p>{thePlayers[2].name}: ${thePlayers[2].amount}</p>
                <div className="player-icon" style={{ backgroundImage: `url(${getPieceImage(thePlayers[2].color)})`}}></div>
            </div>
            <div className="player-stat">
                <p>{thePlayers[3].name}: ${thePlayers[3].amount}</p>
                <div className="player-icon" style={{ backgroundImage: `url(${getPieceImage(thePlayers[3].color)})`}}></div>
            </div>
        </div>
    )
}

export default PlayerStatsBoard