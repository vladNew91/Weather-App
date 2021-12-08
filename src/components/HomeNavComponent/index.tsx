import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../styles/index.module.css';

interface HomeNavComponentProps {
    setCity: (city: string) => void;
}

export const HomeNavComponent: React.FC<HomeNavComponentProps> = (props: HomeNavComponentProps)
: JSX.Element => {
    const history = useHistory();

    const goTo = (location: string) => {
        history.push(`${location}${localStorage.getItem('city') || 'Minsk'}`);
    };

    return (
        <nav>
            <button className={styles.btn} onClick={() => props.setCity('Minsk')}>
                Minsk
            </button>

            <button className={styles.btn} onClick={() => props.setCity('London')}>
                London
            </button>

            <button className={styles.btn} onClick={() => props.setCity('New York')}>
                New York
            </button>

            <button className={styles.btnGo} onClick={() => goTo('/in/')}>
                Weather by hours
            </button>
        </nav>
    );
};
