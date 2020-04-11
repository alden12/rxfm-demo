import { button, children, select, event, mapToLatest, setState, stateful } from 'rxfm';
import { Observable } from 'rxjs';

interface ICounterState {
  count: number;
}

const counterStateless = (state: Observable<ICounterState>) => button().pipe(
  children(
    state.pipe(select('count')),
    ' clicks so far!',
  ),
  event(
    'click',
    mapToLatest(state),
    setState(({ count }) => ({ count: count + 1 })),
  ),
);

export const counter = () => stateful({ count: 0 }, counterStateless);
