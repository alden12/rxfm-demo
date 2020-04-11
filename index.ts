import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';
import { div, children, addToBody } from 'rxfm';

const app = () => div().pipe(
  children('Hello, world!'),
);

addToBody(app);

const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);

source.subscribe(x => console.log(x));
