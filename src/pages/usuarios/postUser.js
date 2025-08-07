import React from "react";
import { NavLink } from "../../components/HomeLinks";
import { useState } from "react";
import PostUserLink from "./comp/PostUserLink";

const PostUser = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <body>
            <h1>Add a user, rol will be "std" standard</h1>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name: </label>
                            <input type="text" placeholder='ej. "ROCAMBOLER529"' onChange={(e) => setName(e.target.value)}/>
                        </td>
                        <td>
                            <label>Password: </label>
                            <input type="password" placeholder='ej. "Absjdifr8723"' onChange={(e) => setPassword(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/users" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <PostUserLink 
                                name={name}
                                password={password}
                            />
                        </td>
                    </tr>
                </table>      
            </form>
        </body>
    );
}

export default PostUser;
