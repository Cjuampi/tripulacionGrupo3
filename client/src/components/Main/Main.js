import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Inicio from '../../pages/Inicio/Inicio';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';
import MapDetail from '../../pages/MapaAmpliado/MapaAmpliado';
import Events from '../../pages/Events/Events';
import DetailsE from '../../pages/DetailEvents/DetailEvents'
import './Main.css';

const Main= () =>{
    
        return (
            <main className='Main'>
                <div className="wrapper">
                    <Switch>
                        <Route path="/" component={Inicio} exact />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/mapDetail" component={MapDetail} />
                        <Route path="/events" component={Events} />
                        <Route path="/detailE" component={DetailsE} />
                        {/*<Route path="/Counter" component={Counter} /> */}
                    </Switch>
                </div>
            </main>
        )
    }


export default Main;
