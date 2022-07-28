const Nav = (props) => {
    return(
            <nav>
            <div id="menu">
                <label htmlFor="toggle">
                    <i className="fa-solid fa-bars"></i>
                </label>
                <input type="checkbox" id="toggle"></input>
            </div>
            <div id="locationDiv">
                <h3>Location Method: Auto</h3>
            </div>
            <div id="lists">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>More</li>
                    <li id="login">Login</li>
                    
                </ul>
            </div>
            <div id="childrenProps">
                {/* {props.children} */}
            </div>    
            </nav>
    );
}

export default Nav;