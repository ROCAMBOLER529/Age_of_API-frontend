import React, { useState } from "react";
import { NavLink } from "../../components/HomeLinks";
import PostAnimalLink from "./comp/PostAnimalLink";

const PostAnimal = () => {
    const [name, setName] = useState('');
    const [introduced, setIntroduced] = useState('');
    const [canAttack, setCanAttack] = useState('');
    const [hp, setHP] = useState('');
    const [meleeArmor, setMelee] = useState('');
    const [pierceArmor, setPierce] = useState('');
    const [speed, setSpeed] = useState('');
    const [los, setLOS] = useState('');
    const [food, setFood] = useState('');
    
    return (
        <body>
            <h1>Add an animal</h1>

            <form>
                <table>
                    <tr>
                        <td>
                            <label>Name: </label>
                            <input type="text" placeholder='ej. "Gazelle"' onChange={(e) => setName(e.target.value)}/>
                        </td>
                        <td>
                            <label>Introduced in: </label>
                            <input type="text" placeholder='ej. "Age of Empires"' onChange={(e) => setIntroduced(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Is hostile?: </label>
                            <input type="checkbox"  onChange={(e) => setCanAttack(e.target.value)}/>
                        </td>
                        <td>
                            <label>HP: </label>
                            <input type="number" placeholder='ej. "8"' onChange={(e) => setHP(e.target.value)}/>
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
                            <label>Food dropped: </label>
                            <input type="number" placeholder='ej. "150"' onChange={(e) => setFood(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Speed: </label>
                            <input type="number" placeholder='ej. "1"' onChange={(e) => setSpeed(e.target.value)}/>
                        </td>
                        <td>
                            <label>Line of sight: </label>
                            <input type="number" placeholder='ej. "1.7"' onChange={(e) => setLOS(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <NavLink to="/animals" activeStyle>Back</NavLink>
                        </td>
                        <td>
                            <PostAnimalLink 
                                name={name}
                                introduced={introduced}
                                canAttack={canAttack}
                                hp={hp}
                                meleeArmor={meleeArmor}
                                pierceArmor={pierceArmor}
                                speed={speed}
                                los={los}
                                food={food}
                            />
                        </td>
                    </tr>
                </table>       
            </form>
        </body>
    );
}

export default PostAnimal;
