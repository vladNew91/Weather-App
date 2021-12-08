import React from 'react';
import { useDispatch } from 'react-redux';
import { HomeNavComponent } from '../../components';
import { weatherRequest } from '../../modules/actions';

export const HomeNavContainer: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    const setCity = React.useCallback((city: string) => {
        localStorage.setItem('city', city);
        dispatch(weatherRequest());
    },[dispatch]);

    return <HomeNavComponent setCity={setCity} />;
};
