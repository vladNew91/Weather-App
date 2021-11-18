import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LayoutComponent } from "./components";
import { store } from "./modules";
import { HomePage, WeatherHoursPage } from "./pages";

export const App: React.FC = (): JSX.Element => {
    return (
        <Provider store={store}>
            <LayoutComponent>
                <Router>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/in/' strict component={WeatherHoursPage} />
                </Router>
            </LayoutComponent>
        </Provider>
    );
};
