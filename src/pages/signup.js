import React from "react";
import { NavLink } from "../components/HomeLinks";

const SignUp = () => {
    return (
        <body>
            <h1>SignUp</h1>

            <form>
                <div class="campo">
                    <label>Username: </label>
                    <input type="text"/>
                </div>
                <div class="campo">
                    <label>Password: </label>
                    <input type="password"/>
                </div>

                <div>
                    <NavLink to="/" activeStyle>Home</NavLink>
                    <NavLink to="/" activeStyle>SignUp</NavLink>
                </div>
            </form>
        </body>
    );
}

export default SignUp;