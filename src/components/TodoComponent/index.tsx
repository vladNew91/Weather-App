import React from "react";
import { Todo } from "../../types";
import styles from "../../styles/index.module.css";

interface TodoComponentProps {
    todo: Todo;
    index: number;
    onSubmitEdit: (todo: Todo) => void;
    onSubmitDelete: (todo: Todo) => void;
}

export const TodoComponent: React.FC<TodoComponentProps> = (props: TodoComponentProps): JSX.Element => {
    const [todoName, setTodoName] = React.useState<string>(props.todo.name);
    const [isEdit, setIsEdit] = React.useState<boolean>(false);

    const onEditHandle = (todo: Todo) => {
        if (isEdit) props.onSubmitEdit({ ...todo, name: todoName });
        setIsEdit(!isEdit);
    };
    return (
        <div className={styles.listItem}>
            <div>
                {`${props.index}. `}

                {isEdit ? (
                    <input
                        type='text'
                        value={todoName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoName(e.target.value)}
                    />
                ) : (
                    props.todo.name
                )}
            </div>

            <button className={styles.btnEdit} onClick={() => onEditHandle(props.todo)}>
                Edit
            </button>

            <button className={styles.btnDel} onClick={() => props.onSubmitDelete(props.todo)}>
                Delete
            </button>
        </div>
    );
};
