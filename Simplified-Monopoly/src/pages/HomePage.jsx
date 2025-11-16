import { Link } from "react-router"

const HomePage = () => {

    return (
        <main id="home-container">
            <h1 id="welcome-sign">Welcome to Simply Monopoly</h1>
            <table className="welcome-table">
                <tr>
                    <td>
                        <Link className='link' to="/game">
                            <button>Play</button>
                        </Link>
                    </td>
                    <td>
                        <label>Play the game with set rules</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link className='link' to="/rules">
                            <button>Rules</button>
                        </Link>
                    </td>
                    <td>
                        <label>See the rules for the game</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link className='link' to="/options">
                            <button>Options</button>
                        </Link>
                    </td>
                    <td>
                        <label>Change game settings</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link className='link' to="/about">
                            <button>About</button>
                        </Link>
                    </td>
                    <td>
                        <label>See general information about the game</label>
                    </td>
                </tr>
            </table>
        </main>
    )
}

export default HomePage