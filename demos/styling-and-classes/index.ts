import { div, children, classes, styles } from 'rxfm';

import './example-class.css';

const classy = () => div().pipe(
  classes('example'),
  children('Classy Text!'),
); 

const stylish = () => div().pipe(
  styles({
    letterSpacing: '5px',
    color: 'lightcoral'
  }),
  children('Stylish Text!'),
)

export const stylingAndClasses = () => div().pipe(
  children(classy(), stylish()),
);
