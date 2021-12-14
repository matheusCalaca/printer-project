
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ImpressoraLogistica from '../page/ImpressoraLogistica';

function AppRouter() {
        return (
            <Router>
                <Route path="/" exact component={ImpressoraLogistica} />
                <Route path="/print" exact component={ImpressoraLogistica} />
            </Router>
        );
    }

export default AppRouter;