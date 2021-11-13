import { TodosState } from "./redusers";

export const selectTodosData = () => (state: TodosState) => state.data;
