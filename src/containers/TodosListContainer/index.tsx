import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoListComponent } from "../../components";
import { todoDelete, todoEdit } from "../../modules/actions";
import { selectTodosData } from "../../modules/selectors";
import { Todo } from "../../types";

export const TodosListContainer: React.FC = (): JSX.Element => {
    const todos = useSelector(selectTodosData());

    const dispatch = useDispatch();

    const handleSubmitDelete = (todo: Todo) => dispatch(todoDelete(todo));

    const handleSubmitEdit = (todo: Todo) => dispatch(todoEdit(todo));

    return <TodoListComponent todos={todos} onSubmitEdit={handleSubmitEdit} onSubmitDelete={handleSubmitDelete} />;
};
