import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Inicio from '../../pages/Inicio/Inicio';
import Login from '../../pages/Login/Login';
import Sigup from '../../pages/Signup/Signup';
import MapDetail from '../../pages/MapaAmpliado/MapaAmpliado'
import './Main.css';

const Main= () =>{
    
        return (
            <main className='Main'>
                <div className="wrapper">
                    <Switch>
                        <Route path="/" component={Inicio} exact />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Sigup} />
                        <Route path="/mapDetail" component={MapDetail} />
                        {/* <Route path="/location" component={Location} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/Counter" component={Counter} /> */}
                    </Switch>
                </div>
            </main>
        )
    }


export default Main;
