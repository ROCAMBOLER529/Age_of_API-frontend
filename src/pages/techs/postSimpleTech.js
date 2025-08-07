import React from "react";
import { NavLink } from "../../components/HomeLinks";
import { useState } from "react";
import PostTechLink from "./comp/PostTechLink";

const PostSimpleTech = () => {
    const [name, setName] = useState('');
            const [introduced, setIntroduced] = useState('');
            const [age, setAge] = useState('');
            const [effect, setEffecy] = useState('');
        
        const [at, setMelee] = useState('');
        const [food, setFood] = useState('');
        const [wood, setWood] = useState('');
                const [stone, setStone] = useState('');
                const [gold, setGold] = useState('');
                const [time_in_seconds, setTime] = useState('');
    
    return (
        <body>
            <h1>Add a simple Tech</h1>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name: </label>
                            <input type="text" placeholder='ej. "Sacrifice"' onChange={(e) => setName(e.target.value)}/>
                        </td>
                        <td>
                            <label>Introduced in: </label>
                            <input type="text" placeholder='ej. "Rise of Rome"' onChange={(e) => setIntroduced(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Age unlocked: </label>
                            <input type="number" placeholder='ej. "4"' onChange={(e) => setAge(e.target.value)}/>
                        </td>
                        <td>
                            <label>Effects: </label>
                            <input type="text" placeholder='ej. "Priests can be sacrificed to instantly convert an enemy unit"' onChange={(e) => setEffecy(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Researched in building: </label>
                            <input type="text" placeholder='ej. "Temple"' onChange={(e) => setMelee(e.target.value)}/>

                            <label>Time in seconds to build: </label>
                            <input type="number" placeholder='ej. "100"' onChange={(e) => setTime(e.target.value)}/>
                        </td>
                        <td>
                            <label>Food: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setFood(e.target.value)}/>

                            <label>Wood: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setWood(e.target.value)}/>

                            <label>Stone: </label>
                            <input type="number" placeholder='ej. "0"' onChange={(e) => setStone(e.target.value)}/>

                            <label>Gold: </label>
                            <input type="number" placeholder='ej. "400"' onChange={(e) => setGold(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/techs" activeStyle>Back</NavLink>        
                        </td>
                        <td>
                            <PostTechLink
                                name={name}
                                introduced={introduced}
                                age={age}
                                effect={effect}
                                at={at}
                                time_in_seconds={time_in_seconds}
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

export default PostSimpleTech;
