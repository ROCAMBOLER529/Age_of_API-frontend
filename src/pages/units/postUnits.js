import React from "react";
import { NavLink } from "../../components/HomeLinks";
import { useState } from "react";
import PostUnitLink from "./comp/PostUnitLink";

const PostUnits = () => {
    const [name, setName] = useState('');
    const [introduced, setIntroduced] = useState('');
    const [age, setAge] = useState('');
    const [type, setType] = useState('');
    const [hp, setHP] = useState('');
    const [at, setAt] = useState('');
    const [meleeArmor, setMelee] = useState('');
    const [pierceArmor, setPierce] = useState('');
    const [speed, setSpeed] = useState('');
    const [los, setLOS] = useState('');
    const [food, setFood] = useState('');
    const [wood, setWood] = useState('');
    const [stone, setStone] = useState('');
    const [gold, setGold] = useState('');
    const [time_in_seconds, setTime] = useState('');
    const [rate, setRate] = useState('');

    return (
        <body>
            <h1>Add a unit</h1>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name: </label>
                            <input type="text" placeholder='ej "Improved Bowman"' onChange={(e) => setName(e.target.value)}/>
                        </td>
                        <td>
                            <label>Introduced in: </label>
                            <input type="text" placeholder='ej "Age of Empires"' onChange={(e) => setIntroduced(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Age unlocked: </label>
                            <input type="number" placeholder='ej "3"' onChange={(e) => setAge(e.target.value)}/>
                        </td>
                        <td>
                            <label>Type: </label>
                            <input type="text" placeholder='ej. "Archery"' onChange={(e) => setType(e.target.value)}/>

                            <label>Is a hero?: </label>
                            <input type="checkbox"  onChange={(e) => setAge(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Trained in building: </label>
                            <input type="text" placeholder='ej "Archery Range"' onChange={(e) => setAt(e.target.value)}/>
                        </td>
                        <td>
                            <label>Food: </label>
                            <input type="number" placeholder='ej "40"' onChange={(e) => setFood(e.target.value)}/>

                            <label>Wood: </label>
                            <input type="number" placeholder='ej "0"' onChange={(e) => setWood(e.target.value)}/>

                            <label>Stone: </label>
                            <input type="number" placeholder='ej "0"' onChange={(e) => setStone(e.target.value)}/>

                            <label>Gold: </label>
                            <input type="number" placeholder='ej "20"' onChange={(e) => setGold(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Time in second to recruit: </label>
                            <input type="number" placeholder='ej "30"' onChange={(e) => setTime(e.target.value)}/>
                        </td>
                        <td>
                            <label>HP: </label>
                            <input type="number" placeholder='ej "40"' onChange={(e) => setHP(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Melee armor: </label>
                            <input type="number" placeholder='ej "0"' onChange={(e) => setMelee(e.target.value)}/>

                            <label>Pierce armor: </label>
                            <input type="number" placeholder='ej "0"' onChange={(e) => setPierce(e.target.value)}/>
                        </td>
                        <td>
                            <label>Rate of fire: </label>
                            <input type="number" placeholder='ej "1.4"' onChange={(e) => setRate(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Speed: </label>
                            <input type="number" placeholder='ej "1"' onChange={(e) => setSpeed(e.target.value)}/>
                        </td>
                        <td>
                            <label>Line of Sight: </label>
                            <input type="number" placeholder='ej "8"' onChange={(e) => setLOS(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/units" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <PostUnitLink 
                                name={name}
                                introduced={introduced}
                                age={age}
                                type={type}
                                at={at}
                                food={food}
                                wood={wood}
                                stone={stone}
                                gold={gold}
                                time_in_seconds={time_in_seconds}
                                hp={hp}
                                meleeArmor={meleeArmor}
                                pierceArmor={pierceArmor}
                                rate={rate}
                                speed={speed}
                                los={los}
                            />
                        </td>
                    </tr>
                </table>       
            </form>
        </body>
    );
}

export default PostUnits;
