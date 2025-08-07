import React from "react";
import { NavLink } from "../../components/HomeLinks";
import { useState } from "react";
import PostBuildingLink from "./comp/PostBuildingLink";

const PostSimpleBuilding = () => {
        const [name, setName] = useState('');
        const [type, setType] = useState('');
        const [age, setAge] = useState('');
        const [drop_off_resources, setDrop] = useState('');
        const [can_hold_units, setHold] = useState('');
        const [food, setFood] = useState('');
        const [wood, setWood] = useState('');
        const [stone, setStone] = useState('');
        const [gold, setGold] = useState('');
        const [time_in_seconds, setTime] = useState('');
        const [width, setWidth] = useState('');
        const [melee_armor, setMelee] = useState('');
        const [pierce_armor, setPierce] = useState('');
        const [line_of_sight, setLOS] = useState('');
        const [hp, setHP] = useState('');
        const [height, setHeight] = useState('');
        const [introduced, setIntro] = useState('');

    return (
        <body>
            <h1>Add a simple building</h1>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name: </label>
                            <input type="text" placeholder='ej. "House"' onChange={(e) => setName(e.target.value)}/>
                        </td>
                        <td>
                            <label>Type: </label>
                            <input type="text" placeholder='ej. "Civilian"' onChange={(e) => setType(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Introduced in: </label>
                            <input type="text" placeholder='ej. "Age of Empires"' onChange={(e) => setIntro(e.target.value)}/>
                        </td>
                        <td>
                            <label>Age unlocked: </label>
                            <input type="number" placeholder='ej. "1"' onChange={(e) => setAge(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Can drop resources?: </label>
                            <input type="checkbox" onChange={(e) => setDrop(e.target.value)}/>
                        </td>
                        <td>
                            <label>Can hold units?: </label>
                            <input type="checkbox" onChange={(e) => setHold(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Food: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setFood(e.target.value)}/>
                            
                            <label>Wood: </label>
                            <input type="number" placeholder='ej. "30"' onChange={(e) => setWood(e.target.value)}/>

                            <label>Stone: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setStone(e.target.value)}/>

                            <label>Gold: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setGold(e.target.value)}/>
                        </td>
                        <td>
                            <label>Time in seconds to build: </label>
                            <input type="number" placeholder='ej. "20"' onChange={(e) => setTime(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Width tiles: </label>
                            <input type="number" placeholder='ej. "3"' onChange={(e) => setWidth(e.target.value)}/>
                            
                            <label>Hieght tiles: </label>
                            <input type="number" placeholder='ej. "3"' onChange={(e) => setHeight(e.target.value)}/>
                        </td>
                        <td>
                            <label>HP: </label>
                            <input type="number" placeholder='ej. "75"' onChange={(e) => setHP(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Melee armor: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setMelee(e.target.value)}/>
                            
                            <label>Pierce armor: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setPierce(e.target.value)}/>
                        </td>
                        <td>
                            <label>Line of sight: </label>
                            <input type="number" placeholder='ej. "2"' onChange={(e) => setLOS(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/buildings" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <PostBuildingLink 
                                name={name}
                                type={type}
                                introduced={introduced}
                                age={age}
                                drop_off_resources={drop_off_resources}
                                can_hold_units={can_hold_units}
                                food={food}
                                wood={wood}
                                stone={stone}
                                gold={gold}
                                time_in_seconds={time_in_seconds}
                                width={width}
                                height={height}
                                hp={hp}
                                melee_armor={melee_armor}
                                pierce_armor={pierce_armor}
                                line_of_sight={line_of_sight}                            
                            />
                        </td>
                    </tr>
                </table>     
            </form>
        </body>
    );
}

export default PostSimpleBuilding;
