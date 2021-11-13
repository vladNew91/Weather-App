import React from "react";
import { useHistory } from "react-router-dom";
import { TodoComponent } from "..";
import styles from "../../styles/index.module.css";
import { Todo } from "../../types";

type TodoListComponentProps = {
    todos: Todo[];
    onSubmitDelete: (todo: Todo) => void;
    onSubmitEdit: (todo: Todo) => void;
};

export const TodoListComponent: React.FC<TodoListComponentProps> = (props: TodoListComponentProps): JSX.Element => {
    const history = useHistory();
    const goToPage = (location: string) => history.push(location);

    return (
        <div className={styles.content}>
            {!props.todos.length ? (
                <div>No Todos &#9786;</div>
            ) : (
                props.todos.map((todo: Todo, index: number) => (
                    <TodoComponent
                        key={todo.id}
                        todo={todo}
                        onSubmitEdit={props.onSubmitEdit}
                        index={++index}
                        onSubmitDelete={props.onSubmitDelete}
                    />
                ))
            )}

            <button className={styles.btnGo} onClick={() => goToPage("")}>
                Go to home page
            </button>
        </div>
    );
};
