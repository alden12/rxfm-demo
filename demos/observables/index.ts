import { div, children } from 'rxfm';
import { interval } from 'rxjs';

export const observablesDemo = () => div().pipe(
  children('Counter: ', interval(1000), 's elapsed.'),
);
