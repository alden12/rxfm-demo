import { div, children } from 'rxfm';

export const helloWorld = () => div().pipe(
  children('Hello, World!'),
)

// We could then call: 'addToBody(helloWorld)' to add the component into the page,
// but this is done in the app root file 'index.ts'.
