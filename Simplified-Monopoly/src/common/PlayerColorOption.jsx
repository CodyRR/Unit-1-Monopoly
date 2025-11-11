
const PlayerColorOption = ({id, defaultElement, handleChange}) => {


    return (
        <div>
            <label>
                Color:
            </label>
            <select name={id} id={id} value={defaultElement} onChange={handleChange}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
        </div>
    )
}

export default PlayerColorOption