import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Receitas from '../screens/Receitas'
import Login from '../screens/Login'
import AddReceita from '../screens/AddReceita'
import MinhasReceitas from '../screens/MinhasReceitas'
import ReceitaPage from  '../screens/ReceitaPage'
import EditReceita from '../screens/EditReceita'

const Navigator = () => {
    return (
        <div>
        <BrowserRouter>
      <Navbar/>
        <Switch>
        <Route path={"/"} exact component={Login}/>
        <Route path={"/login"} component={Login}/>
        <Route path={"/addReceita"} component={AddReceita}/>
        <Route path={"/receitas"} component={Receitas}/>
        <Route path={"/minhasReceitas"} component={MinhasReceitas}/>
        
        </Switch>
        <Switch>
        <Route path={"/receitaPage/:id"} component={ReceitaPage}/>
        <Route path={"/editReceita/:id"} component={EditReceita}/>
        </Switch>
      </BrowserRouter>
        </div>
    );
};

export default Navigator;