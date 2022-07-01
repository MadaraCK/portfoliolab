import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Login from "./components/login";
import NewAccount from "./components/newAccount";
import Core from "./components/core";
import PrivateRoutes from "./components/PrivateRoutes";
import IfLogged from "./components/IfLogged";
import './scss/main.scss'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Core/>} path="/"/>
                <Route element={<Login/>} path="/login"/>
                <Route element={<NewAccount/>} path="/newAccount"/>
                <Route element={<PrivateRoutes/>}>
                    <Route element={<IfLogged/>} path="/IfLogged"/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;