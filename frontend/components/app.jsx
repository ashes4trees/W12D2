import React from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from "./greeting/greeting_container";

const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;