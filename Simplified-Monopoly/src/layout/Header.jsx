import NavMenu from "./NavMenu";
import { useLocation } from "react-router";

const Header = () => {

    const location = useLocation();
    const { pathname } = location;
    const hideNavRoutes = '/game';

    return (
        <header>
            <div id="header-container">
                <h1>Simplified Monopoly</h1>
                {!(hideNavRoutes === pathname) && <NavMenu />}
                
            </div>
        </header>
    )
}

export default Header;