import { div, h1, h3, children, classes, Component } from 'rxfm';
import { helloWorld } from './hello-world';
import { stylingAndClasses } from './styling-and-classes';

import './demos.css'

const withHeading = (heading: string, component: Component<any>) => div().pipe(
  children(
    h3().pipe(classes('underline'), children(heading)),
    component,
  ),
);

export const demoApp = () => div().pipe(
  children(
    h1().pipe(classes('underline'), children('Welcome to RxFM!')),
    'Have a look at the exaples below and view their code in the \'demos\' folder!',
    withHeading('Hello World', helloWorld()),
    withHeading('Styling & Classes', stylingAndClasses()),
  ),
);
