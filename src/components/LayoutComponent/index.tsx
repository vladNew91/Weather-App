import styles from "../../styles/index.module.css";

export interface LayoutComponentProps {
    children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }: LayoutComponentProps): JSX.Element => {
    return (
        <section className={styles.container}>
            <h2>Weather App</h2>

            {children}
        </section>
    );
};
