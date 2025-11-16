
const Button = ({ id, display, classes, handleClick}) => {

    return (
        <button id={id} className={classes} onClick={handleClick}>
            {display}
        </button>
    )
}

export default Button;