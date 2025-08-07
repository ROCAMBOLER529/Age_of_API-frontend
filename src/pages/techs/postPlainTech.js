import React from "react";
import { NavLink } from "../../components/HomeLinks";
import { useState } from "react";
import PostPlainTechLink from "./comp/PostPlainTechLink";

const PostPlainTech = () => {
    const [name, setName] = useState('');
    const [introduced, setIntroduced] = useState('');
    const [age, setAge] = useState('');
    const [effect, setEffecy] = useState('');

    return (
        <body>
            <h1>Add a plain tech, without stats</h1>
            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name: </label>
                            <input type="text" name="name" id="name" placeholder='ej. "Craftsmanship"' onChange={(e) => setName(e.target.value)}/>
                        </td>
                        <td>
                            <label>Introduced in: </label>
                            <input type="text" name="introduced" id="introduced" placeholder='ej. "Age of Empires"' onChange={(e) => setIntroduced(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Age unlocked: </label>
                            <input type="number" name="age" id="age" placeholder='ej. "3"' onChange={(e) => setAge(e.target.value)}/>
                        </td>
                        <td>
                            <label>Effect: </label>
                            <input type="text" name="effect" id="effect" placeholder='ej. "Villagers get +0.55 speed"' onChange={(e) => setEffecy(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/techs" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <PostPlainTechLink 
                                name={name}
                                introduced={introduced}
                                age={age}
                                effect={effect}
                            />
                        </td>
                    </tr>
                </table>        
            </form>
        </body>
    );
}

export default PostPlainTech;
