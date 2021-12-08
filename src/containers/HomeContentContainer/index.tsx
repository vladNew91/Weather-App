import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeContentComponent } from '../../components';
import { weatherRequest } from '../../modules/actions';
import { selectWeather } from '../../modules/selectors';

export const HomeContentContainer: React.FC = (): JSX.Element => {
    const weather = useSelector(selectWeather);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(weatherRequest());
    }, [dispatch]);

    return <HomeContentComponent weather={weather} />;
};
