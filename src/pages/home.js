import React from "react";
import { NavLink } from "../components/HomeLinks";

const Home = () => {
    const token = localStorage.getItem('token');

    return (
        <body>
            <header>
                <h1>Age of API</h1>
                <p>The best REST API for Age of Empire 1</p>
                <p>v 1.0</p>
            </header>

            <div id="buttom-link">
                <NavLink to="/civilizations" activeStyle>Civilizations</NavLink>
                <NavLink to="/buildings" activeStyle>Buildings</NavLink>
                <NavLink to="/units" activeStyle>Units</NavLink>
                <NavLink to="/techs" activeStyle>Techs</NavLink>
                <NavLink to="/animals" activeStyle>Animals</NavLink>
                <NavLink to="/nature" activeStyle>Nature</NavLink>
                { token ? (
                    <NavLink to="/users" activeStyle>Users</NavLink>
                ) : (
                    <></>
                )
                }
            </div>
        </body>
    );
}

export default Home;