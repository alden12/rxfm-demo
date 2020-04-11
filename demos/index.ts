import { div, h1, h3, children, classes } from 'rxfm';
import { helloWorld } from './hello-world';

import './demos.css'

const heading = (text: string) => h3().pipe(
  classes('underline'),
  children(text),
);

export const demoApp = () => div().pipe(
  children(
    h1().pipe(
      classes('underline'),
      children('Welcome to RxFM!'),
    ),
    'Have a look at the exaples below and view their code in the \'demos\' folder!',
    heading('Hello World'),
    helloWorld(),
  ),
);
