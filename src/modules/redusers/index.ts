import { TodosActions } from './../actions/index';
import { Todo } from "../../types";
import { TODO_ADD, TODO_DELETE, TODO_EDIT } from "../constants";

export interface TodosState {
    data: Todo[],
}

const initialState: TodosState = {
    data: [],
};

export const todosReducer = (state = initialState, action: TodosActions) => {
    switch (action.type) {  
        case TODO_ADD:
            return {
                ...state,
                data: [...state.data, action.todo],
            }
        case TODO_DELETE:
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== action.todo.id),
            }
        case TODO_EDIT:
            return {
                ...state,
                data: state.data.map(item => item.id === action.todo.id ? action.todo : item),
            } 
        default:
            return state;
    }
};
