import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LayoutComponent } from "./components";
import { store } from "./modules";
import { HomePage, TodosListPage } from "./pages";

export const App: React.FC = (): JSX.Element => {
    return (
        <Provider store={store}>
            <LayoutComponent>
                <Router>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/list' component={TodosListPage} />
                </Router>
            </LayoutComponent>
        </Provider>
    );
};
