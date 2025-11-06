import { Link } from "react-router"

const HomePage = () => {

    return (
        <div id="home-container">
            <h1>Welcome to Simply Monopoly</h1>
            <div>
                <Link className='link' to="/game">
                    <button>Play</button>
                </Link>
                <label>Play the game with set rules</label>
            </div>
            <div>
                <Link className='link' to="/rules">
                    <button>Rules</button>
                </Link>
                <label>See the rules for the game</label>
            </div>
            <div>
                <Link className='link' to="/options">
                    <button>Options</button>
                </Link>
                <label>Change game settings</label>
            </div>
            <div>
                <Link className='link' to="/about">
                    <button>About</button>
                </Link>
                <label>See general information about the game</label>
            </div>
        </div>
    )
}

export default HomePage