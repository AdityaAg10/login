import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import from 'react-router-dom'
import Login from './login';
import SignUp from './signup';
import Home from './home';
import NoPage from "./nopage";

const ReactRouterSetup = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<NoPage/>} />
            </Routes>
        </Router>
    );
};

export default ReactRouterSetup;
