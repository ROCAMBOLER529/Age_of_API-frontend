import React from "react";
import { NavLink } from "../../components/HomeLinks";
import { useState } from "react";
import PostPlainBuildingLink from "./comp/PostPlainBuildingLink";

const PostPlainBuilding = () => {
        const [name, setName] = useState('');
        const [introduced, setIntroduced] = useState('');
        const [type, setType] = useState('');
        const [age, setAge] = useState('');
    
    return (
        <body>
            <h1>Add a plain building</h1>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name: </label>
                            <input type="text" placeholder='ej. "Dock"' onChange={(e) => setName(e.target.value)}/>
                        </td>
                        <td>
                            <label>Type: </label>
                            <input type="text" placeholder='ej. "Military"' onChange={(e) => setIntroduced(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Introduced in: </label>
                            <input type="text" placeholder='ej. "Age of Empires"' onChange={(e) => setType(e.target.value)}/>
                        </td>
                        <td>
                            <label>Age unlocked: </label>
                            <input type="number"placeholder='ej. "1"' onChange={(e) => setAge(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/buildings" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <PostPlainBuildingLink 
                                name={name}
                                type={type}
                                introduced={introduced}
                                age={age}
                            />
                        </td>
                    </tr>
                </table>       
            </form>
        </body>
    );
}

export default PostPlainBuilding;
