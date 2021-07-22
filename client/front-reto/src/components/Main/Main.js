import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Inicio from '../../pages/Inicio/Inicio';
//import Staff from '../../pages/Staff';
//import Location from '../../pages/Location';
//import Contact from '../../pages/Contact';
import Login from '../../pages/Login/Login';
//import Counter from '../../pages/Counter/Counter'
import './Main.css';

const Main= () =>{
    
        return (
            <main className='Main'>
                <div className="wrapper">
                    <Switch>
                        <Route path="/" component={Inicio} exact />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Login} />
                        {/* <Route path="/staff" component={Staff} />
                        <Route path="/location" component={Location} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/Counter" component={Counter} /> */}
                    </Switch>
                </div>
            </main>
        )
    }


export default Main;
