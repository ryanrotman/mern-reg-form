import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FirstStep from "../components/FirstStep";
import Header from "../components/Header";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";

const AppRouter = () => {
    const [user, setUser] = useState({});

    const updateUser = (data) => {
        setUser((prevUser) => ({ ...prevUser, ...data }));
    };

    const resetUser = () => {
        setUser({});
    };

    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route component={FirstStep} path="/" exact={true} />
                    <Route component={SecondStep} path="/second" />
                    <Route component={ThirdStep} path="/third" />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default AppRouter;