
const StatusBoard = () => {


    return(
        <div style={{display: "grid", border: '5px solid', height: '100px', gridTemplateColumns: "1fr 1fr 1fr"}}>
            <p>Roll the dice</p>
            <p>Move the spaces</p>
            <p>Player buys or pays</p>
        </div>
    )
}

export default StatusBoard;