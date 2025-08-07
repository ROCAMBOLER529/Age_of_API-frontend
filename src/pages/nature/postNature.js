import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import PostNatureLink from "./comp/PostNatureLink";

const PostNature = () => {
        const [name, setName] = useState('');
        const [introduced, setIntroduced] = useState('');
        const [food, setFood] = useState('');
        const [hp, setHP] = useState('');
        const [wood, setWood] = useState('');
        const [stone, setStone] = useState('');
        const [gold, setLOS] = useState('');

    return (
        <body>
            <h1>Add a wild nature object</h1>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name: </label>
                            <input type="text" placeholder='ej. "Tree"' onChange={(e) => setName(e.target.value)}/>
                        </td>
                        <td>
                            <label>Introduced in: </label>
                            <input type="text" placeholder='ej. "Age of Empires"' onChange={(e) => setIntroduced(e.target.value)}/>
                        </td>
                        <td>
                            <label>HP: </label>
                            <input type="number" placeholder='ej. "6"' onChange={(e) => setHP(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Food: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setFood(e.target.value)}/>
                        </td>
                        <td>
                            <label>Wood: </label>
                            <input type="number" placeholder='ej. "100"' onChange={(e) => setWood(e.target.value)}/>
                        </td>
                        <td>
                            <label>Stone: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setStone(e.target.value)}/>
                        </td>
                        <td>
                            <label>Gold: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setLOS(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/nature" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <PostNatureLink 
                                name={name}
                                introduced={introduced}
                                hp={hp}
                                food={food}
                                wood={wood}
                                stone={stone}
                                gold={gold}
                            />
                        </td>
                    </tr>
                </table>      
            </form>
        </body>
    );
}

export default PostNature;
