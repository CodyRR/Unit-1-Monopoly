
const SpaceCard = ({currentSpace}) => {

    return (
        
        <div className="card">
            <div className="owner-color"></div>
            <div className="container">
                <p>{currentSpace[3]}</p>
                <p>{currentSpace[0]}</p>
            </div>
        </div>
    )

}

export default SpaceCard