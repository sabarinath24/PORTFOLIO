import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpages from '../Landingpages/Landingpages';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Landingpages/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
