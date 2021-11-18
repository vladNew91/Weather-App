import React from "react";
import { useDispatch } from "react-redux";
import { HomePageComponent } from "../../components";

export const HomePageContainer: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    return <HomePageComponent />;
};
