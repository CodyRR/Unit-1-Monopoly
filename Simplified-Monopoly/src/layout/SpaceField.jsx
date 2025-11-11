import SpaceCard from "../common/SpaceCard"

const SpaceField = ({theSpaces}) => {

    console.log("In SpaceField " + theSpaces);

    const drawCard = (space, index, theSpaces) => {

        let lastItem = false;
        console.log(index + " " + ((index +1) % 5));
        if ( (theSpaces.length != (index+1)) && ((index +1) % 5 ===0)){
            lastItem = true;
        }

        return (
            <>
                <SpaceCard currentSpace={space}/>
                {lastItem && <div className="row-border"></div>}
            </>
        )

    }

    return (
        <div>
            <div className="grid">
                {theSpaces.map((space, index, theSpaces) => (
                    drawCard(space,index, theSpaces)
                ))}
            </div>
        </div>
    )

}

export default SpaceField