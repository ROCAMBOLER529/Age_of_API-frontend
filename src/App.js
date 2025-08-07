import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/styles.css';

import Animals from './pages/animals';
import Buildings from './pages/buildings';
import Civilizations from './pages/civilizations';
import Home from './pages/home';
import Nature from './pages/nature';
import Techs from './pages/techs';
import Units from './pages/units';
import Users from './pages/users';

import LogIn from './pages/auth/logIn';
import Navbar from './components/Navbar';
import SignUp from './pages/auth/signUp';
import Account from './pages/auth/account';

import PostUnits from './pages/units/postUnits';
import ModifyUnit from './pages/units/modifyUnit';
import ModifyStatOfUnit from './pages/units/modifyStatOfUnit';

import PostPlainBuilding from './pages/buildings/postPlainBuilding';
import PostSimpleBuilding from './pages/buildings/postSimpleBuilding';
import ModifyBuilding from './pages/buildings/modifyBuilding';
import ModifyNameOfBuilding from './pages/buildings/modifyNameOfBuilding';

import PostPlainTech from './pages/techs/postPlainTech';
import PostSimpleTech from './pages/techs/postSimpleTech';

import PostAnimal from './pages/animals/postAnimal';
import ModifyAnimal from './pages/animals/modifyAnimal';
import ModifyNameOfAnimal from './pages/animals/modifyNameOfAnimal';

import PostNature from './pages/nature/postNature';
import ModifyNature from './pages/nature/modifyNature';
import ModifyResOfNature from './pages/nature/modifyResOfNature';

import PostCiv from './pages/civilizations/postCiv';
import ModifyCiv from './pages/civilizations/modifyCiv';
import AddUnitToCiv from './pages/civilizations/addUnitToCiv';

import AddTechToCiv from './pages/civilizations/addTechToCiv';
import ModifyTech from './pages/techs/modifyTech';
import ModifyResOfTech from './pages/techs/modifyResOfTech';

import PostUser from './pages/usuarios/postUser';
import ModifyUser from './pages/usuarios/modifyUser';


function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/animals' element={<Animals />}/>
        <Route path='/buildings' element={<Buildings />}/>
        <Route path='/civilizations' element={<Civilizations />}/>
        <Route path='/nature' element={<Nature />}/>
        <Route path='/techs' element={<Techs />}/>
        <Route path='/units' element={<Units />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/auth/login' element={<LogIn />}/>
        <Route path='/auth/signup' element={<SignUp />}/>
        <Route path='/account' element={<Account />}/>

        <Route path='/units/postUnit' element={<PostUnits />}/>
        <Route path='/units/modifyUnit' element={<ModifyUnit />}/>
        <Route path='/units/modifyStatOfUnit' element={<ModifyStatOfUnit />}/>

        <Route path='/buildings/postPlainBuilding' element={<PostPlainBuilding />}/>
        <Route path='/buildings/postSimpleBuilding' element={<PostSimpleBuilding />}/>
        <Route path='/buildings/modifyBuilding' element={<ModifyBuilding />}/>
        <Route path='/buildings/modifyNameOfBuilding' element={<ModifyNameOfBuilding />}/>

        <Route path='/techs/postPlainTech' element={<PostPlainTech />}/>
        <Route path='/techs/postSimpleTech' element={<PostSimpleTech />}/>
        <Route path='/techs/modifyTech' element={<ModifyTech />}/>
        <Route path='/techs/modifyResOfTech' element={<ModifyResOfTech />}/>

        <Route path='/animals/postAnimal' element={<PostAnimal />}/>
        <Route path='/animals/modifyAnimal' element={<ModifyAnimal />}/>
        <Route path='/animals/modifyNameOfAnimal' element={<ModifyNameOfAnimal />}/>

        <Route path='/nature/postNature' element={<PostNature />}/>
        <Route path='/nature/modifyNature' element={<ModifyNature />}/>
        <Route path='/nature/modifyResOfNature' element={<ModifyResOfNature />}/>

        <Route path='/civilizations/postCiv' element={<PostCiv />}/>
        <Route path='/civilizations/modifyCiv' element={<ModifyCiv />}/>
        <Route path='/civilizations/addUnitToCiv' element={<AddUnitToCiv />}/>
        <Route path='/civilizations/addTechToCiv' element={<AddTechToCiv />}/>

        <Route path='/users/postUser' element={<PostUser />}/>
        <Route path='/users/modifyUser' element={<ModifyUser />}/>
      </Routes>
    </Router>
  );
}

export default App;
