import { div, children, addToBody } from 'rxfm';

const app = () => div().pipe(
  children('Hello, world!'),
);

addToBody(app);
