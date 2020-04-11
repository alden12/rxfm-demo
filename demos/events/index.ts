import { div, children, event, button } from 'rxfm';
import { tap } from 'rxjs/operators';

export const eventDemo = () => button().pipe(
  children('Click Me! (Open console to see result)'),
  event(
    'click',
    tap(() => console.log('A click event!')),
  )
);
