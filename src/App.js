import React from 'react';
import './scss/main.scss'
import Login from "./components/login";
import NewAccount from "./components/newAccount";
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Header from "./components/header";


function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Header/>} path="/"/>
                <Route element={<Login/>} path="/login"/>
                <Route element={<NewAccount/>} path="/newAccount"/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;