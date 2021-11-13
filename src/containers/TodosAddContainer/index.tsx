import React from "react";
import { useDispatch } from "react-redux";
import { TodosAddComponent } from "../../components";
import { todoAdd } from "../../modules/actions";
import { Todo } from "../../types";

export const TodosAddContainer: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    const handleSubmit = (todo: Todo) => dispatch(todoAdd(todo));

    return <TodosAddComponent onSubmit={handleSubmit} />;
};
