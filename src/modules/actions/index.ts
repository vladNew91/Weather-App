import { Action } from 'redux';
import { Todo } from '../../types';
import {
    TODO_ADD, TODO_DELETE, TODO_EDIT,
} from '../constants';

export interface TodoAddAction extends Action {
    type: typeof TODO_ADD;
    todo: Todo;
}

export interface TodoDeleteAction extends Action {
    type: typeof TODO_DELETE;
    todo: Todo;
}

export interface TodoEditAction extends Action {
    type: typeof TODO_EDIT;
    todo: Todo;
}

export type TodosActions = TodoAddAction | TodoDeleteAction | TodoEditAction;

export const todoAdd = (todo: Todo): TodosActions => ({
    type: TODO_ADD,
    todo,
});

export const todoDelete = (todo: Todo): TodosActions => ({
    type: TODO_DELETE,
    todo,
});

export const todoEdit = (todo: Todo): TodosActions => ({
    type: TODO_EDIT,
    todo,
});
