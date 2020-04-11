import { div, children, styles } from 'rxfm';

const componentC = () => div().pipe(
  styles({ color: 'lightcoral', paddingLeft: '10px' }),
  children('Component C'),
)

const componentB = () => div().pipe(
  styles({ color: 'lightblue', paddingLeft: '10px' }),
  children('Component B', componentC()),
)

const componentA = () => div().pipe(
  styles({ color: 'lightgreen', paddingLeft: '10px' }),
  children('Component A', componentB()),
)

export const components = () => div().pipe(
  children(componentA()),
);
