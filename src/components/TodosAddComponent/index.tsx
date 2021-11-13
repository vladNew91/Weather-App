import React from "react";
import { useHistory } from "react-router";
import styles from "../../styles/index.module.css";
import { Todo } from "../../types";

export interface TodosAddComponentProps {
    onSubmit: (todo: Todo) => void;
}

export const TodosAddComponent: React.FC<TodosAddComponentProps> = (props: TodosAddComponentProps): JSX.Element => {
    const history = useHistory();
    const goToPage = (location: string) => history.push(location);

    const [todo, setTodo] = React.useState<string>("");

    const createTodo = () => {
        if (todo.length) {
            props.onSubmit({
                id: Date.now(),
                name: todo,
            });
            setTodo("");
        }
    };

    return (
        <div className={styles.content}>
            <div>Create todo:</div>

            <div>
                <input
                    type='text'
                    placeholder='Todo name'
                    value={todo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
                />

                <button className={styles.btnCreate} onClick={createTodo}>
                    Create
                </button>
            </div>

            <button className={styles.btnGo} onClick={() => goToPage("/list")}>
                Go to list
            </button>
        </div>
    );
};
