import SpaceCard from "../common/SpaceCard"

const SpaceField = ({theSpaces, widthSize}) => {

    const drawCard = (space, index, theSpaces, widthSize) => {



        let lastItem = false;
        if ( (theSpaces.length != (index+1)) && ((index +1) % widthSize ===0)){
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
                    drawCard(space,index, theSpaces, widthSize)
                ))}
            </div>
        </div>
    )

}

export default SpaceField