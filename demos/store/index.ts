import { div, children, classes, store } from 'rxfm';
import { storeSubject } from './store';
import { todoList } from './todo-list';

import './store.css';

export const todoApp = () => div().pipe(
  classes('app'),
  children(todoList()),
  store(storeSubject),
);
