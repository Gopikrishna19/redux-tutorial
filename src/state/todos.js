import t from 'tcomb';
import {Todo} from './todo';

export const Todos = t.list(Todo, 'Todos');

export const getDefaultState = () => Todos([]);
